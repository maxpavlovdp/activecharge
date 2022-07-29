package com.km220.service;

import static java.time.ZoneOffset.UTC;

import com.km220.dao.job.ChargingJobEntity;
import com.km220.dao.job.ChargingJobState;
import com.km220.service.device.DeviceService;
import java.time.OffsetDateTime;
import java.time.ZoneOffset;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

class ChargingJobRunner {

  private final DeviceService deviceService;

  private static final String COMPLETED = "Completed";
  private static final String DEVICE_IS_OFF = "Device is off";

  private static final Logger logger = LoggerFactory.getLogger(ChargingJobRunner.class);

  public ChargingJobRunner(final DeviceService deviceService) {
    this.deviceService = deviceService;
  }

  public void run(ChargingJobEntity job, int scanIntervalMs) {
    logger.info("Process charging job with id = {}, number = {}, station number = {}",
        job.getId(), job.getNumber(), job.getStation().getNumber());

    var deviceStatus = deviceService.getState(job.getStation().getDeviceId());

    logger.info("Device state: {}", deviceStatus);

    job.setChargedWt(job.getChargedWt() + (float) deviceStatus.getPower() * scanIntervalMs / (3600 * 1000));
    job.setChargingWt((float) deviceStatus.getPower());
    job.setVoltage((float) deviceStatus.getVoltage());

    boolean completed = OffsetDateTime.now(UTC)
        .isAfter(job.getCreatedOn().plusSeconds(job.getPeriodSec()));
    if (completed) {
      deviceService.toggleOff(job.getStation().getDeviceId(), job.getPeriodSec());
      job.setReason(COMPLETED);
      job.setState(ChargingJobState.DONE);
      job.setStoppedOn(OffsetDateTime.now(ZoneOffset.UTC));
    }
    if (!completed && !deviceStatus.isSwitchState()) {
      job.setReason(DEVICE_IS_OFF);
      job.setState(ChargingJobState.FAILED);
      job.setStoppedOn(OffsetDateTime.now(ZoneOffset.UTC));
    }
  }
}

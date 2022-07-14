package com.km220;

import static java.lang.System.currentTimeMillis;

import com.km220.model.DeviceStatus;
import com.km220.service.DeviceCache;
import com.km220.service.DeviceService;
import com.km220.service.ewelink.PowerLimitOverloadService;
import com.km220.service.ewelink.EwelinkDeviceService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

@Service
public class PowerAggregationJob {

  @Value("${device.chargeTimeSecs}")
  private int chargeTimeSecs;

  @Value("${deviceId}")
  private String deviceId;

  private final DeviceService deviceService;
  private final PowerLimitOverloadService powerLimitOverloadService;

  public PowerAggregationJob(final EwelinkDeviceService deviceService,
      final PowerLimitOverloadService powerLimitOverloadService) {
    this.deviceService = deviceService;
    this.powerLimitOverloadService = powerLimitOverloadService;
  }

  public static volatile long onTime;
  public static volatile long offTime;
  public static volatile long chargingDurationSecs;
  public static volatile long chargingDurationLeftSecs;

  public static final long CHECK_INTERVAL_MILLIS = 3000;

  @Scheduled(fixedDelay = CHECK_INTERVAL_MILLIS)
  public void sumPower() {
    long now = currentTimeMillis();
    if (!DeviceCache.isOn) {
      return;
    }

    if (DeviceCache.isOn && now > offTime) {
      //todo: add error handling
      try {
        deviceService.toggleOff(deviceId, chargeTimeSecs);
        DeviceCache.isOn = false;
      } catch (Exception e) {
        e.printStackTrace();
      }
      return;
    }

    try {
      DeviceStatus status = deviceService.getStatus(deviceId);
      DeviceCache.powerWt = (float) status.getPower();
      DeviceCache.voltage = (float) status.getVoltage();
      DeviceCache.isOn = status.isSwitchState();
    } catch (Exception e) {
      e.printStackTrace();
    }
    System.out.println("charging power (watts): " + DeviceCache.powerWt);

    long apiCallMillis = currentTimeMillis() - now;
    long checkIntervalMillisReal = CHECK_INTERVAL_MILLIS + apiCallMillis;
    DeviceCache.chargedWt += DeviceCache.powerWt / (3600 * 1000F / checkIntervalMillisReal);
    System.out.println("DeviceCache.chargedWt: " + DeviceCache.chargedWt);

    chargingDurationSecs += checkIntervalMillisReal / 1000;
    System.out.println("chargingDurationSecs: " + chargingDurationSecs);

    DeviceCache.chargingWtAverageWtH = DeviceCache.chargedWt * 3600 / chargingDurationSecs;
    System.out.println("DeviceCache.chargingWtAverageWtH: " + DeviceCache.chargingWtAverageWtH);

    chargingDurationLeftSecs = (offTime - now) / 1000;
    System.out.println("chargingDurationLeftSecs: " + chargingDurationLeftSecs);

    System.out.println(
        "isPowerLimitOvelrloaded: " + powerLimitOverloadService.isPowerLimitOvelrloaded());
    System.out.println(
        "getPowerLimit: " + powerLimitOverloadService.getPowerLimit());
  }
}
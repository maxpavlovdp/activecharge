package com.km220.service.ewelink;

import static com.km220.PowerAggregationJob.chargedWt;
import static com.km220.PowerAggregationJob.onTime;
import static com.km220.service.PowerLimitOverloadService.OVERLOAD_LIMIT_TIMER_SECS;
import static java.lang.System.currentTimeMillis;

import com.km220.PowerAggregationJob;
import com.km220.ewelink.EwelinkClient;
import com.km220.ewelink.model.device.SwitchState;
import com.km220.ewelink.model.ws.WssResponse;
import com.km220.model.DeviceStatus;
import com.km220.service.DeviceException;
import com.km220.service.DeviceService;
import java.util.Locale;
import java.util.Objects;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class EwelinkDeviceService implements DeviceService {

  private final EwelinkClient ewelinkClient;

  public EwelinkDeviceService(final EwelinkClient ewelinkClient) {
    this.ewelinkClient = ewelinkClient;
  }

  @Override
  public long getChargingDurationLeftSecs() {
    return PowerAggregationJob.chargingDurationLeftSecs;
  }

  @Override
  public float getChargedWt() {
    return chargedWt;
  }

  @Override
  public DeviceStatus getStatus(String deviceId) {
    return ewelinkClient.wsDevices()
        .getStatus(Objects.requireNonNull(deviceId))
        .thenApply(DeviceUtils::convert)
        .join();
  }

  @Override
  public void toggleOn(String deviceId, int chargeTimeSec) {
    //TODO: refactor this
    PowerAggregationJob.chargingDurationSecs = 0;
    PowerAggregationJob.chargedWt = 0;
    PowerAggregationJob.onTime = currentTimeMillis();
    PowerAggregationJob.offTime = onTime + 1000L * chargeTimeSec;

    var wssResponse = ewelinkClient.wsDevices()
        .toggle(Objects.requireNonNull(deviceId), SwitchState.ON,
            OVERLOAD_LIMIT_TIMER_SECS + chargeTimeSec)
        .join();
    if (wssResponse.getError() > 0) {
      throw new DeviceException(String.format(Locale.ROOT, "Error on switching device. Device id = %s", deviceId));
    }

    //TODO: refactor this
    PowerAggregationJob.isOn = true;
  }

  @Override
  public void toggleOff(String deviceId, int chargeTimeSec) {
    var wssResponse = ewelinkClient.wsDevices()
        .toggle(Objects.requireNonNull(deviceId), SwitchState.OFF, chargeTimeSec)
        .join();
    if (wssResponse.getError() > 0) {
      throw new DeviceException(String.format(Locale.ROOT, "Error on switching device. Device id = %s", deviceId));
    }

    //TODO: refactor this
    PowerAggregationJob.isOn = false;
  }
}
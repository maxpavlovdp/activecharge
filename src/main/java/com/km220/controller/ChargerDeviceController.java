package com.km220.controller;

import com.km220.model.DeviceStatus;
import com.km220.service.DeviceCache;
import com.km220.service.DeviceService;
import com.km220.service.ewelink.PowerLimitOverloadService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/device")
@RequiredArgsConstructor
public class ChargerDeviceController {

  //TODO; refactor
  @Value("${device.chargeTimeSecs}")
  private int chargeTimeSecs;

  //TODO: refactor
  @Value("${deviceId}")
  private String deviceId;

  private final DeviceService deviceService;
  private final PowerLimitOverloadService powerLimitOverloadService;
  private final DeviceCache deviceCache;

  //TODO: GET HTTP method should not change resource state.
  // todo remove after payment implementation
  @GetMapping("/start")
  public ChargerResponse<Void> start() {
    deviceService.toggleOn(deviceId, chargeTimeSecs);
    return new ChargerResponse<>("started");
  }
// todo remove after payment implementation
  @GetMapping("/startSecs")
  public ChargerResponse<Void> startSecs(@RequestParam String secs) {
    deviceService.toggleOn(deviceId, Integer.parseInt(secs));
    return new ChargerResponse<>("startedSecs: " + secs);
  }

  @GetMapping("/getDeviceStatus")
  public DeviceStatus getDeviceStatus() {
    return deviceCache.getDeviceStatus();
  }


  @GetMapping("/getChargingStatus")
  public Float getChargingStatus() {
    return DeviceCache.chargedWt / 1000;
  }

  @GetMapping("/getChargingDurationLeftSecs")
  public Long getChargeTimeLeftSecs() {
    return deviceService.getChargingDurationLeftSecs();
  }

  @GetMapping("/isPowerLimitOvelrloaded")
  public ChargerResponse<Boolean> isPowerLimitOvelrloaded() {
    return new ChargerResponse<>("isPowerLimitOvelrloaded",
        powerLimitOverloadService.isPowerLimitOvelrloaded());
  }

  @GetMapping("/getPowerLimit")
  public ChargerResponse<Integer> getPowerLimit() {
    return new ChargerResponse<>("getPowerLimit", powerLimitOverloadService.getPowerLimit());
  }

  @GetMapping("/isOverloadCheckCompleted")
  public ChargerResponse<Boolean> isOverloadCheckCompleted() {
    return new ChargerResponse<>("isOverloadCheckCompleted",
        !DeviceCache.isOn);
  }
}

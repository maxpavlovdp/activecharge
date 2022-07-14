package com.km220.controller;

import com.km220.config.StationScanProperties;
import com.km220.model.ChargingJob;
import com.km220.service.ChargingService;
import com.km220.service.device.DeviceCache;
import com.km220.service.device.DeviceService;
import com.km220.service.device.DeviceState;
import java.util.Map;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
  private final DeviceCache deviceCache;

  private final StationScanProperties stationScanProperties;

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
  public ChargerResponse<DeviceState> getDeviceStatus() {
    return new ChargerResponse<>("getDeviceStatus", deviceCache.getDeviceStatus());
  }


  @GetMapping("/getChargingStatus")
  public Float getChargingStatus() {
    return DeviceCache.chargedWt / 1000;
  }

  @GetMapping("/getChargingDurationLeftSecs")
<<<<<<< HEAD
  public ChargerResponse<Long> getChargeTimeLeftSecs() {
    return new ChargerResponse<>("getChargeTimeLeftSecs", 0L);
=======
  public Long getChargeTimeLeftSecs() {
    return deviceService.getChargingDurationLeftSecs();
>>>>>>> origin/dima
  }

  @GetMapping("/isPowerLimitOvelrloaded")
  public ChargerResponse<Boolean> isPowerLimitOvelrloaded() {
    return new ChargerResponse<>("isPowerLimitOvelrloaded", false);
  }

  @GetMapping("/getPowerLimit")
  public ChargerResponse<Integer> getPowerLimit() {
    return new ChargerResponse<>("getPowerLimit", 0);
  }

  @GetMapping("/isOverloadCheckCompleted")
  public ChargerResponse<Boolean> isOverloadCheckCompleted() {
    return new ChargerResponse<>("isOverloadCheckCompleted",
        !DeviceCache.isOn);
  }

  private final ChargingService chargingService;

  @PostMapping("/v2/start")
  public ResponseEntity<Map<String, Object>> start(@RequestBody ChargeRequest chargeRequest) {
    UUID id = chargingService.start(chargeRequest.getStationNumber(),
        chargeRequest.getChargePeriodInSeconds());
    return ResponseEntity.status(HttpStatus.CREATED).body(Map.of(
        "id", id.toString(),
        "scan_interval_ms", stationScanProperties.getScanIntervalMs())
    );
  }

  @GetMapping("/v2/status")
  public ResponseEntity<ChargingJob> getStatus(@RequestParam String id) {
    ChargingJob job = chargingService.get(UUID.fromString(id));
    return ResponseEntity.status(HttpStatus.OK).body(job);
  }
}

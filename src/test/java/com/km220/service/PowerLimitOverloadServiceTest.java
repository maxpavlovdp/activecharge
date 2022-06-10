package com.km220.service;

import static com.km220.service.PowerLimitOverloadService.OVERLOAD_LIMIT_TIMER_SECS;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest
@ActiveProfiles("test")
class PowerLimitOverloadServiceTest {

  @Autowired
  DeviceService deviceService;

  @Autowired
  PowerLimitOverloadService powerLimitOverloadService;

  @AfterEach
  public void teardown() throws Exception {
    deviceService.off();
  }
}
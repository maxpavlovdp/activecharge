package com.km220;


import static org.assertj.core.api.Assertions.assertThat;

import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest
@ActiveProfiles("test")
class PowerAggregationJobTest {

//  public static final int AVG_POWER_DELTA = 50;
//  long intervalMultipliedMillis = 5 * CHECK_INTERVAL_MILLIS;
//  long chargeSeconds = (intervalMultipliedMillis / 1000);
//  long sleepInterval = chargeSeconds * 1000 + intervalMultipliedMillis;
//
//  @Autowired
//  EwelinkDeviceService deviceService;
//
//  @AfterEach
//  public void teardown() {
//    deviceService.off();
//  }
//
//  @Test
//  @Disabled
//  public void chargingWtAverageWtHTest() throws Exception {
//    // when
//    int testTimeSecs = 30;
//    deviceService.on(testTimeSecs);
//    Thread.sleep(testTimeSecs * 1000 + 3000);
//
//    // then
//    float delta = ((chargingWtAverageWtH - powerWt) / powerWt) * 100;
//    System.out.println("delta: " + delta);
//    assertThat(delta < AVG_POWER_DELTA).isTrue();
//  }
//
//  @Test
//  @Disabled
//  public void chargingWtAverageWtHNewApiTest() throws Exception {
//    // when
//    EwelinkDeviceService.newApiForGetPower = true;
//    int testTimeSecs = 30;
//    deviceService.on(testTimeSecs);
//    Thread.sleep(testTimeSecs * 1000 + 3000);
//
//    // then
//    float delta = ((chargingWtAverageWtH - powerWt) / powerWt) * 100;
//    System.out.println("delta: " + delta);
//    assertThat(delta < AVG_POWER_DELTA).isTrue();
//  }
//
//  @Test
//  @Disabled
//  void getChargedWtTest() throws Exception {
//    // given
//    deviceService.on(chargeSeconds);
//
//    // when
//    Thread.sleep(sleepInterval);
//
//    // then
//    assertThat(deviceService.getChargedWt() > 0).isTrue();
//  }
//
//  @Test
//  @Disabled
//  void getChargedWtTestNewApi() throws Exception {
//    // given
//    EwelinkDeviceService.newApiForGetPower = true;
//    deviceService.on(chargeSeconds);
//
//    // when
//    Thread.sleep(sleepInterval);
//
//    // then
//    assertThat(deviceService.getChargedWt() > 0).isTrue();
//  }
}
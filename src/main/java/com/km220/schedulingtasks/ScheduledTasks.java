package com.km220.schedulingtasks;

import com.km220.config.StationScanProperties;
import com.km220.service.ChargingService;
import java.text.SimpleDateFormat;
import java.util.Date;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class ScheduledTasks {

  private static final Logger logger = LoggerFactory.getLogger(ScheduledTasks.class);

  private final ChargingService chargingService;
  private final StationScanProperties stationScanProperties;

  private static final SimpleDateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");

  public ScheduledTasks(ChargingService chargingService,
      StationScanProperties stationScanProperties) {
    this.chargingService = chargingService;
    this.stationScanProperties = stationScanProperties;
  }

  @Scheduled(fixedDelayString = "${station.scan-delay-ms}", initialDelay = 1000)
  public void scanChargingJobs() {
//    logger.debug("Scan charging jobs {}", dateFormat.format(new Date()));

    chargingService.refresh(stationScanProperties.getScanBatchSize(),
        stationScanProperties.getScanDelayMs(), stationScanProperties.getScanIntervalMs());
  }
}

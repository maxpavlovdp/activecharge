# Project to transform you garage or any public spot to electric car charging station.
[![CI](https://github.com/maxpavlovdp/activecharge/actions/workflows/ci.yml/badge.svg)](https://github.com/maxpavlovdp/activecharge/actions/workflows/ci.yml)

## Setup dev env:

1. install java 17 from https://www.azul.com/downloads/?version=java-17-lts&package=jdk
2. set JAVA_HOME
3. install npm
4. install docker
5. run: sh run-220-local.sh

## FE react endpoint:
1. local: http://localhost:3000?station=2
2. dev: http://178.18.251.90?station=3
3. stage: http://168.119.177.145/
4. prod: http://220-km.com/2

## Swagger:
http://178.18.251.90:8080/swagger-ui/index.html

## BE spring boot endpoints:
### local:
1. http://localhost:8080/device/start
2. http://localhost:8080/device/startSecs?secs=7
3. http://localhost:8080/device/getDeviceStatus
4. http://localhost:8080/device/getChargingStatus
### stage:
1. http://168.119.177.145:8080/device/start
2. http://168.119.177.145:8080/device/startSecs?secs=7
3. http://168.119.177.145:8080/device/getPower
4. http://168.119.177.145:8080/device/getChargingStatus
### prod:
1. http://220-km.com:8080/device/start
2. http://220-km.com:8080/device/startSecs?secs=7
3. http://220-km.com:8080/device/getPower
4. http://220-km.com:8080/device/getChargingStatus

## SDLC:
1. We push to master
2. We deploy every push to master using git actions ssh + systemctl.
3. If deployment broken revert or use last tag https://github.com/maxpavlovdp/activecharge/releases/tag/v1.1
4. Kanban board: https://esound.youtrack.cloud/youtrack/agiles/87-6/current

## Design:
https://app.diagrams.net/#G1xBm3YxmDuKMkPA-N649yD8FCtsIpkAai
<img width="963" alt="image" src="https://user-images.githubusercontent.com/5563023/171100461-22780c99-c5f7-4d60-9adb-db8363a91b57.png">
<img width="823" alt="image" src="https://user-images.githubusercontent.com/5563023/171879571-2491e33c-9e92-4ac8-93cc-ebbf428136e7.png">

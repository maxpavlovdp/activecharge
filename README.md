# Project to transform you garage or any public spot to electric car charging station with minimal investment.

1. Buy 10 kWt Relay for Smart Home 63A https://www.aliexpress.com/item/1005002497097746.html
2. Create account from mobile app eWeLink.
3. put email, password and region to src/main/resources/application-test.properties
4. install java 11
5. run: ./gradlew clean build
6. use github pages to deploy like: https://maxpavlovdp.github.io/activecharge/
7. for mvc dployment use hetzner or other hosting: http://49.12.117.164:3000/
8. our chat: https://discord.gg/hRwCF5jYvj
9. Kanban board: https://esound.youtrack.cloud/youtrack/agiles/87-4/current

#SDLC:
1. We push to master -> deployment happens every midnight to http://220-km.com/
2. If deployment broken use last tag https://github.com/maxpavlovdp/activecharge/releases/tag/v1.1

#Design:
![img.png](img.png)


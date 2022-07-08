cd "$(dirname "$0")" || exit

pkill -f java
pkill -f react
pkill -f nest

lsof -ti tcp:8080 | xargs kill -kill
lsof -ti tcp:5000 | xargs kill -kill
lsof -ti tcp:3000 | xargs kill -kill

nohup ./src-js/nest/run-nest-dev.sh &
nohup ./src-js/react/run-react-dev.sh &

./gradlew clean build -x test
#java -jar build/libs/220-km.com-0.0.1-SNAPSHOT.jar
java -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005 -Dspring.profiles.active=dev -jar build/libs/220-km.com-0.0.1-SNAPSHOT.jar

#tail -f nohup.out
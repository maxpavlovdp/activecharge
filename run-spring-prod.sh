cd "$(dirname "$0")" || exit

export JAVA_HOME="/opt/jdk-17"
export PATH=$JAVA_HOME/bin:$PATH

./gradlew clean build -x test
java -Dspring.profiles.active=prod -jar build/libs/220-km.com-0.0.1-SNAPSHOT.jar

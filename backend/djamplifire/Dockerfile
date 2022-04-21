FROM --platform=linux/arm64/v8 java:8

EXPOSE 8082


ADD target/djamplifire-0.0.1-SNAPSHOT.jar djamplifire-0.0.1-SNAPSHOT.jar

ENTRYPOINT ["java", "-jar", "user-service.jar"]
FROM public.ecr.aws/amazonlinux/amazonlinux:2

EXPOSE 8082


ADD target/djamplifire-0.0.1-SNAPSHOT.jar djamplifire-0.0.1-SNAPSHOT.jar

ENTRYPOINT ["java", "-jar", "user-service.jar"]
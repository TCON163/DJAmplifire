# Springboot

You will need a resources folder in the main directory that contains a file called `apllication.properties`

application.properties will contain
```
spring.datasource.url=jdbc:mariadb://{URL}/{databaseName}
spring.datasource.username=username
spring.datasource.password=password
spring.datasource.driver-class-name=org.mariadb.jdbc.Driver
spring.jpa.hibernate.ddl-auto=create
``` 

* the resources folder will also have a static and templates directory but they are empty to me right now. 
-- TC 10/30/21
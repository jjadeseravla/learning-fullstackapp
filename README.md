# Learning SpringBoot and Testing

Simple Restful app with tests

client (react) (or test using Postman) --> Controller(restful API: GET,POST etc) --> Service(business logic) --> DAO(DB interactions) --> DB

## To Run:
Package up app compile and generate .classes file and the Jar file you can deploy on any server and generates thw ```target``` folder:
```mvn install```</br>
(Make sure Java is in your path, then) To run jar:
```cd target```</br>
Run jar on the command line:
```java -jar learning-spring-boot-0.0.1-SNAPSHOT.jar```</br>
If you want to override the specified port.  You can type this again with another port and have two instances of the app are running at the same time on different ports:
```java -jar learning-spring-boor-0.0.1-SNAPSHOT.jar --server.port=5050```</br>

## To Do:
- Front end!
- Deploying to the cloud like AWS etc (or use Spring own version: Cloud Foundry)
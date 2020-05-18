# Learning SpringBoot, Testing and React

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
```java -jar learning-spring-boot-0.0.1-SNAPSHOT.jar --server.port=5050```</br>

Navigate to ```src/js``` and start the front end:
```yarn start```</br>

## Docker:
Once you have postgres installed, start an instance.  Name container and environment variable to set the password, then the image and expose the port running inside the docker container to the outside world:
```docker run --name postgres-spring -e POSTGRES_PASSWORD=password -d -p 5432:5432 postgres:alpine``` creates postgres-spring container exposing a port on 5432</br>
Exposing the container port to outside world:
```docker port postgres-spring```</br>
Bash into the container and create a db:
```docker exec -it {containerId] bin/bash```</br>
```psql -U {name eg postgres}```</br>
create db:
```CREATE DATABASE userdb;```</br>
connect to this db:
```\c userdb```</br>


## To Do:
- Front end bug and tests
- Deploying to the cloud like AWS etc (or use Spring own version: Cloud Foundry)
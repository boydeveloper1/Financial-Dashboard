# Step 1: Use Maven to build the project
FROM maven:3.9.4-eclipse-temurin-21 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the pom.xml and source code into the container
COPY springboot-backend/pom.xml .
COPY springboot-backend/src ./src

# Package the application using Maven
RUN mvn clean package

# Step 2: Use a smaller Java runtime to run the app
FROM eclipse-temurin:21-jre

# Set the working directory inside the container
WORKDIR /app

# Copy the built JAR file from the previous build stage
COPY --from=build /app/target/springboot-backend-0.0.1-SNAPSHOT.jar ./app.jar

# Expose the port the app runs on
EXPOSE 8080

# Command to run the app
ENTRYPOINT ["java", "-jar", "app.jar"]

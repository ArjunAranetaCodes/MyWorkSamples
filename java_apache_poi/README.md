# Excel-to-Database Application

This is a simple Java application that reads data from an Excel file and stores it in a MySQL database using Apache POI and JDBC.

## Features

- Reads data from an Excel file.
- Stores data in a MySQL database.
- Easy to use and customize.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Java Development Kit (JDK) installed.
- Apache POI library.
- MySQL database set up.

## Setup

1. Download the repository.
2. Import the project into your IDE.
3. Add Apache POI library to the project's build path.
4. Create a MySQL database named `excel_data`.
5. Create a table named `employee` with columns `(id, name, age, salary)`.
6. Create an Excel file named `employees.xlsx` with columns `(name, age, salary)`.
7. Update the database connection details in `ExcelToDatabase.java` with your MySQL username and password:

```java
String jdbcURL = "jdbc:mysql://localhost:3306/excel_data";
String username = "your_username";
String password = "your_password";```

Compile and run the ExcelToDatabase.java file.

Usage
Follow these steps to use the application:

Ensure the Excel file employees.xlsx contains the data you want to import.

Run the ExcelToDatabase class.

Check your MySQL database to verify that the data has been imported successfully.

Sample Contents of Excel:
| John Doe  | 30  | 50000  |
| Alice Lee | 25  | 45000  |
| Bob Smith | 35  | 60000  |
| Emily Wang| 28  | 52000  |
| Michael Tan| 32 | 55000  |

Sample Results

![poi_snap1.PNG](https://github.com/ArjunAranetaCodes/MyWorkSamples/blob/main/java_apache_poi/poi_snap1.PNG)

![poi_snap2.PNG](https://github.com/ArjunAranetaCodes/MyWorkSamples/blob/main/java_apache_poi/poi_snap2.PNG)


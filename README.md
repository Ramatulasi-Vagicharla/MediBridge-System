# Medibridge System

## Overview
The Medibridge System is a comprehensive healthcare management platform that enables efficient handling of patient information, doctor management, appointment scheduling, and other healthcare-related operations. Built using a Java full-stack approach, this project aims to streamline healthcare workflows and provide an intuitive interface for both patients and doctors.

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

The Medibridge System includes a variety of features designed to facilitate healthcare management for doctors and administrators:

- **User Management**:
  - Secure login system with JWT-based authentication.
  - Role-based access control, granting specific permissions to doctors and administrators.

- **Appointment Scheduling**:
  - Doctors can view, schedule, update, and cancel patient appointments.
  - Real-time updates to appointment status, ensuring efficient management and minimal conflicts.

- **Doctor-Patient Interaction**:
  - Doctors have access to a list of all their upcoming appointments and patient details.
  - Ability to add new patients, update existing patient profiles, and manage patient medical histories.
  - Doctors can prescribe treatments and maintain records of patient visits and prescriptions.

- **Email Notifications**:
  - Automated appointment reminders sent via email to patients.
  - Doctors can send custom email reports directly to patients with treatment summaries and follow-up details.

- **Reports**:
  - Detailed, on-demand reports on patient data, appointment history, and system usage metrics.
  - Reports can be filtered by date, doctor, or specific patient, enabling data-driven decision-making for healthcare providers.

Each of these features is designed to optimize the healthcare workflow, enhance patient-doctor communication, and ensure that healthcare providers have quick, secure access to essential information.


## Tech Stack
- **Frontend**: HTML, CSS, JavaScript, Angular
- **Backend**: Java (Spring Boot)
- **Database**: MySQL
- **Version Control**: Git and GitHub
- **Build Tool**: Maven

## Getting Started

### Prerequisites
Ensure you have the following installed on your machine:
- **Java 17+**
- **Angular**
- **Node.js**
- **MySQL**
- **Maven**

### Installation
Follow these steps to set up the Medibridge System on your local machine:

1. **Clone the Repository**:
   - Open your terminal, navigate to the directory where you want to store the project, and run:
     ```bash
     git clone <repository-url>
     cd Medibridge-System
     ```

2. **Backend Setup**:
   - Navigate to the backend folder (if applicable).
   - Install backend dependencies by running:
     ```bash
     mvn install
     ```
   - Configure the database:
     - Open `src/main/resources/application.properties`.
     - Set your MySQL database connection details:
       ```properties
       spring.datasource.url=jdbc:mysql://localhost:3306/your_database_name
       spring.datasource.username=your_db_username
       spring.datasource.password=your_db_password
       ```
   - Set up email notifications:
     - In `application.properties`, add SMTP server details for sending email notifications.

3. **Frontend Setup**:
   - Navigate to the frontend directory:
     ```bash
     cd frontend
     ```
   - Install frontend dependencies:
     ```bash
     npm install
     ```

### Running the Application
1. **Start the Backend Server**:
   - Run the Spring Boot application:
     ```bash
     mvn spring-boot:run
     ```

2. **Start the Frontend Server**:
   - Run the Angular application:
     ```bash
     npm start
     ```

Once both servers are running, you can access the application in your web browser at `http://localhost:8080` (or the port configured for the frontend).

## Usage

Once you have the application running, you can access it by navigating to `http://localhost:8080` in your browser (or the configured frontend port).

### User Roles and Access
- **Doctors**: Log in to manage their appointments, view patient information, add or update patient details, prescribe treatments, and send email reports to patients.
- **Administrators**: Manage users, monitor system activity, and maintain overall system configurations.

### Key Actions
1. **Login**: Secure login for doctors and administrators, with role-based access control.
2. **Appointment Management**: Doctors can view, schedule, update, and cancel appointments.
3. **Patient Management**: Doctors can manage patient profiles, medical histories, and prescriptions.
4. **Email Reports**: Doctors can send appointment summaries and treatment reports directly to patients via email.

## Contact

For questions, suggestions, or collaboration requests, please feel free to reach out:

- **Project Maintainer**: [Vinutna_Polisetty]
- **Email**: [vinutnapolisetty@gmail.com](mailto:vinutnapolisetty@gmail.com)
- **LinkedIn**:https://www.linkedin.com/in/vinutna-polisetti-410a47215/
  
For updates and more information, follow this repository and stay connected.


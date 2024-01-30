<img src="./Readme/title1.svg"/>

<br><br>

<!-- project philosophy -->
<img src="./Readme/title2.svg"/>
UnrealFit is a web-based wardrobe assistance platform that utilizes augmented reality (AR) technology to redefine how users choose their outfits. The website offers a seamless and immersive experience for users to explore, try on, and select their clothing items and help them find the places to get them.

### User Stories

User:

- As a user, I want to easily register for an account, providing necessary details such as username, email, password, age, country and gender.

- As a user, I want to create new occasions, providing details such as the type of occasion, style, season and budget ramge.

- As a user, I want to select one of the suggested clothes and virtually try-on the cloth using Augmented Reality(AR), I can buy one of the clothes.

Admin:

- As an admin, I want a comprehensive dashboard overview displaying key metrics, user statistics, and recent activities.

- As an admin, I want to view a list of all users, including their registration details and activity history.

- As an admin, I want to see a list of all occasions created by users, including details like occasion type, date, and associated costumes.

<br><br>

<!-- Prototyping -->
<img src="./Readme/title3.svg"/>

### Unrealfit is built using the following technologies:

- This project uses the [React web development library](https://react.dev/) for frontend. React is a JavaScript library for building user interfaces, known for its component-based architecture and efficient rendering using a virtual DOM.
- This Project uses [Laravel framework](https://laravel.com/) for backend,Laravel serves as a backend framework for PHP web development, offering features and tools that streamline backend processes, such as routing, database management, authentication, and API development, empowering developers to build robust and scalable server-side applications efficiently.
- For persistent storage (database), the app uses the [MySQL](https://www.mysql.com/) MySQL is an open-source relational database management system (RDBMS) that uses SQL for querying, managing, and storing structured data efficiently.
- For Augmented Reality(AR), the app uses [Pyhton](https://www.python.org/). Python have many libraries to use and one of them is Computer vision which is part of Augmented reality. Python is indeed used for Augmented Reality (AR) applications, and it offers a variety of libraries that support AR development. One prominent example is computer vision, which plays a crucial role in many AR applications. Libraries like OpenCV.

<img src="./Readme/title4.svg"/>

### I designed UNREALFIT using wireframes and mockups, iterating on the design until we reached the ideal layout for easy navigation and a seamless user experience.

### Mockups Examples

| Home screen                          | Login Screen                        | Clothes screen                    | Occasion Screen                        |
| ------------------------------------ | ----------------------------------- | --------------------------------- | -------------------------------------- |
| ![Landing](./Readme/LandingMock.png) | ![Occasion](./Readme/LoginMock.png) | ![Landing](./Readme/ItemMock.png) | ![Occasion](./Readme/OccasionMock.png) |

Check more Mockups on [Figma](https://www.figma.com/file/3pi5bFAbK9wTc0FP3Aibwd/UNREALFIT?type=design&node-id=394%3A41&mode=design&t=5YXJMx6uLUv3qrA1-1)
<br><br>

<!-- Implementation -->

<br><br>

<!-- Tech stack -->
<img src="./Readme/title5.svg"/>

### Database Schema

<img src="./Readme/DatabaseSchema.png">
<br><br>
<br><br>
<img src="./Readme/title6.svg"/>

> Using the wireframes and mockups as a guide, we implemented the UNREALFIT website with the following features:

### User Screens (web)

| Home screen                           | Occasion Screen                        |
| ------------------------------------- | -------------------------------------- |
| ![Landing](./Readme/Landing.page.gif) | ![Occasion](./Readme/OccasionPage.gif) |

| Augmented Reality Clothes-TryOn Screen | Edit Profile Screen                       |
| -------------------------------------- | ----------------------------------------- |
| ![AR](./Readme/AR_.gif)                | ![Edit Profile](./Readme/EditProfile.png) |

| Brand screen                  | Clothes Screen                 |
| ----------------------------- | ------------------------------ |
| ![Brand](./Readme/Brands.png) | ![Clothes](./Readme/items.png) |

| Sign In Screen                 | SignUp (Google) Screen                     |
| ------------------------------ | ------------------------------------------ |
| ![Sign In](./Readme/Login.png) | ![Occasion](./Readme/SignUpWithGoogle.png) |

| Sign In Error Screen                   | Create Occasion Error Screen                 |
| -------------------------------------- | -------------------------------------------- |
| ![LoginError](./Readme/LoginError.png) | ![Clothes](./Readme/CreateOccasionError.png) |

### Admin Screens (Web)

| DashboardHome screen                     | DashboardOccasion Screen                             |
| ---------------------------------------- | ---------------------------------------------------- |
| ![DashboardHome](./Readme/Dashboard.png) | ![DashboardOccasion](./Readme/DashboardOccasion.png) |

| DashboardUsers screen                          | DashboardError Screen                          |
| ---------------------------------------------- | ---------------------------------------------- |
| ![DashbaordUsers](./Readme/DashboardUsers.png) | ![DashboardError](./Readme/DashboardError.png) |

<table>
  <tr>
    <td align="center">
https://github.com/AhmadShamouka/unreal/blob/main/Flow.mp4

</td>
</tr>
</table>

<br><br>

<!-- How to run -->
<img src="./Readme/title7.svg"/>

This code segment orchestrates the generation of clothing suggestions based on user input and maps them to corresponding Flickr albums for visual reference.

Leveraging OpenAI's GPT-3.5 Turbo model, it constructs a prompt based on user preferences and budget, generating concise responses for clothing suggestions within a defined token limit.

| OpenAI                         |
| ------------------------------ |
| ![OpenAI](./Readme/OpenAI.png) |

<br><br>
<img src="./Readme/title8.svg"/>

This project leverages AWS deployment strategies to seamlessly integrate and deploy
natural language processing models. With a focus on scalability, reliability, and
performance, we ensure that AI applications powered by these models deliver robust and
responsive solutions for diverse use cases.

By following these steps, we deployed the backend to Amazon Linux 2023.

1. Update Amazon Linux 2023 Packages
2. Install LAMP Stack
3. Start and enable the Apache and MariaDB services
4. Create Database
5. Install PHP Composer for Laravel on on.Linux 2023
6. Download the Laravel framework project
7. Install Laravel on Amazon Linux 2023
8. Create the Laravel environment configuration file
9. Apache Configuration for PHP Laravel App
10. Get the Laravel demo page

<br><br>

<img src="./Readme/title9.svg"/>

This project embraces meticulous unit testing strategies to uphold the dependability and precision of code modules. Through methodical examination of discrete units within the software, we establish a resilient framework, detecting and rectifying potential issues at an early stage of development.

| Create Occasion Feature Testing                              | Get Occasions Feature Testing                     |
| ------------------------------------------------------------ | ------------------------------------------------- |
| ![Create Occasion](./Readme/CreateOccasionFetureTesting.png) | ![Get Occasion](./Readme/LoginFeatureTesting.png) |

| 8 More Feature Testing                    |
| ----------------------------------------- |
| ![Get Users](./Readme/FeatureTesting.png) |

<br><br>
<img src="./Readme/title10.svg"/>

> To set up UNREALFIT locally, follow these steps:

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/AhmadShamouka/unreal.git
   ```

2. Frontend: Install NPM packages

   ```sh
   npm install
   ```

3. run your React library

   ```sh
   npm start
   ```

4. Install XAMP

   [https://www.apachefriends.org/download.html](https://www.apachefriends.org/download.html)

5. run Apache and MySQL

6. Backend: Install composer for Laravel

   ```js
   composer install
   ```

7. Copy .env.example file and rename it .env you can run

   ```js
   cp.env.example.env;
   ```

8. Open your .env file and change the database name (DB_DATABASE) to whatever you need or to idonate_db, username (DB_USERNAME) and password (DB_PASSWORD) field correspond to your configuration if you configured them.

   ```js
   php artisan key:generate;
   ```

   ```js
   php artisan jwt:secret
   ```

   ```js
   php artisan migrate
   ```

   ```js
   php artisan storage:link
   ```

   ```js
   php artisan serve --host <YOUR_LOCAL_IPv4@> --port 8000
   ```

9. Augmented Reality: Install Python version 3.8.10

   [https://www.python.org/downloads/release/python-3810](https://www.python.org/downloads/release/python-3810/)

10. Install cvzone

    ```sh
    pip install opencv-python
    ```

11. Install flask server

    ```sh
    pip install Flask
    ```

12. run your python file

    ```sh
    python main.py
    ```

Now, you should be able to run Coffee Express locally and explore its features.

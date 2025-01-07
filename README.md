Movie Database App
Description
This is a movie database web application built with React that allows users to search for movies and view details about them, including the cast, genre, and ratings. It fetches data from the OMDB API, which provides detailed information about movies, TV shows, and series.

Features
Search for movies by title
Filter results based on movie type (e.g., Movie, Series)
View detailed information about each movie, including:
Movie poster
Title
Release date
Cast
Genre
Ratings
Responsive design for various screen sizes
Tech Stack
Frontend: React.js
API: OMDB API
CSS Framework: Tailwind CSS (for styling)
Hosting: Vercel (for deployment)
Setup
Prerequisites
Before you begin, make sure you have the following installed on your local machine:

Node.js
npm or yarn
Steps to Run Locally
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/movie-database.git
Navigate into the project directory:

bash
Copy code
cd movie-database
Install the necessary dependencies:

bash
Copy code
npm install
Create a .env file in the root directory of your project and add your OMDB API key like so:

plaintext
Copy code
REACT_APP_OMDB_API_KEY=your-omdb-api-key-here
Run the development server:

bash
Copy code
npm start
The app will run at http://localhost:3000.

Deployment
The project is deployed on Vercel. Once deployed, you can access the live app at the URL provided by Vercel.

Environment Variables
The following environment variable is required to run the app:

REACT_APP_OMDB_API_KEY: Your OMDB API key.
To set up the environment variable:

Go to Vercel Dashboard.
In your project settings, navigate to Environment Variables.
Add the key REACT_APP_OMDB_API_KEY with your OMDB API key as the value.
Contributing
If you would like to contribute to this project:

Fork the repository.
Create a new branch (git checkout -b feature-name).
Make your changes.
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-name).
Open a pull request.
License
This project is licensed under the MIT License.

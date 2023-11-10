# WAD2Project
## Changes to this README.md
(11 Nov 1:30AM) The latest submitted zip file has the ChatGPT API key inside. It will work if ChatGPT does not recognise the key as shared and the key is not disabled. However, if there are errors, it means the key has been disabled and you have to make your own one as per the instructions and usage below.

## Introduction

EcoWanderers is a web application designed to promote sustainable travel and interact with travellers.


## Features

- Explore Sustainable Destinations: Discover environmentally conscious travel options around the globe by using generate itinerary.
- Carbon Footprint Calculator: Help users plan their eco-friendly travel routes.
- Chatbot: Get tips and guidelines for practicing responsible tourism during your travels.
- User Accounts: Create an account to see your favorite destinations, write reviews, and contribute to the community.


## Installation

1. Clone the repository: git clone https://github.com/Victoria-Quek/WAD2Project/
2. Navigate to the project directory: cd wad2_index.html


## Usage

1. Retrieve your api key from open ai
Note: Please get your own ChatGPT API key by logging in and making one using this link (https://platform.openai.com/api-keys) as ChatGPT does not allow users to share their API keys and will disable them.

2. Retrieve your api key from google maps api

## Technologies Used

- HTML5, CSS3, JavaScript, VueJS
- Firebase for the database
- Bootstrap for responsive and clean styling
- Google Maps, Directions, Distance and Geocoding API for map and distance integration.
- ChatGPT API for interactive user support

## Instructions
Go to signInSignUp.html, create an account and log in
OR
You can use this dummy account:
Username: ProfMokie
Password: 123

Set up: Enter your ChatGPT API key into the pages script.js (line 2) and Chatbot.html (line 156).
You can search within the file GPT and the place where you should put the key will pop up.

Open any of the pages on your chrome with MAMP or WAMP running as local host.

1. You are now at wad2_index. Set up your profile by clicking on 'Profile' on the nav bar and clicking the edit button.
2. Go back to landing page by clicking 'Home' on the nav bar. Generate itinerary by inputting your budget, destination & duration.
3. Go to 'calculator' on the nav bar. Input destination, origin and travel modes to get the distance between the locations, time taken to travel between them and the carbon dioxide emitted.
4. Go to 'chatbot' on the nav bar if you have any queries on sustainable travelling.
5. Go to 'posts' on the nav bar to view all posts. Search posts by using the given fields. To view the user's profile, click on the 
   username. You can view all the user's posts under the profile page.
   Click on title to view post details. Feel free to leave a like and comment on the post.
6. Click on the create button to start creating your own post. Fill in title,description,tags(optional). 
   Click on 'next' button and fill up the attraction name, click on 'check' button, choose image(s) to upload. Click on 'preview' button to 
   preview post and click on 'post' button to post. You can view your own posts under 'profile'.
7. Click on 'logout' on the navbar and log out after you are done using the website.

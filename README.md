# YourFitnessPal

## Description
This web app is an all in one nutrition and fitness tracker designed around ease of use for the consumer. This repository contains our frontend code - a single page React app with components rendered off different URLs with React-Router.

A dashboard contains the essentials of fitness and nutrition information, condensing weekly exercise information (bar chart), weekly nutrition statistics (pie chart), short list of events and feed.  The social component of our application includes a longer feed of recent events, blogs, and articles - these are all user generated content.

Users can also access the events in map form, where the event locations are rendered as pins on a map. Based off the location provided during registration, a map is also generated with nearby gym and fitness locations.

Nutrition input can be done through 3 methods. First, a typical form is available for use. However, users can upload an image of the food they consumed, and the picture will be processed by an image recognition API before nutrition information is retrieved from a nutrition API. The last method of nutritional input is done through natural language processing, where the user can type in a string of text about his meal and the food components will be analyzed by the nutrition API (e.g. I ate a serving of kale salad).

## Setup
1. Fork and clone
2. Run 'npm install' to install dependencies
3. Start server using 'npm start'
4. Access the page using localhost with the assigned port value

## Technologies Used:
| React | React Router | Ruby on Rails | PostgreSQL |  Geocoder, Google Places, Nutrionix, and Google Charts API | CSS-Grid | JWT |

## Server
Rails API backend can be found at the following URL:
https://github.com/dru1208/fitness-app-server
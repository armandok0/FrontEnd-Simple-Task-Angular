## Overview
This project is a front-end application developed using Angular framework, leveraging TypeScript. It consists of three main components: Users, Products, and Customers, each serving specific functionalities as outlined in the provided specifications.

## Features Implemented

### App's Menus
- Highlighted the selected option dynamically.
- Utilized Angular's built-in features for routing and navigation.

### Customers Page
- Utilized Angular's HttpClient module to fetch the list of customers via HTTP GET request.
- Rendered the customers list using Angular templates.

### Products Page
- Retrieved the list of products through HTTP GET request using Angular's HttpClient module.
- Created a custom checkbox component for each product using Angular's component architecture.
- Implemented error handling for invalid deletion attempts.
- Enabled deletion of individual products from the list.

### Users Page
- Fetched the list of users via HTTP GET request using Angular's HttpClient module.
- Designed a reactive form for adding new users with validation using Angular Forms module.
- Implemented functionality to add new users to the list and display them dynamically.

### Extra Features
- Implemented a loading spinner.
- Utilized Angular's local storage service to persist changes made to the lists.
- Implemented back button functionality using Angular Router.

## How to Use
1. Clone or download the repository to your local machine.
2. Install dependencies: `npm install`
3. Serve the application: `ng serve`
4. Navigate to `http://localhost:4200` in your web browser.
5. You can now navigate through the application using the provided menus.

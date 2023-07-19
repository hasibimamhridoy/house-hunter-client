# house-hunter-client
## Live Link
Hosted in Netlify -> [Ass Sunnah School](https://house-hunter-h.netlify.app/)


<div align="center">
<img src="https://deendarpartner.com/psilrimt/2023/07/Hasib-imam-hridoy.jpg" align="center" style="width: 100%" />
</div>

## House Hunter

## Some Special Features of my Website

- Custom Authentication: My website utilizes custom authentication using JWT (JSON Web Tokens) and MongoDB databases. This ensures secure user registration and login processes without relying on external authentication service providers like Firebase.

- User Registration: Users can register on this website by providing their full name, role (House Owner or House Renter), phone number, email, and password. The registration form validates and stores all the registered user information in the database, ensuring there are no duplicate users.

- House Owner Dashboard: Upon successful registration as a House Owner, users are redirected to their dashboard. The dashboard provides House Owners with a comprehensive interface to manage their listed houses and bookings.


- House Listing Management: House Owners can view a list of houses they own within their dashboard. They can also add new houses by clicking the "Add New House" button, which opens a form/modal. The form collects all the necessary information about the house, such as name, address, city, bedrooms, bathrooms, room size, picture, availability date, rent per month, phone number, and description. Mandatory fields are enforced, and only Bangladeshi phone numbers are accepted. The added houses are stored in the database.

- House Listing Display and Interaction: The House Owner's dashboard displays the list of owned houses in a table format. Each house entry in the table includes options to delete or edit the house information. Deleting a house removes it instantly from the table, while editing fills the form fields automatically for easy modification and updates the information in real-time.

- House Renter Dashboard: Upon successful registration as a House Renter, users are redirected to their unique dashboard. The House Renter dashboard allows users to manage their bookings and view their current bookings.

- House Booking: House Renters can book houses from the website's homepage by providing their name, email, and phone number. The form pre-fills the name and email fields automatically, and users cannot modify these fields. The booking details are stored in the database and associated with the House Renter.

- Booking Management: The House Renter dashboard displays the booked houses, allowing House Renters to view their current bookings. House Renters can remove or delete booked houses from their dashboard, freeing up space for new bookings. There is a maximum limit of two house bookings per House Renter.

- Home Page and House Search: The website's home page showcases all the listed houses. Visitors, both House Owners and House Renters, can search for houses using various filters such as city, bedrooms, bathrooms, room size, availability, and rent per month. While anyone can search for houses, only House Renters can book houses by logging in. Implementing filters from the backend is optional but can enhance the search functionality.

- Server-side Pagination: To optimize data loading, my website implements server-side pagination or infinite scrolling. The houses are fetched in batches, with each batch containing 10 data entries. This approach ensures that no more than 10 houses are displayed at once, providing a seamless user experience.

- Visual Design: The website's color combination is designed to be visually pleasing, ensuring an appealing and cohesive user interface.

## Extra Functinality what I do

- When the user want to book any house then he faced payment automation system. In payment automotion i used Stripe payment gate way.When The user succesfully payment the house booking complete and redirecct my-booking page

- I ensure that logout user cant access private route.

- In some route i protected the api in the help of express middleware.

- create a meaningfull banner section as if the website looks like more beautyfull

- create a footer hero section for user who cant register in our website.

- 


## Used packages and technology

## Used packages

- Material UI
- Stripe (Payment Gateway)
- Axios (For crud and Fetching)
- React Icons
- Sweetalert2
- Swiper Js
- Tanstack Query

## Used Technology 

## Front-end 
- HTML
- Tailwind Css
- Java Script
- React Js

## Back-end 

- Express Js
- Mongo DB

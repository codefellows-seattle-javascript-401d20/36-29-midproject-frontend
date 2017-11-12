401 JS --  Lab 36 Full Stack Crud
===

## About
This is a social media app that one can use to create a profile and search for charities to find favorites.

## Components  
###### App Component
The App component should setup the single page application routes

###### Landing Component
* should be displayed on the `/` route
* should use react-redux's `connect` to map state and dispatchable methods to props
* should display a `AuthForm` for logging in and signing up

###### Auth-Form Component
* allows user login and signup
* should expect an `onComplete` prop to be a function
  * that function should be invoked with the AuthForm State when the form is submitted

###### Auth-Form Component
* directs the user to the `Dashboard` or the `Landing` page depending on whether their login or signup is successful or not

###### Header Component
* should display a navbar with links displayed depending on whether the user is logged in or not

###### Dashboard Component
* should use react-redux's `connect` to map state and dispatchable methods to props
* should display a `SmartForm`

###### ProfileForm Component
* Should expect an `onComplete` prop to be a function
  * That function should be invoked with the `ProfileForm` state when the form is submitted
* Should support and optional `profile` prop that will initialize the state of the form

###### Profile Component
* Should display a `ProfileForm` that will enable the user to update the profile in the app state

###### PhotoForm Component
* Should expect an `onComplete` prop to be a function
  * That function should be invoked with the `PhotoForm` state when the form is submitted
* Should support and optional `photo` prop that will initialize the state of the form

###### Search Component
* should display charities for user to search using `Charity`

###### Charity Component
* should display details of each charity

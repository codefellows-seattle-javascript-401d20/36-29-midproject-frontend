401 JS --  Lab 36 Full Stack Crud
===

## Submission Instructions
  * Work in a fork of this repository
  * Work in a branch on your fork
  * Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * Submit a pull request to this repository
  * Submit a link to your pull request on canvas
  * Submit a question, observation, and how long you spent on canvas  

## Requirements  
#### Configuration  
##### backend/
* copy your lab-14 or comprable api into into a backend directory
##### frontend/
* **README.md** -- with a documention about your lab
* **.babelrc** -- with all dependencies and dev-dependencies 
* **.eslintrc** -- with the class .eslintrc file
* **.gitignore** -- with a robust gitignore
* **.eslintignore** -- with the class .eslintignore
* **yarn.lock** -- with the yarn lockfile
* **package.json** -- with all dependencies and dev-dependencies 
* **webpack.config.js** -- with webpack config
* **src/** -- containing the front end code
* **src/main.js** -- renders the app
* **src/style** -- containing your sass
* **src/style/main.scss** -- for importing and including reset and base
* **src/style/_vars.scss** -- sass variables
* **src/style/_reset.scss** -- sass reset 
* **src/style/_base.scss** -- base styles 
* **src/style/_layout.scss** -- layout styles 
 
#### Feature Tasks 
* Create a frontend for your midproject backend
* Use react/redux best practices
* Add reporter and thunk middleware to your redux store
* make async action creators for making ajax request to your backend
* make sync action creators from updating your app store

### Components
```
Provider
  App
    AuthRedirect
    Landing
      // handle login and signup
    Dashboard
      // display main app
```

* Implament a Landing route that allows a user to signup and login to the applicaition.
* Manage the frontend routes based on the clients authorization
  * If the user is not logged in they should be forced to remain on the landing route(s)
  * If the user is logged in they should not permitted to remain on the landing route(s)

####  Documentation  
Write a description of the project in your README.md

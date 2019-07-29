class User {
  static all = [];

  constructor(username) {
    this.username = username;
    User.all.push(this);
  }

  static findByUsername(username) {
    let user = User.all.find(user => user.username == username);
    return user;
  }
}

function countDownHeader1() {
  let header = getHeader()
  header.innerHTML = "3"
  setTimeout(countDownHeader2, 1000)
  // change header to start from 3
  // set timed out event to call countDownHeader2 after 1 second (note timeout uses milliseconds)
}

function countDownHeader2() {
  let header = getHeader()
  header.innerHTML = "2"
  setTimeout(countDownHeader3, 1000)
  // change header to 2
  // set timed out event to call countDownHeader3 after 1 second (note timeout uses milliseconds)
}

function countDownHeader3() {
  let header = getHeader()
  header.innerHTML = "1"
  setTimeout(countDownHeader4, 1000)
  // change header to 1
  // set timed out event to call countDownHeader4 after 1 second (note timeout uses milliseconds)
}

function countDownHeader4() {
  let header = getHeader()
  header.innerHTML = "Welcome To Dom Manipulation"
  // change header to Welcome To Dom Manipulation
}

function clickToChangeImage(e) {
  // grab the animal image as well as the link
  // if the image src is the cat.jpg
    // change the src to the puppy.jpeg
    // the alt to A puppy picture
    // change the link text to Click here to a cat picture instead
  // otherwise
    // change the src to cat.jpg
    // the alt to A cat picture
    // change the link text to Click here to a puppy picture instead

  // Helpful Hint: Think about the default behavior of a link and what you might need to do to get this to work
  e.preventDefault()
  let image = document.getElementById("animal-image")
  let link =  getAnimalToggleLink()
  if (image.src.includes("cat")) {
    image.src = "puppy.jpeg"
    image.alt = "A puppy picture"
    link.innerHTML = "Click here to a cat picture instead"
  } else {
    image.src = "cat.jpg"
    image.alt = "A cat picture"
    link.innerHTML = "Click here to a puppy picture instead"
  }
}

function logInUser(e) {
  // get the username by using the helper function getUsername
  // get the errorsDiv by using the helper function getErrorsDiv
  // if there is not a username, display error in the errorsDiv that username must exist
  // otherwise
    // use the User.findByUsername(username) to grab the user
    // if it exist, use the clearForm function to clear the form's html
      // grab the header and change the header to Welcome, ${user.username}!
      // change the navLinks to set them to getLoggedInLinks
      // add a click event listener to your logout link to call the logoutUser function
    // otherwise
      // display error that user doesn't exist
  
  // Helpful Hint: Think about the default behavior of a form submit and what you might need to do to get this to work
}

function signUpUser(e) {
  e.preventDefault()
  // get the username by using the helper function getUsername
  // get the errorsDiv by using the helper function getErrorsDiv
  // if there is not a username, display error in the errorsDiv that username must exist
  // otherwise
    // use the User.findByUsername(username) to grab the user
    // if it exist, display an error that the user already exists
    // otherwise
      // create a user with the username
      // grab the header and change the header to Welcome, ${user.username}!
      // change the navLinks to set them to getLoggedInLinks
      // add a click event listener to your logout link to call the logoutUser function

  // Helpful Hint: Think about the default behavior of a form submit and what you might need to do to get this to work
}

function logoutUser(e) {
  // grab the header via get header and change it's inner html to Welcome To Dom Manipulation
  // change the navLinks to getLoggedOutLinks
  // make sure to set the eventListeners for your login and signup again so they create the login form as well as the signup form
  
  // Helpful Hint: Think about the default behavior of a link and what you might need to do to get this to work
}

function clearForm() {
  // grab the form div and clear out it's inner HTML (do after createSignupForm)
}

function getFormDiv() {
  // return the #form-div node
  return document.getElementById("form-div")
}

function getErrorsDiv() {
  // return the #errors node (do after createSignupForm)
  return document.getElementById("errors")
}

function getUsername() {
  // return the #username value (do after createSignupForm)
  return document.getElementById("username")
}

function getHeader() {
  // return the #header node
  return document.getElementById("header")
}

function getNavLinks() {
  // return the #nav-links node
  return document.getElementById("nav-links")
}

function getLoginLink() {
  // return the #login link node;
  return document.getElementById("login")
}

function getSignupLink() {
  // return the #signup link node;
  return document.getElementById("signup")
}

function getLoggedInLinks() {
  // return a string html template of a li with an a tag inside where it's id is logout and it's text is logout
}

function getAnimalToggleLink() {
  // return the #animal-toggle node;
  return document.getElementById("animal-toggle")
}

function getLoggedOutLinks() {
  // return a string html template of 2 lis with anchor elements inside them for login and signup, make sure the id for the login is login and the id for the signup is signup
}

function createLoginForm(e) {
  // grab the form div via getFormDiv
  // set the form div's inner HTML to a string html template that includes
  // - an h3 with Login inside
  // - a empty div with the id of errors
  // - a form with the id of login-form
  // inside the form you need to include:
  // - a div with the class of input-field
  // inside the div with a class of input-field you will include:
  // - an input type of text id of username
  // - (optional) a label with for="username" with the inner html of Username: 
  // after the div with a class of input-field add a submit button with the class of btn and value of Login

  // after the innerHTML has been set, grab the form that was just added and add an event listener of submit with a callback of logInUser
  
  // Helpful Hint: Think about the default behavior of a link and what you might need to do to get this to work
}

function createSignupForm(e) {
  // grab the form div via getFormDiv
  // set the form div's inner HTML to a string html template that includes
  // - an h3 with Signup inside
  // - a empty div with the id of errors
  // - a form with the id of signup-form
  // inside the form you need to include:
  // - a div with the class of input-field
  // inside the div with a class of input-field you will include:
  // - an input type of text id of username
  // - (optional) a label with for="username" with the inner html of Username: 
  // after the div with a class of input-field add a submit button with the class of btn and value of Signup

  // after the innerHTML has been set, grab the form that was just added and add an event listener of submit with a callback of signUpUser

  // Helpful Hint: Think about the default behavior of a link and what you might need to do to get this to work
  e.preventDefault()
  let formDiv = getFormDiv()
  formDiv.innerHTML = `
    <h3>Sign up</h3>  
    <div id="errors"></div>
    <form id="signup-form">
      <div class ="input-field">
        <input type="text" id="username">
      </div>
      <input type="submit" value="Sign up" class="btn">
    </form>
  `
  let form = document.getElementById('signup-form')
  form.addEventListener('submit', signUpUser)


}


window.addEventListener('load', (e) => {
  // start countdown header 1
  // add click event listener to #animal-toggle with callback clickToChangeImage
  // add click event listener to #login with callback createLoginForm
  // add click event listener to #signup with callback createSignupForm
  countDownHeader1()
  getAnimalToggleLink().addEventListener('click', clickToChangeImage)
  getSignupLink().addEventListener('click', createSignupForm)
})

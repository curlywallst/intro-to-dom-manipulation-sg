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
  let header = getHeader();
  header.innerHTML = '3';
  setTimeout(countDownHeader2, 1000);
}

function countDownHeader2() {
  let header = getHeader();
  header.innerHTML = '2';
  setTimeout(countDownHeader3, 1000);
}

function countDownHeader3() {
  let header = getHeader();
  header.innerHTML = '1';
  setTimeout(countDownHeader4, 1000);
}

function countDownHeader4() {
  let header = getHeader();
  header.innerHTML = 'Welcome To Dom Manipulation';
}

function clickToChangeImage(e) {
  e.preventDefault();
  let image = document.querySelector('#animal-image');
  let link = getAnimalToggleLink();
  if (image.src == 'http://127.0.0.1:5500/cat.jpg') {
    image.src = 'puppy.jpeg';
    image.alt = 'A puppy picture';
    link.innerHTML = 'Click here to a cat picture instead';
  } else {
    image.src = 'cat.jpg';
    image.alt = 'A cat picture';
    link.innerHTML = 'Click here to a puppy picture instead';
  }
}

function logInUser(e) {
  e.preventDefault();
  let username = getUsername();
  let errorsDiv = getErrorsDiv();
  errorsDiv.innerHTML = ''
  errorsDiv.style.color = 'red';
  if(username){
    let user = User.findByUsername(username);
    if(user) {
      clearForm();
      let header = getHeader();
      let navLinks = getNavLinks();
      navLinks.innerHTML = getLoggedInLinks();
      header.innerHTML = `Welcome, ${user.username}!`
      document.querySelector('#logout').addEventListener('click', logoutUser);
    } else {
      errorsDiv.innerHTML = 'user doesn\'t exist'
    }
  } else {
    errorsDiv.innerHTML = 'username must exist'
  }
}

function signUpUser(e) {
  e.preventDefault();
  let username = getUsername();
  let errorsDiv = getErrorsDiv();
  errorsDiv.innerHTML = ''
  errorsDiv.style.color = 'red';
  if (username) {
    let user = User.findByUsername(username);
    if (user) {
      errorsDiv.innerHTML = 'user already exist'
    } else {
      clearForm();
      let navLinks = getNavLinks();
      navLinks.innerHTML = getLoggedInLinks();
      let user = new User(username);
      let header = getHeader();
      header.innerHTML = `Welcome, ${user.username}!`
      document.querySelector('#logout').addEventListener('click', logoutUser);
    }
  } else {
    errorsDiv.innerHTML = 'username must exist'
  }
}

function logoutUser(e) {
  e.preventDefault();
  let header = getHeader();
  let navLinks = getNavLinks();
  header.innerHTML = 'Welcome To Dom Manipulation';
  navLinks.innerHTML = getLoggedOutLinks();
  document.querySelector('#login').addEventListener('click', createLoginForm);
  document.querySelector('#signup').addEventListener('click', createSignupForm);
}

function clearForm() {
  let formDiv = grabFormDiv();
  formDiv.innerHTML = '';
}

function grabFormDiv() {
  return document.getElementById('form-div')
}

function getErrorsDiv() {
  return document.getElementById('errors');
}

function getUsername() {
  return document.getElementById('username').value;
}

function getHeader() {
  return document.getElementById('header');
}

function getNavLinks() {
  return document.getElementById('nav-links');
}

function getLoginLink() {
  return document.querySelector('#login');
}

function getSignupLink() {
  return document.querySelector('#signup');
}

function getLoggedInLinks() {
  return `
    <li><a href="#" id="logout">Logout</a></li>
  `
}

function getAnimalToggleLink() {
  return document.querySelector('#animal-toggle');
}

function getLoggedOutLinks() {
  return `
    <li><a href="#" id="login">Login</a></li>
    <li><a href="#" id="signup">Signup</a></li>
  `
}

function createLoginForm(e) {
  e.preventDefault();
  let formDiv = document.getElementById('form-div');
  formDiv.innerHTML = `
    <h3>Login</h3>
    <div id="errors"></div>
    <form id="login-form">
      <div class="input-field">
        <input type="text" name="username" id="username">
        <label for="username">Username: </label>
      </div>
      <input type="submit" value="Login" class="btn">
    </form>
  `
  let form = document.getElementById('login-form');
  form.addEventListener('submit', logInUser);
}

function createSignupForm(e) {
  e.preventDefault();
  let formDiv = document.getElementById('form-div');
  formDiv.innerHTML = `
    <h3>Signup</h3>
    <div id="errors"></div>
    <form id="signup-form">
      <div class="input-field">
        <input type="text" name="username" id="username">
        <label for="username">Username: </label>
      </div>
      <input type="submit" value="Signup" class="btn">
    </form>
  `
  let form = document.getElementById('signup-form');
  form.addEventListener('submit', signUpUser);
}


window.addEventListener('load', (e) => {
  // start countdown header
  countDownHeader1();

  // change animal link
  getAnimalToggleLink().addEventListener('click', clickToChangeImage);

  // login / signup
  getLoginLink().addEventListener('click', createLoginForm);
  getSignupLink().addEventListener('click', createSignupForm);
})
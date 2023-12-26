function updateNavbarForLogin(user) {
    sessionStorage.setItem('loggedInUser', JSON.stringify(user));
    // Hide login and signup sections
    document.getElementById('navbar-search').style.display = 'none';
    // Show user profile section
    document.getElementById('userProfileSection').style.display = 'flex';
    // Update user information
    const img=src = '../img/account.png'; 
    document.getElementById('userInfo').innerHTML = `
   
    <img id="avatarButton" type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" class="w-10 h-10 rounded-full cursor-pointer" src="${img}" alt="User dropdown"> 
    <div id="userDropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
    <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
      <div>${user.username}</div>
      <div class="font-medium truncate">${user.email}</div>
    </div>
    <div class="py-1">
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onclick="signout()">Sign out</a>
    </div>
</div>


    `;
}
function checkLoggedInUser() {
    // Retrieve user information from session storage
    var loggedInUser = sessionStorage.getItem('loggedInUser');
    var dataLoginElement = document.getElementById('data-login');
    if (loggedInUser) {
        // If user is logged in, update the navbar with user information
        updateNavbarForLogin(JSON.parse(loggedInUser));
        dataLoginElement.style.display = 'flex';
    }else{
        dataLoginElement.style.display = 'none';
    }
}
function signup(event) {
    event.preventDefault();
    var firstName = document.getElementById('signupFirstName').value;
    var lastName = document.getElementById('signupLastName').value;
    var email = document.getElementById('signupEmail').value;
    var username = document.getElementById('signupUsername').value;
    var password = document.getElementById('signupPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('signupMessage3').innerText =
          'Wrong email Please try agian';
          document.getElementById('signupMessage2').innerText='';
        return;
      }
    // Validate confirm password
    if (password !== confirmPassword) {
        document.getElementById('signupMessage3').innerText='Passwords do not match. Please try again.';
        document.getElementById('signupMessage2').innerText='';
        return;
    }
    // Check if the user already exists in local storage
    var users = JSON.parse(localStorage.getItem('users')) || [];
    var existingUser = users.find(user => user.email === email);
    if (existingUser) {
        document.getElementById('signupMessage3').innerText = 'User already exists. Please login.';
        document.getElementById('signupMessage2').innerText='';
        return;
    }
    // Save the new user to local storage
    var newUser = { firstName: firstName, lastName: lastName, email: email, username: username, password: password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    document.getElementById('signupMessage2').innerText = 'Account created successfully. You can now login.';
    document.getElementById('signupMessage3').innerText ='';

}
  // Function to handle user login
  function login(event) {
    event.preventDefault();
    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('signupMessage1').innerText =
          'Wrong email Please try agian';
          document.getElementById('signupMessage').innerText='';
        return;
      }
    // Check if the user exists in local storage
    var users = JSON.parse(localStorage.getItem('users')) || [];
    var loggedInUser = users.find(user => user.email === email && user.password === password);
    if (loggedInUser) {
        document.getElementById('signupMessage').innerText = 'Account login successfully.';
        document.getElementById('signupMessage1').innerText = '';
         // Redirect to the home page after a brief delay
         updateNavbarForLogin(loggedInUser)
         setTimeout(function () {
            window.location.href = '../index.html';
            updateNavbarForLogin(loggedInUser) 
        });
    } else {
        document.getElementById('signupMessage1').innerText = 'Invalid email or password. Please try again.';
        document.getElementById('signupMessage').innerText = '';
    }
  }
  function signout() {
    // Clear the session storage
    sessionStorage.removeItem('loggedInUser');
    // Show login and signup sections
    document.getElementById('navbar-search').style.display = 'block';

     //hide dev
     document.getElementById('data-login').style.display = 'none';
    // Hide user profile section
    document.getElementById('userProfileSection').style.display = 'none';
       setTimeout(function () {
            window.location.href = '../index.html';
        });
}
checkLoggedInUser();
// check if the user is logged in on page load

function checkLogin() {
    const loggedIn = localStorage.getItem('loggedIn');
    if(!loggedIn) {
        // window.location.href = 'login.html';
        alert("Check Login checked")
    }
}

// redirect to login page if user tries to access restricted pages without being logged in
const restrictedPages = ['./Pages/Favorites/favorite.html', './Pages/Cart/cart.html', '#Profile'];
restrictedPages.forEach(page => {
    const pageLink = document.querySelector(`a[href="${page}"]`);
    pageLink.addEventListener('click', event => {
        event.preventDefault();
        checkLogin();
    });
});

// handle login and logout 
const loginForm = document.getElementById('loginForm');
if(loginForm) {
    loginForm.addEventListener('submit', event => {
        event.preventDefault();

        // iplement your login logic here
        if(loginSuccessful){
            localStorage.setItem('loggedIn', true);
            window.location.href = 'home.html';
        } else {
            // handle failure
        }
    })
}

const logoutButton = document.getElementById('logoutButton');
if(logoutButton){
    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('loggedIn');

        window.location.href = 'home.html';
    })
}

window.location.href = 'home.html';

// possibly check for login at load
// checkLogin();
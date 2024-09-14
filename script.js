function toggleMenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

//  modal functionality for top sales section 

// Get the modal
const modal = document.getElementById('topSalesModal');

// Get the images in the top sales section
const sneakers = document.querySelectorAll('#top-sales .sneaker img');

// Get modal elements
const mainImage = document.getElementById('mainImage');
const sneakerName = document.getElementById('modalSneakerName');
const sneakerPrice = document.getElementById('modalSneakerPrice');
const sneakerRating = document.getElementById('modalSneakerRating');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// When the user clicks on any sneaker image, open the modal 
sneakers.forEach(sneaker => {
    sneaker.onclick = function() {
        modal.style.display = 'block';
        
        // Update modal content based on the clicked sneaker
        mainImage.src = this.src;
        sneakerName.innerText = this.closest('.sneaker').querySelector('.name').innerText;
        sneakerPrice.innerText = this.closest('.sneaker').querySelector('.price').innerText;
        sneakerRating.innerText = this.closest('.sneaker').querySelector('.rating').innerText;
    };
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

//shop more modal



// Get all the sneaker images in the Shop More section
const shopMoreSneakers = document.querySelectorAll('#shop-more .sneaker');

// Get the modal element
const shopMoreModal = document.getElementById('shopMoreModal');

// Get the close button for the modal
const closeShopMoreModal = document.getElementById('closeShopMoreModal');

// Get the elements to update within the modal
const modalMainImage = document.getElementById('modalMainImage');
const modalShoeName = document.getElementById('modalShoeName');
const modalShoePrice = document.getElementById('modalShoePrice');

// Add click event listeners to all sneaker images
shopMoreSneakers.forEach((sneaker) => {
    sneaker.addEventListener('click', (event) => {
        // Get the clicked sneaker element
        const clickedSneaker = event.currentTarget;
        
        // Retrieve the sneaker's image, name, and price
        const sneakerImage = clickedSneaker.querySelector('img').src;
        const sneakerName = clickedSneaker.querySelector('.name').textContent;
        const sneakerPrice = clickedSneaker.querySelector('.price').textContent;
        
        // Update the modal content with the clicked sneaker's details
        modalMainImage.src = sneakerImage;
        modalShoeName.textContent = sneakerName;
        modalShoePrice.textContent = sneakerPrice;

        // Display the modal
        shopMoreModal.style.display = 'block';
    });
});

// Close the modal when the close button is clicked
closeShopMoreModal.addEventListener('click', () => {
    shopMoreModal.style.display = 'none';
});

// Close the modal if the user clicks outside of it
window.addEventListener('click', (event) => {
    if (event.target === shopMoreModal) {
        shopMoreModal.style.display = 'none';
    }
});

// promo modal

function openPromoModal(promoId) {
    var modal = document.getElementById("promoModal");
    var promoName = document.getElementById("promoName");
    var promoPrice = document.getElementById("promoPrice");
    var promoDescription = document.getElementById("promoDescription");
    var promoImage = document.getElementById("promoImage");

    // Update modal content based on promoId
    if (promoId === 1) {
        promoName.textContent = "Low Dunks";
        promoPrice.textContent = "R2 500";
        promoDescription.textContent = "Buy any two of these for only R2 500.";
        promoImage.src = "Images/NEW1.jpg";
    } else if (promoId === 2) {
        promoName.textContent = "High Dunks";
        promoPrice.textContent = "R1 800";
        promoDescription.textContent = "Get 30% off on a second pair.";
        promoImage.src = "Images/Grey fog 1.jpg";
    } else if (promoId === 3) {
        promoName.textContent = "Air Max";
        promoPrice.textContent = "R2 300";
        promoDescription.textContent = "Special offer: Buy one get one at 50% off.";
        promoImage.src = "Images/airmax90 1.jpg";
    }

    modal.style.display = "block";
}

function closePromoModal() {
    var modal = document.getElementById("promoModal");
    modal.style.display = "none";
}


// slideshow for clothing brand

const slides = document.querySelectorAll('#clothing-slideshow img');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Start the slideshow
showSlide(currentSlide);
setInterval(nextSlide, 5000); // Change slide every 5 seconds


//extra for teh code

// Smooth scrolling to sections when a nav link is clicked
const navLinks = document.querySelectorAll('nav a[href^="#"]');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 50, // Adjust for any header height
            behavior: 'smooth'
        });
    });
});

// Scroll to top button functionality
const scrollToTopBtn = document.createElement('div');
scrollToTopBtn.innerHTML = '⬆️';
scrollToTopBtn.style.position = 'fixed';
scrollToTopBtn.style.bottom = '20px';
scrollToTopBtn.style.right = '20px';
scrollToTopBtn.style.backgroundColor = '#623e2a';
scrollToTopBtn.style.color = 'white';
scrollToTopBtn.style.padding = '10px';
scrollToTopBtn.style.cursor = 'pointer';
scrollToTopBtn.style.borderRadius = '50%';
scrollToTopBtn.style.display = 'none';
scrollToTopBtn.style.zIndex = '1000';

document.body.appendChild(scrollToTopBtn);

// Show the button when scrolled down, hide when at top
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Hover effect on 'Add to Cart' and 'Buy Now' buttons for Top Sales & Shop More
const interactiveButtons = document.querySelectorAll('.add-to-cart, .buy-now');

interactiveButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
        button.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
        button.style.boxShadow = 'none';
    });
});

// Optional: Add a small visual effect when adding to cart (for Top Sales and Shop More modals)
interactiveButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.style.backgroundColor = '#402619';
        setTimeout(() => {
            button.style.backgroundColor = '#623e2a';
        }, 300);
    });
});

// my account// 
document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const loginToggle = document.getElementById('login-toggle');
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');

    // Toggle between registration and login forms
    loginToggle.addEventListener('click', function() {
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    });
});

loginToggle.addEventListener('click', function() {
    alert('Login clicked!');
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
});

//my orders//

// Simulate login status
const isLoggedIn = true;  // Change this to simulate logged in/out status
const hasOrders = false;  // Change this to simulate if the user has orders or not

// Get elements
const loginReminder = document.getElementById('login-reminder');
const noOrders = document.getElementById('no-orders');
const ordersList = document.getElementById('orders-list');

// Check if the user is logged in
if (!isLoggedIn) {
    loginReminder.style.display = 'block';
    ordersList.style.display = 'none';
} else {
    // If logged in, check if they have orders
    if (!hasOrders) {
        noOrders.style.display = 'block';
        ordersList.style.display = 'none';
    } else {
        noOrders.style.display = 'none';
        ordersList.style.display = 'block';

        // Example: Adding Orders Dynamically
        const pendingOrders = document.getElementById('pending-orders');
        const completedOrders = document.getElementById('completed-orders');

        // Sample order data
        let orders = [
            { id: '1234', item: 'Airforce 1 plain white', status: 'pending' },
            { id: '5678', item: 'Jordan 1', status: 'completed' }
        ];

        // Populate orders dynamically
        orders.forEach(order => {
            let li = document.createElement('li');
            li.innerText = `Order #${order.id} - ${order.item} (${order.status.charAt(0).toUpperCase() + order.status.slice(1)})`;

            if (order.status === 'pending') {
                pendingOrders.appendChild(li);
            } else {
                completedOrders.appendChild(li);
            }
        });
    }
}

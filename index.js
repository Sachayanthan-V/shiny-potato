document.addEventListener('DOMContentLoaded', function () {
    // Example: Countdown Timer
    function updateCountdown() {
        const now = new Date();
        const nextAnniversary = new Date('2025-09-06'); // Set your next anniversary date here
        const timeDiff = nextAnniversary - now;

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        document.getElementById('countdown-timer').innerHTML = 
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    setInterval(updateCountdown, 1000);
});

// function scrollToTop() {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
// }

document.addEventListener('DOMContentLoaded', function () {
    const timelineItems = document.querySelectorAll('.timeline-item');

    function checkVisibility() {
        const windowHeight = window.innerHeight;
        timelineItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top < windowHeight && rect.bottom > 0) {
                item.classList.add('show');
            } else {
                item.classList.remove('show');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check
});

// index2.js (Add this script to handle visibility of the message section)

document.addEventListener('DOMContentLoaded', () => {
    const messageSection = document.querySelector('#message');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(messageSection);
});

function checkAnswers() {
    // Define correct answers
    const correctAnswers = {
        q1: 'a',  // Café Downtown
        q2: 'c',  // Interstellar
        q3: 'a'   // September 6
    };

    // Get user answers
    const userAnswers = {
        q1: document.querySelector('input[name="q1"]:checked')?.value,
        q2: document.querySelector('input[name="q2"]:checked')?.value,
        q3: document.querySelector('input[name="q3"]:checked')?.value
    };

    // Calculate score
    let score = 0;
    for (const [key, value] of Object.entries(correctAnswers)) {
        if (userAnswers[key] === value) {
            score++;
        }
    }

    // Display result
    const resultText = `You got ${score} out of ${Object.keys(correctAnswers).length} questions right!`;
    document.getElementById('quiz-result').innerText = resultText;
}


function updatePlaylist() {
    const playlistId = document.getElementById('playlist').value;
    const playlistFrame = document.getElementById('playlist-frame');
    playlistFrame.src = `https://youtu.be/BddP6PYo2gs?si=iHa25NcQYxuLVzTj&autoplay=1`;
}

// JavaScript to add 'active' class when elements are in view

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) / 2 &&
        rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) / 2
    );
}

function handleScroll() {
    const dateItems = document.querySelectorAll('.date-item');
    dateItems.forEach(item => {
        if (isElementInViewport(item)) {
            item.classList.add('active');
        } else {
            item.classList.remove('active'); // Optionally remove class when out of view
        }
    });
}

// Initial check
handleScroll();

// Check on scroll
window.addEventListener('scroll', handleScroll);

function filterIdeas() {
    const input = document.getElementById('filter-input');
    const filter = input.value.toLowerCase();
    const items = document.querySelectorAll('#date-ideas .date-item');

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(filter)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('#bucket-list-items input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const parentItem = this.closest('.bucket-item');
            if (this.checked) {
                parentItem.style.backgroundColor = '#d4edda'; // Light green for completed
                parentItem.querySelector('h3').style.textDecoration = 'line-through';
            } else {
                parentItem.style.backgroundColor = '#fff'; // Reset to white
                parentItem.querySelector('h3').style.textDecoration = 'none';
            }
        });
    });
});


function updateMap() {
    const location = document.getElementById('location').value;
    const mapFrame = document.getElementById('map-frame');
    const baseUrl = "https://www.google.com/maps/embed?pb=";
    
    // Map URLs can be customized based on your needs
    const mapUrls = {
        "San+Francisco,CA": "M18!1m12!1m3!1d3153.0443642049316!2d-122.4194186846811!3d37.77492927975906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1",
        "New+York,NY": "M18!1m12!1m3!1d120267.97733792955!2d-74.0060152197416!3d40.71272809330356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1",
        "Paris,France": "M18!1m12!1m3!1d2624.776375706281!2d2.313092416031718!3d48.85884407928777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1",
        "Tokyo,Japan": "M18!1m12!1m3!1d129679.2284061455!2d139.7670849059043!3d35.68095923077368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1"
    };

    mapFrame.src = `${baseUrl}${mapUrls[location]}!5e0!3m2!1sen!2sus!4v1677240675206!5m2!1sen!2sus`;
}



document.addEventListener('DOMContentLoaded', function() {
    let isDragging = false;
    let lastX, lastY;
    let rotationX = 0, rotationY = 0;
    const sensitivity = 0.5;

    const cubeWrapper = document.getElementById('cube-wrapper');
    const cube = document.getElementById('cube');

    cubeWrapper.addEventListener('mousedown', function(e) {
        isDragging = true;
        lastX = e.pageX;
        lastY = e.pageY;
    });

    document.addEventListener('mousemove', function(e) {
        if (isDragging) {
            let deltaX = e.pageX - lastX;
            let deltaY = e.pageY - lastY;

            rotationY += deltaX * sensitivity;
            rotationX -= deltaY * sensitivity;

            // Keep the rotationX within bounds to prevent flipping
            rotationX = Math.max(-90, Math.min(90, rotationX));

            cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

            lastX = e.pageX;
            lastY = e.pageY;
        }
    });

    document.addEventListener('mouseup', function() {
        isDragging = false;
    });
});

// Function to scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show or hide scroll-to-top button on scroll
window.addEventListener('scroll', function () {
    const scrollTopButton = document.getElementById('scroll-to-top');
    if (window.scrollY > 300) {
        scrollTopButton.classList.add('show');
        scrollTopButton.classList.remove('hide');
    } else {
        scrollTopButton.classList.add('hide');
        scrollTopButton.classList.remove('show');
    }
});

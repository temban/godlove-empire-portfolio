// assets/js/main.js

// Function to load navigation
function loadNavigation() {
    const nav = `
    <nav class="bg-white shadow-lg">
        <div class="max-w-6xl mx-auto px-4">
            <div class="flex justify-between">
                <div class="flex space-x-7">
                    <div>
                        <!-- Logo -->
                        <a href="index.html" class="flex items-center py-4 px-2">
                            <span class="font-semibold text-gray-500 text-lg">Godlove Empire</span>
                        </a>
                    </div>
                </div>
                <!-- Primary Nav -->
                <div class="hidden md:flex items-center space-x-1">
                    <a href="index.html" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Home</a>
                    <a href="about.html" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About Us</a>
                    <a href="services.html" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Services</a>
                    <a href="projects.html" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Projects</a>
                    <a href="contact.html" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contact Us</a>
                </div>
                <!-- Mobile button -->
                <div class="md:hidden flex items-center">
                    <button class="outline-none mobile-menu-button">
                        <svg class="w-6 h-6 text-gray-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <!-- Mobile menu -->
        <div class="hidden mobile-menu">
            <ul class="">
                <li class="active"><a href="index.html" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Home</a></li>
                <li><a href="about.html" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About Us</a></li>
                <li><a href="services.html" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
                <li><a href="projects.html" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Projects</a></li>
                <li><a href="contact.html" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
            </ul>
        </div>
    </nav>
    `;
    document.querySelector('header').innerHTML = nav;
    
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// Function to load footer
function loadFooter() {
    const footer = `
    <footer class="bg-gray-800 text-white pt-12 pb-8">
        <div class="container mx-auto px-4">
            <div class="flex flex-wrap">
                <div class="w-full md:w-1/3 lg:w-1/4 mb-8">
                    <h3 class="text-xl font-bold mb-4">Godlove Empire</h3>
                    <p class="text-gray-400">Professional visual and artistic services since 2017.</p>
                </div>
                <div class="w-full md:w-1/3 lg:w-1/4 mb-8">
                    <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
                    <ul>
                        <li class="mb-2"><a href="index.html" class="text-gray-400 hover:text-white">Home</a></li>
                        <li class="mb-2"><a href="about.html" class="text-gray-400 hover:text-white">About Us</a></li>
                        <li class="mb-2"><a href="services.html" class="text-gray-400 hover:text-white">Services</a></li>
                        <li class="mb-2"><a href="projects.html" class="text-gray-400 hover:text-white">Projects</a></li>
                        <li class="mb-2"><a href="contact.html" class="text-gray-400 hover:text-white">Contact</a></li>
                    </ul>
                </div>
                <div class="w-full md:w-1/3 lg:w-1/4 mb-8">
                    <h4 class="text-lg font-semibold mb-4">Services</h4>
                    <ul>
                        <li class="mb-2"><a href="#" class="text-gray-400 hover:text-white">Logo Design</a></li>
                        <li class="mb-2"><a href="#" class="text-gray-400 hover:text-white">Graphic Design</a></li>
                        <li class="mb-2"><a href="#" class="text-gray-400 hover:text-white">Photography</a></li>
                        <li class="mb-2"><a href="#" class="text-gray-400 hover:text-white">Printing</a></li>
                    </ul>
                </div>
                <div class="w-full md:w-1/3 lg:w-1/4 mb-8">
                    <h4 class="text-lg font-semibold mb-4">Connect</h4>
                    <div class="flex space-x-4">
                        <a href="#" class="text-gray-400 hover:text-white">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; ${new Date().getFullYear()} Godlove Empire. All rights reserved.</p>
            </div>
        </div>
    </footer>
    `;
    document.querySelector('footer').innerHTML = footer;
}

document.addEventListener('DOMContentLoaded', function() {
  // Initialize main project carousel
  const projectCarousel = new Swiper('.project-carousel .swiper', {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.project-carousel .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.project-carousel .swiper-button-next',
      prevEl: '.project-carousel .swiper-button-prev',
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  });

  // Initialize mini gallery carousel
  const miniGallery = new Swiper('.mini-gallery', {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.mini-gallery .swiper-pagination',
      clickable: true,
    },
  });

  // Animate elements when they come into view
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.fade-in-up');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };

  // Run once on load
  animateOnScroll();
  
  // Run on scroll
  window.addEventListener('scroll', animateOnScroll);
});

// Load common elements when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    loadNavigation();
    loadFooter();
});
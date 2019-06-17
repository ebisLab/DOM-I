const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const addImgCTA = document.getElementById('cta-img');
addImgCTA.setAttribute('src', siteContent["cta"]["img-src"])

const addMiddleImg = document.getElementById('middle-img')
addMiddleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const addNav = document.querySelectorAll('a')
addNav[0].innerHTML = 'Services';
addNav[1].innerHTML = 'Product';
addNav[2].innerHTML = 'Vision';
addNav[3].innerHTML = 'Features';
addNav[4].innerHTML = 'About';
addNav[5].innerHTML = 'Contact';


const letAllH4 = document.querySelectorAll('h4')
letAllH4[0].textContent = siteContent['main-content']['features-h4']
letAllH4[1].textContent = siteContent['main-content']['about-h4']
letAllH4[2].textContent = siteContent['main-content']['services-h4']
letAllH4[3].textContent = siteContent['main-content']['product-h4']
letAllH4[4].textContent = siteContent['main-content']['vision-h4']
letAllH4[5].textContent = siteContent['contact']['contact-h4']

const modAllPs = document.querySelectorAll('p')
modAllPs[0].textContent = siteContent['main-content']['features-content']
modAllPs[1].textContent = siteContent['main-content']['about-content']
modAllPs[2].textContent = siteContent['main-content']['services-content']
modAllPs[3].textContent = siteContent['main-content']['product-content']
modAllPs[4].textContent = siteContent['main-content']['vision-content']
modAllPs[5].textContent = siteContent['contact']['address']
modAllPs[6].textContent = siteContent['contact']['phone']
modAllPs[7].textContent = siteContent['contact']['email']
modAllPs[8].textContent = siteContent['footer']['copyright']





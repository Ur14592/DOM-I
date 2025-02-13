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


//Photos 
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//Nav
const links = document.querySelectorAll('a');

links.forEach((currentValue, i) => (currentValue.textContent = Object.values(siteContent.nav)[i]));


//Green Text to nav 
links.forEach((item) => (item.style.color = 'green'));

const addLink = document.querySelector('nav');

// const newAtag = document.createElement('a');
// newAtag.textContent = 'Outreach';
// newAtag.href = '#';


//CTA
const ctaMore = document.querySelectorAll('h1');

ctaMore.forEach((currentValue, i) => (currentValue.textContent = Object.values(siteContent.cta)[i]));

const btn = document.querySelectorAll('button');

btn.forEach((currentValue, i) =>
(currentValue.textContent = Object.values(siteContent.cta)[1]));

//MainContent
const mainFeat = document.querySelectorAll('.main-content h4');
const mainP = document.querySelectorAll('.main-content p');

mainFeat[0].textContent = siteContent["main-content"]["features-h4"];
mainFeat[1].textContent = siteContent["main-content"]["about-h4"];
mainFeat[2].textContent = siteContent["main-content"]["services-h4"];
mainFeat[3].textContent = siteContent["main-content"]["product-h4"];
mainFeat[4].textContent = siteContent["main-content"]["vision-h4"];


mainP[0].textContent = siteContent["main-content"]["features-content"];
mainP[1].textContent = siteContent["main-content"]["about-content"];
mainP[2].textContent = siteContent["main-content"]["services-content"];
mainP[3].textContent = siteContent["main-content"]["product-content"];
mainP[4].textContent = siteContent["main-content"]["vision-content"];

//Contact
const contactH = document.querySelector('.contact h4');
const contactP = document.querySelectorAll('.contact p');

contactH.textContent = siteContent.contact["contact-h4"];
contactP[0].textContent= siteContent.contact["address"];
contactP[1].textContent= siteContent.contact["phone"];
contactP[2].textContent= siteContent.contact["email"];

//Footer
document.querySelector ('footer p').textContent = siteContent.footer.copyright;



// using prepend and appendChild
const navElement1 = document.createElement('a');
const navElement2 = document.createElement('a');
navElement1.href = '#';
navElement2.href = '#';
navElement1.textContent = "Orange";
navElement2.textContent = "Blue";
const mainNav = document.querySelector('header nav');
mainNav.prepend(navElement1);
mainNav.appendChild(navElement2);

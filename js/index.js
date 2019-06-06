const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute("src", siteContent["nav"]["img-src"]);

document.querySelector(".logo").src = siteContent["nav"]["img-src"];

// let newArr = [];

// let navi = siteContent.nav;

// navi.forEach(item => {
//   newArr.push(item);
// });

// console.log(newArr);

// let iter = 0;

// let navigation = document.querySelectorAll(".container header nav a");

// console.log(siteContent["nav"]["nav-item-6"]);
// navigation.forEach(item => {
//   let test = 0;
//   item.textContent = siteContent["nav"][test];
// });

// console.log(navigation);

let navigation = document.querySelectorAll(".container header nav a");

// navigation[0].textContent = siteContent["nav"][0];

navigation[0].textContent = siteContent["nav"]["nav-item-1"];
navigation[1].textContent = siteContent["nav"]["nav-item-2"];
navigation[2].textContent = siteContent["nav"]["nav-item-3"];
navigation[3].textContent = siteContent["nav"]["nav-item-4"];
navigation[4].textContent = siteContent["nav"]["nav-item-5"];
navigation[5].textContent = siteContent["nav"]["nav-item-6"];

document.querySelector(".cta h1").textContent = siteContent["cta"]["h1"];
document.querySelector(".cta button").textContent =
  siteContent["cta"]["button"];

document.querySelector("#cta-img").src = siteContent["cta"]["img-src"];

let allSecondaryHeaders = document.querySelectorAll(".text-content h4");
let allParagraphs = document.querySelectorAll(".text-content p");

allSecondaryHeaders[0].textContent = siteContent["main-content"]["features-h4"];
allParagraphs[0].textContent = siteContent["main-content"]["features-content"];

allSecondaryHeaders[1].textContent = siteContent["main-content"]["about-h4"];
allParagraphs[1].textContent = siteContent["main-content"]["about-content"];

document.querySelector("#middle-img").src =
  siteContent["main-content"]["middle-img-src"];

allSecondaryHeaders[2].textContent = siteContent["main-content"]["services-h4"];
allParagraphs[2].textContent = siteContent["main-content"]["services-content"];

allSecondaryHeaders[3].textContent = siteContent["main-content"]["product-h4"];
allParagraphs[3].textContent = siteContent["main-content"]["product-content"];

allSecondaryHeaders[4].textContent = siteContent["main-content"]["vision-h4"];
allParagraphs[4].textContent = siteContent["main-content"]["vision-content"];

document.querySelector(".contact h4").textContent =
  siteContent["contact"]["contact-h4"];

let contactParagraphs = document.querySelectorAll(".contact p");

contactParagraphs[0].textContent = siteContent["contact"]["address"];
contactParagraphs[1].textContent = siteContent["contact"]["phone"];
contactParagraphs[2].textContent = siteContent["contact"]["email"];

document.querySelector("footer p").textContent =
  siteContent["footer"]["copyright"];

let allHeaders = document.querySelectorAll("nav a");
allHeaders.forEach(item => (item.style.color = "green"));
// let node1 = document.createElement("a");
// let node2 = document.createElement("a");
// node1.textContent = "Careers";
// node2.textContent = "FAQ";

allHeaders = document.getElementsByTagName("nav")[0];

let createNewNode = name => {
  let newNode = document.createElement("a");
  newNode.innerHTML = name;
  return newNode;
};

allHeaders.appendChild(createNewNode("Careers"));
allHeaders.prepend(createNewNode("FAQ"));

console.log(allHeaders);

allHeaders = document.querySelectorAll("nav a");
allHeaders.forEach(item => (item.style.color = "green"));

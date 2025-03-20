//Photos
import inventohub from "./../assets/projects/Inventohub/InventohubCover.png";
import inventohubMain from "./../assets/projects/Inventohub/InventohubMain.png";
import library from "./../assets/projects/Library/libraryCover.png";
import libraryMain from "./../assets/projects/Library/eLibraMain.png";
import carBrandShop from "./../assets/projects/AutoWheelsToday/carBrandShopCover.png";
import carBrandShopMain from "./../assets/projects/AutoWheelsToday/carBrandShopMain.png";

//Icon
import daisyui from "./../assets/Icon/daisyUI.png";
import express from "./../assets/Icon/express.png";
import firebase from "./../assets/Icon/firebase.png";
import react from "./../assets/Icon/react.png";
import mongodb from "./../assets/Icon/mongodb.png";
import tailwindcss from "./../assets/Icon/tailwind.png";

export const projectsData = [
  {
    id: 1,
    num: "01",
    coverPhoto: inventohub,
    mainPhoto: inventohubMain,
    type: "Website",
    tag: ["latest", "mern"],
    title: "InventoHub-An Inventory management system",
    technologoies: "html, tailwind css, javascript, react, express js, mongodb, firebase",
    skills: [react, express, mongodb, tailwindcss, firebase, daisyui],
    clientGithub: "https://github.com/Arnab-Gupta11/InventoHub-client",
    serverGithub: "https://github.com/Arnab-Gupta11/InventoHub-server",
    liveLink: "https://inventory-management-sys-67be7.web.app/",
    features: [
      " It is an intuitive Inventory Management System. Shop managers effortlessly handle product management, while admins seamlessly oversee and support shop owners. A robust digital solution for efficient and organized retail operations.",

      "Shop Managers can effortlessly add, update, and remove products, with the flexibility to buy subscriptions for expanded product limits.",

      "An efficient invoicing system enables Shop Managers to generate invoices post-product sales, ensuring smooth transaction processes.",

      "Admins have comprehensive user management capabilities, facilitating efficient oversight of the entire platform.",

      "Admins can send notices to Shop Managers for important updates and promotional emails to engage and attract guest users.",

      "The platform integrates essential features for streamlined shop operations and effective communication between administrators and managers.",
    ],
  },
  {
    id: 2,
    num: "02",
    coverPhoto: library,
    mainPhoto: libraryMain,
    type: "Website",
    tag: ["latest", "mern"],
    title: "eLibra-A Library Management System.",
    technologoies: "html, tailwind css, javascript, react, express js, mongodb, firebase",
    skills: [react, express, mongodb, tailwindcss, firebase, daisyui],
    clientGithub: "https://github.com/Arnab-Gupta11/eLibra-client",
    serverGithub: "https://github.com/Arnab-Gupta11/eLibra-server",
    liveLink: "https://elibrary2.netlify.app/",
    features: [
      "Experience seamless library management with our user-friendly website featuring an eye-catching frontend. Our system ensures a smooth interaction for users, making library tasks intuitive and enjoyable. Dive into a modern, interactive platform that enhances the library experience with a visually appealing design and user-centric functionalities.",

      "Responsive Design:Create a visually appealing and user-friendly website with a responsive design, ensuring a seamless experience across various devices.",

      "JWT Authentication:Implement JSON Web Token (JWT) authentication to secure API endpoints, ensuring a robust and secure user authentication process.",

      "Private Routes:Develop private routes accessible only to authenticated users, enhancing the security of sensitive functionalities and data within the library management system.",

      "Book Borrowing:Enable users to easily borrow books, providing a streamlined process for checking out and returning items from the library catalog.",

      "Book Management:Allow users to add and update book information, providing a dynamic and interactive way for librarians and administrators to maintain an up-to-date catalog.",

      "Borrowed Book Tracking:Implement a feature that allows users to view a comprehensive list of all the books they have borrowed, providing transparency and aiding in efficient book management.",

      "Book Details and Reading:Enable users to access detailed information about each book, including summaries and other relevant details, fostering a more engaging and informative library experience.",

      "Dark/Light Mode Toggle:Enhance the user experience by incorporating a toggle option between dark and light modes, providing a personalized visual environment based on user preferences",

      "Book Feedback:Enable users to provide book feedback, fostering a community-driven environment where others can read and contribute to public book reviews. This feature enhances the library experience by promoting user collaboration and shared insights.",
    ],
  },
  {
    id: 3,
    num: "03",
    coverPhoto: carBrandShop,
    mainPhoto: carBrandShopMain,
    type: "Website",
    tag: ["latest", "mern"],
    title: "AutoWheelsToday-A Car Brand Shop.",
    technologoies: "html, tailwind css, javascript, react, express js, mongodb, firebase",
    skills: [react, express, mongodb, tailwindcss, firebase, daisyui],
    clientGithub: "https://github.com/Arnab-Gupta11/AutoWheelsToday-client",
    serverGithub: "https://github.com/Arnab-Gupta11/AutoWheelsToday-server",
    liveLink: "https://brand-shop-a541e.web.app/",
    features: [
      "Discover cool cars and gear on our website! Easy shopping, great looks, and lots of fun – explore and find your favorite ride today!",

      "Users enjoy hassle-free login/logout capabilities, securing their personalized experience.",

      "Adding new products to the cart is made easy, enhancing the shopping experience.",

      "Responsive design ensures optimal viewing on phones and tablets, accommodating users on various devices.",

      "Accessible product details and cart visibility empower users with a comprehensive shopping journey.",

      "Private routes are restricted until login, emphasizing security and personalized interactions.",

      "Users can effortlessly update product information, ensuring accurate and dynamic product catalog management.",
    ],
  },
];

import React from "react";
import blogWin from "/images/blogWinDjango.png";
import personalWebsite from "/images/personalWebsite.png";
import seedlingsByMwalim from "/images/seedlingsByMwalim.png";
import noImage from "/images/no-image.png";
import nyumbaHub from "/images/nyumbahub.png";

export const serveProjects = () => {
  const projectsInfo = [
    {
      id: 1,
      title: "Blogwin",
      summary:
        "A Django fullstack application that includes the basic structure and functionality for a Django-based web application allowing users to perform CRUD (Create, Read, Update, Delete) operations on blog posts. It also has user authentication and authorization.",
      description:
        "A Django fullstack application that includes the basic structure and functionality for a Django-based web application allowing users to perform CRUD (Create, Read, Update, Delete) operations on blog posts. The application includes models for blog posts, views to render templates and handle HTTP requests, and forms to handle user input.\n\nIt uses the Django's LoginView class to display the login form and process the registered user's data and authenticate them.\n\nFor blog posts protection, users can view their blogs when they sign in, and they need to be the owners of posts they perform get, edit or delete operations on. Posting is available for any signed in user.\n\nThere's still a lot of work to be done, but this sets the foundation for the project.\n\nThe main features of the application include:",
      features: [
        "User authentication and authorization",
        "Creation of new blog posts",
        "Display of existing blog posts",
        "Updating and deleting existing blog posts",
      ],
      image: blogWin,
      techStack: ["Python", "Django", "Vanilla CSS", "HTML"],
      gitHub: "https://github.com/pptrgi/django-fullstack-blogposts",
      visit: "https://ptrgitonga.vercel.app",
    },
    {
      id: 2,
      title: "Personal Website",
      summary:
        "The website is built with React and styled with Tailwind. It features a modern design with a clear and concise navigation system, visually appealing landing page and sections for the bio, skills, services, projects and contact information, each with their own set of features.",
      description:
        "The website is built with React and styled with Tailwind.\n\nIt features a modern design with clear, concise and well-crafted sections that together make up a fully responsive site. The landing page contents are centered on the device's screen and they order according to the breakpoint in question. For easy navigation, the site includes a hamburger menu for mobile devices and a scroll down button. There's support for various contact means including contact form, Whatsapp and email service by EmailJS.\n\nThe application has a single 'store' for the projects data. Using React Router library, loader data is provided to the Home component, which is the parent component to all components loading on the Home page therefore exposing the data to its children. useNavigate() passes the project object state to the project's detail page via the route.\n\nHere are the main features of the website:",
      features: [
        "Navigation bar and hamburger menu",
        "Projects section with links to the project's detail page, GitHub repository and the website",
        "Services section has fully responsive service cards",
        "Email service support by EmailJS",
        "Various ways to contact me including with contact form, email, Whatsapp or phone call",
        "About section with the website's techstack and my bio",
        "Copy phone number to clipboard",
        "60 30 10 color principle",
        "Footer with links to social platforms, quick links and copyright info",
      ],
      image: personalWebsite,
      techStack: [
        "React",
        "Tailwind",
        "EmailJS",
        "React Router",
        "Font Awesome",
      ],
      gitHub: "https://github.com/pptrgi/react-portfolio-website",
      visit: "https://ptrgitonga.vercel.app",
    },
    {
      id: 3,
      title: "Seedlings by Mwalim",
      summary:
        "A fully responsive site built with React on the frontend and integrated with M-Pesa (STK push) for the payment service. It employs a number of technologies including Redux to manage the state of the cart operations, Node.js in the backend and Firebase for authentication.",
      description:
        "Inspired by my uncle's (Mr. Njagi) seedlings farm, Seedlings By Mwalim is an online seedlings selling site that is integrated with M-Pesa for the payment service. It is built with React on the frontend and the Node.js backend communicates with Safaricom's Daraja API to initiate the payment process.\n\nSigned in or not the application will allow the user to add items to cart. Items in the shopping cart are displayed in the Shopping Cart section of the cart page with buttons to increase or decrease the item quantity while there. To checkout, the user needs to sign in (if they weren't already) with their Google account. In this application the user sign-in method is Google's Sign-In With Popup provided by Firebase authentication.\n\nChecking out, the user is required to enter their Safaricom phone number as 07... . When the user clicks the Pay Now button, the phone number they entered and the total amount on the Checkout Totals section of the cart page are passed to the backend server.\n\nThe backend sends a get request with basic auth authorization headers to Daraja API. The API will receive base64 encoded Daraja account credentials for authentication. If successful, the backend receives an access token that will enable access and make requests to certain Daraja API endpoints. The backend then sends a post request with the data required by MPesa to process an MPesa request including sender's and receiver's information, together with the earlier received access token as an authorization header, to the Daraja API endpoint responsible for processing these types of requests. The API then sends an STK to the user's phone prompting them to enter their MPesa password to complete the transaction. After the user pays, a payment processing request is sent to MPesa by the API.\n\nThe application uses React Redux to manage the state of the cart operations, signed-in user, and filter products by category from various components. Device's local storage persists the state data thanks to Redux-persist.\n\nIt is styled with Tailwind CSS, and Canva is used to create the logo.\n\nThe main features are:",
      features: [
        "M-Pesa STK push payment method",
        "Fully responsive",
        "Typing simulation on the landing page",
        "Sign-in with popup by Google",
        "Offer window period countdown",
        "Swiper for recommended, best selling and all season products",
        "Device local storage for state persistence",
        "Navigation system with nav bar and hamburger menu",
        "Email service by EmailJS",
      ],
      image: seedlingsByMwalim,
      techStack: [
        "React",
        "Express.js",
        "Firebase",
        "Redux",
        "Tailwind",
        "EmailJS",
        "Swiper",
        "Font Awesome",
        "React Router",
        "React Toastify",
        "React Persist",
        "Axios",
        "Typed.js",
      ],
      gitHub: "https://github.com/pptrgi/seedlings-by-mwalim-ecommerce-website",
      visit: "https://seedlingsbymwalim.vercel.app",
    },
    {
      id: 4,
      title: "NyumbaHub MERN Stack",
      summary:
        "NyumbaHub is a vacant houses finding service based in Kenya. It includes a non-relational database MongoDB, Node/Express.js RESTful API hosted as a serverless function, and a React frontend where the house properties data is served to.",
      description:
        "NyumbaHub is a vacant houses finding service based in Kenya. It includes a non-relational database MongoDB, Node/Express.js RESTful API hosted as a serverless function, and a React frontend where the house properties data is served to.\n\nThe API employs the MVC design pattern. Using mongoose ORM, there are defined schemas for the 4 models used in the application. User-related, property-related, category-related and type-related routes have their logic and functionality implemented in the controllers' dir containing a folder for each of the mentioned groups. Public routes are available to all users while private routes are protected with JSON Web Token (JWT) and either require signing in to access service or can only be accessed by privileged users. The backend is a serverless function and has a UI to help users efficiently navigate through it.\n\nThe application's frontend includes an aesthetic, functional and easy to use fully responsive UI that enhances UX while still putting the UI/UX design principles into consideration. With Redux and redux toolkit the application is able to manage the state effectively, thanks to createAsyncThunk() the frontend can make API calls and handle loading, success and error states in async operations. It has a ton of navigation options including breadcrumbs, pagination, ham menu for mobile and header navigation. To enhance security, the frontend will privatize routes that need not be open.\n\nThe backend accepts URL query from a request to query the database and return filtered and/or sorted response data. Included also is the well-outlined terms of service and privacy policy for the overall application.\n\nThe main features of the overall application are:",
      features: [
        "Backend".toUpperCase(),
        "Authorization and authentication",
        "Server-side rendering",
        "Public and Protected routes with JSON Web Token(JWT)",
        "Database integration",
        "Images upload",
        "Frontend".toUpperCase(),
        "State management",
        "Fully responsive",
        "Private and open routes",
        "Pagination",
        "Breadcrumbs",
        "Slider",
        "Others".toUpperCase(),
        "Filter and sort",
        "Routing",
        "Privacy Policy",
        "Terms of Service",
        "Admin dashboard in the works",
      ],
      image: nyumbaHub,
      techStack: [
        "Node.js",
        "React",
        "Express.js",
        "Mongoose",
        "React Redux",
        "Redux Toolkit",
        "Mongodb",
        "Cloudinary",
        "Multer",
        "Sharp",
        "Nodemailer",
        "EmailJS",
        "Cookie-parser",
        "Cors",
        "Serverless-http",
        "JSON Web Token(JWT)",
        "Bcrypt",
        "Formik",
        "Yup",
        "React Router",
        "React Paginate",
        "React Toastify",
        "React Helmet",
      ],
      gitHub: "https://github.com/pptrgi/nyumbahub_api_serverless_function",
      visit: "https://nyumbahub.vercel.app",
    },
    {
      id: 5,
      title: "Coming soon",
      summary:
        "I'm currently putting the finishing touches on this latest project and I can't wait to share it with you! While I can't reveal too much just yet, I can promise it's going to be something truly special. Stay tuned for more information, sneak peeks and updates coming soon.",
      description: "",
      image: noImage,
      techStack: [],
      gitHub: "#",
      visit: "https://ptrgitonga.vercel.app",
    },
  ];
  return projectsInfo;
};

# Personal and Portfolio Website

The website is built with React and styled with Tailwind.

It features a modern design with clear, concise and well-crafted sections that together make up a fully responsive site. The landing page contents are centered on the device's screen and they order according to the breakpoint in question. For easy navigation, the site includes a hamburger menu for mobile devices and a scroll down button. There's support for various contact means including contact form, Whatsapp and email service by EmailJS.

The application has a single 'store' for the projects data. Using React Router library, loader data is provided to the Home component, which is the parent component to all components loading on the Home page therefore exposing the data to its children. useNavigate() passes the project object state to the project's detail page via the route.

The website includes sections for the bio, skills, services, projects and contact information, each with their own set of features.

**Here are the main features of the website:**
1. Navigation system includes a navigation bar, hamburger menu and a scroll down button
1. Email service support by EmailJS library and phone number  copy-to-clipboard capability in the contacts section 
1. Projects section includes a detail page for each project and links to the project's GitHub repository and the website
1. Skills section displays each skill with its respective icon and name
1. Three fully responsive service cards with services offered and their descriptions in the services section
1. About section includes the website's techstack and my bio
1. Landing page has centered contents and a scroll down button that takes you to the following section
1. The Footer includes links to my social media profiles and quick links, and copyright information

## Installation
1. Clone the repository to your local machine: `git clone git@github:pptrgi/react-portfolio-website.git`
1. Navigate to the project directory: `cd react-portfolio-website`
1. Install the dependencies: `npm install`
1. Start the development server: `npm start`
This will open the app in your default browser at http://localhost:3000

## Usage
Once you have the development server running, you can start using and modifying the app to your liking.

## License
This project is licensed under the MIT License.

## Contributing
If you would like to contribute to this project, please open a pull request. 

## Acknowledgments
- I'd like to acknowledge the use of React library in the development of this project
- Thanks Font Awesome for the icons used in this application
- Emailjs provides the email service
- To view the detail page for individual projects is thanks to React Router
- Special thanks to Tailwind CSS framework for its use in styling the app
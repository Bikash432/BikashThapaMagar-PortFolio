import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [{
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [{
        title: "Full Stack Developer",
        icon: web,
    },
    {
        title: "Data Science and ML",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Cloud and DevOps",
        icon: creator,
    },
];

const technologies = [{
        name: "Python",
        icon: html,
    },
    {
        name: "JavaScript",
        icon: css,
    },
    {
        name: "React JS",
        icon: javascript,
    },
    {
        name: "SQL",
        icon: typescript,
    },
    {
        name: "Angular JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "HTML,CSS,TAILWIND CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: " DevOps",
        icon: git,
    },
    {
        name: "Data Science",
        icon: figma,
    },
    {
        name: "Docker",
        icon: docker,
    },
];

const experiences = [{
        title: "Senior Software Engineer",
        company_name: "ElasticRun",
        icon: starbucks,
        iconBg: "#383E56",
        date: "July 2021 - June 2023",
        points: [
            "Led the design, development, and deployment of the Central Replacement Center (CRC) for B2B procurement",
            "and distribution, significantly improving sales and distribution efficiency",
            "Contributed innovative solutions for system design, including microservices, AWS, and security during",
            "management-level discussions on negative test case scenarios",
            "Served as Scrum Master, tracking sprint progress, gathering requirements, mentoring junior developers, assisting",
            "QA and support teams, meeting with business and developer,coding and ensuring timely project deployment.",
            "Developed high-level reports, dashboards, and APIs ensuring reliability and security; handled data cleaning",
            "analysis, data visualization, and insights presentation using data science techniques.",
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "Infosys",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Dec 2018 - July 2021",
        points: [
            "Build and upgraded a comprehensive Insurance platform with features like user authentication, product listings,",
            "shopping cart, payment gateway, order processing, and inventory management using React and C#.net",
            "Streamlined the software development lifecycle by automating build, test, and deployment processes, reducing",
            "time-to-market by 11% and implemented CI/CD pipelines using industry standard tools like Jenkins,GIT,AWS",
            "Contributed to the development of the Infosys SpringBoard using Angular, HTML5 , CSS3 and Node.js"
        ],
    },
    {
        title: "Web Developer",
        company_name: "Tribhuvan University",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - July 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Personal",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "July 2016 - Present",
        points: [
            "Designed Fine-tuned CNN-based AlexNet architecture, improving disease classification accuracy by 10%",
            "Increased the efficiency of predicting breast cancer to 97% with the given dataset.",
            "Developed the Shell and file management system in C programming language as a college project at SIUE",
            "Developed an Android application using Java in 2018, which had a significant impact on college projects.",
            "Developed over 20 personal projects including a hotel management system, YouTube clone, library management",
            "system, and COVID-19 tracker using React, Node.js, Python, SQL, Angular, JavaScript, Java, GIT, and AWS.",
        ],
    },
];

const testimonials = [{
        testimonial: "Bikash is a woderful software developer, who can work independently in any new technology and make it work out",
        name: "Arun",
        designation: "Principal Consultant",
        company: "Infosys Limited",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial: "Self motivated software developer that can work in teams to achieve the goals within deadlines",
        name: "Archana",
        designation: "Senior Project Manager",
        company: "Infosys Limited",
        image: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
        testimonial: "I have seen extreme talent and creativity with the right set of skills to complete the given task",
        name: "Sagar",
        designation: "Software Architect",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/men/6.jpg",
    },
];

const projects = [{
        name: "Car Rent",
        description: "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [{
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description: "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [{
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description: "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [{
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };
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
    tesla,
    elasticrun,
    siue,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    infosys,
    movie,
    breast,
    covid,
    transport,
    tu
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
        title: "ElasticRun - Senior Software Engineer",
        company_name: "ElasticRun",
        icon: elasticrun,
        iconBg: "#E6DEDD",
        date: "July 2021 - June 2023",
        points: [
            //     "Led the design, development, and deployment of the Central Replacement Center (CRC) for B2B procurement",
            //     "and distribution, significantly improving sales and distribution efficiency. ",
            //     "Contributed innovative solutions for system design, including microservices, AWS, and security during ",
            //     "management-level discussions on negative test case scenarios. ",
            //     "Served as Scrum Master, tracking sprint progress, gathering requirements, mentoring junior developers, assisting",
            //     "QA and support teams, meeting with business and developer,coding and ensuring timely project deployment. ",
            //     "Developed high-level reports, dashboards, and APIs ensuring reliability and security; handled data cleaning",
            //     "analysis, data visualization, and insights presentation using data science techniques.",
            // ],
            " ● Led the Central Replacement Center (CRC) project: Architected a B2C procurement and distribution system, ",
            "improving distribution efficiency by 35%. ",
            "● Improved system design: Developed microservices with AWS and implemented security strategies for robust ",
            "application architecture, reducing negative test case errors by 20%.",
            " ● Scrum Master: Facilitated agile processes, tracked sprint progress, and mentored junior developers, resulting in a ",
            " 15% productivity increase. ",
            " ● Enhanced reporting & analytics: Built secure dashboards and APIs, using data science techniques for insights, ",
            " reducing reporting time by 30%. ",
        ],

    },
    {
        title: "Infosys - Full Stack Developer",
        company_name: "Infosys",
        icon: infosys,
        iconBg: "#E6DEDD",
        date: "Dec 2018 - July 2021",
        points: [
            // "Build and upgraded a comprehensive Insurance platform with features like user authentication, product listings,",
            // "shopping cart, payment gateway, order processing, and inventory management using React and C#.net. ",
            // "Streamlined the software development lifecycle by automating build, test, and deployment processes, reducing",
            // "time-to-market by 11% and implemented CI/CD pipelines using industry standard tools like Jenkins,GIT,AWS. ",
            // "Contributed to the development of the Infosys SpringBoard using Angular, HTML5 , CSS3 and Node.js ."

            "● Developed an Insurance Platform: Integrated features like user authentication, shopping cart, and payment",
            "gateway using React and C#.net, enhancing customer experience.",
            "● Awarded Infosys Insta Award: Recognized for automating business processes using Python and PowerShell,",
            "reducing operational costs by 12%. \n",
            "● Streamlined SDLC: Reduced time-to-market by 11% with CI/CD pipelines in Jenkins, Git, and AWS,Comunda. \n",
            "● Infosys SpringBoard: Contributed to a learning platform using Angular, HTML5, CSS3, and Node.js, supporting",
            "over 10,000 active users."

        ],
    },
    {
        title: "Tribhuvan University - Web Developer",
        company_name: "Tribhuvan University",
        icon: tu,
        iconBg: "#E6DEDD",
        date: "Jan 2022 - July 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies. ",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            " Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "SIUE - Graduate Teaching Assistant",
        company_name: "Southern Illinois University Edwardsville",
        icon: siue,
        iconBg: "#E6DEDD",
        date: "July 2016 - Present",
        points: [
            "My primary responsibilities included supporting the course instructor in delivering lectures,",
            "assisting with grading assignments, and providing guidance to students on data science concepts. ",
            "Helping students understand complex topics like statistical analysis, machine learning algorithms,",
            "and data visualization techniques. ",
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
        name: "Movie Recommendation",
        description: "Online Movie Recommendation Web application System based On the Machile Learning and dataset from Kaagle.",
        tags: [{
                name: "Hackathon Winner",
                color: "blue-text-gradient",
            },
            {
                name: "Machine Learning",
                color: "green-text-gradient",
            },
        ],
        image: movie,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description: "Web application that enables users to search for job openings, view estimated salary ranges for positions,and locate jobs.",
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
        name: "Breast Cancer Prediction",
        description: "Reasearch on evaluating and increasing the efficiency of the breast cancer prediction using various machine learning algorithms.",
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
        image: breast,
        source_code_link: "https://github.com/Bikash432/CovidTracker-ReactJS.git",
    },
    {
        name: "Covid Tracker",
        description: "A web based application based on React and Restful API, that tracks and shares the covid status of countries and cities around the globe.",
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
        image: covid,
        source_code_link: "https://github.com/Bikash432/CovidTracker-ReactJS.git",
    },
    {
        name: "Client and Proxy Server",
        description: "Developed a project to see the interaction between the client and server and analyse security threats. It is a multithreaded application tracking the network.",
        tags: [{
                name: "C++",
                color: "blue-text-gradient",
            },
            {
                name: "Computer Network",
                color: "green-text-gradient",
            },
            {
                name: "Cybersecurity",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/Bikash432/Client_Proxy_Webserver.git",
    },
    {
        name: "Transportation",
        description: "Completed many projects that was associated to end-mile delivery, speed delivery and delivery and return of goodss and services in the rular part of India.",
        tags: [{
                name: "Python",
                color: "blue-text-gradient",
            },
            {
                name: "Javascript",
                color: "green-text-gradient",
            },
            {
                name: "SQL",
                color: "pink-text-gradient",
            },
        ],
        image: transport,
        source_code_link: "https://github.com/Bikash432/BloodBandhan.git",
    }
];

export { services, technologies, experiences, testimonials, projects };
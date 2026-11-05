// ============================================================================
// IMPORTS - Icon components from lucide-react
// ============================================================================
import {
    Github,
    Linkedin,
    Mail,
    Globe,
    Server,
    Code,
    Cpu,
    Brain
} from 'lucide-react';

import profileImg from '../image/IMG-20251021-WA0067.jpg';
import projectShot1 from '../image/Screenshot 2025-07-19 212242.png';
import projectShot2 from '../image/Screenshot 2025-08-16 234248.png';
import projectShot3 from '../image/Screenshot 2025-11-27 141956.png';


// ============================================================================
// PERSONAL INFORMATION - Basic profile details and social links
// ============================================================================
export const personalInfo = {
    name: "Nilanjan Nayak",
    role: "Full Stack Developer / Coder",
    shortRole: "Dev",
    location: "Bishnupur, West Bengal, India",
    email: "nayaknilanjan2@gmail.com",
    resumeUrl: "https://drive.google.com/uc?export=download&id=1XeienjULx0P1Jp8xO7XkO-Xa4w2Z-Iww",
    resumeDownloadUrl: "https://drive.google.com/uc?export=download&id=1XeienjULx0P1Jp8xO7XkO-Xa4w2Z-Iww",
    resumeViewUrl: "https://drive.google.com/file/d/1XeienjULx0P1Jp8xO7XkO-Xa4w2Z-Iww/view?usp=sharing",
    social: [
        { icon: Github, url: "https://github.com/Nilanjan-Nayak", label: "GitHub" },
        { icon: Linkedin, url: "https://www.linkedin.com/in/nilanjan-nayak-73b475322", label: "LinkedIn" },
        { icon: Mail, url: "mailto:nayaknilanjan2@gmail.com", label: "Email" }
    ]
};

// ============================================================================
// HERO SECTION - Landing page content
// ============================================================================
export const heroData = {
    headline: {
        prefix: "NILANJAN",
        highlight: "NAYAK"
    },
    description: [
        "I craft high-performance web experiences with precision, elegance, and purpose.",
        "Specializing in React, Node.js, and modern web technologies to turn complex problems into simple, beautiful solutions."
    ],
    stats: [
        { value: "3+", label: "Years Exp" },
        { value: "10+", label: "Projects" },
        { value: "5k+", label: "Lines of Code" }
    ],
    featuredProjects: [
        {
            name: "Star AI Lab",
            tech: "React • AI Integrations • Tailwind",
            year: "2025",
            image: projectShot1,
            description: "Showcase of AI-powered developer utilities and intelligent interactive tools.",
            link: "https://github.com/Nilanjan-Nayak"
        },
        {
            name: "Star Assistant",
            tech: "Python • Analytics • React • AI",
            year: "2025",
            image: projectShot2,
            description: "Intelligent desktop & voice assistant for workflow automation.",
            link: "https://github.com/Nilanjan-Nayak"
        },
        {
            name: "CareerKick Portal",
            tech: "React • Node.js • Full-Stack",
            year: "2024",
            image: projectShot3,
            description: "Comprehensive career & internship portal connecting developers.",
            link: "https://github.com/Nilanjan-Nayak"
        },
        {
            name: "Media Storage System",
            tech: "Python • JavaScript • CSS",
            year: "2024",
            image: profileImg,
            description: "High-speed local media storage and indexing dashboard.",
            link: "https://github.com/Nilanjan-Nayak"
        }
    ]
};

// ============================================================================
// ABOUT SECTION - Professional background and experience
// ============================================================================
export const aboutData = {
    // Profile image
    profileImage: profileImg,

    // Professional summary
    summary: {
        text: [
            "I am a dedicated Full Stack Developer with a strong foundation in Computer Science, currently pursuing my Diploma at Uluberia Government Polytechnic. My journey in tech is driven by an insatiable curiosity and a commitment to continuous learning.",
            "Specializing in Python, React, Node.js, and modern web technologies, I focus on engineering robust, data-driven applications and seamless digital experiences. Beyond traditional web development, I am actively exploring Data Structures, Algorithms, and Generative AI to craft innovative, scalable solutions.",
            "I am highly motivated by the potential of Artificial Intelligence to solve complex problems and create meaningful impact. My ultimate goal is to leverage cutting-edge technologies to build products that empower users and drive significant value across various domains."
        ],
        coreCompetencies: [
            "Full Stack Development",
            "React",
            "Python ",
            "Node.js",
            "JavaScript",
            "Data Structures & Algorithms",
            "Web Technologies",
            "Flutter"
        ]
    },

    // Study Experience
    experiences: [
        {
            role: "Diploma in Computer Science and Technology",
            company: "Uluberia Government Polytechnic (WBSCTE)",
            result: "Current CGPA: 7.2",
            period: "2022 - 2025",
            location: "Uluberia, West Bengal, India",
            type: "Diploma",
            description: "Comprehensive study of computer science fundamentals, software engineering, and modern application development.",
            achievements: [
                "Focused coursework in Data Structures, Algorithms, and Web Development.",
                "Participated in multiple hands-on projects and technical workshops.",
            ],
            tech: ["Python", "JavaScript", "React", "Node.js", "Full Stack Development"],
            gradient: "from-[#131c80] to-[#3066be]"
        },
        {
            role: "Secondary Education",
            company: "Kulumbani Jamunadas Khamka High School (WBBSE)",
            result: "Completed",
            period: "2021 - 2022",
            location: "Bishnupur, West Bengal, India",
            type: "Secondary",
            description: "Core secondary education with a focus on science and mathematics.",
            achievements: [
                "Successfully completed Secondary School Certificate.",
                "Developed foundational knowledge in core academic subjects.",
            ],
            tech: ["Mathematics", "Science", "English"],
            gradient: "from-[#3066be] to-[#5AA8D6]"
        },

    ],

    // Internships
    internships: [
        {
            role: "Web Development Intern",
            company: "Aeonix Research & Innovations LLP",
            period: "Oct 2024 - Oct 2024",
            location: "West Bengal, India",
            type: "Internship",
            description: "Completed a 1-month industrial internship focusing on basic web development.",
            achievements: [
                "Developed responsive web pages using HTML, CSS, and JavaScript.",
                "Collaborated on live projects and learned industry best practices.",
                "Awarded Certificate of Achievement (SL No: AEONIX/2024/ARI00758)."
            ],
            tech: ["HTML", "CSS", "JavaScript"],
            gradient: "from-[#3066be] to-[#5AA8D6]"
        },
        {
            role: "Data Visualization Intern",
            company: "Tata (Forage Job Simulation)",
            period: "Aug 2024",
            location: "Remote",
            type: "Simulation",
            description: "Empowering business with effective insights through data visualization.",
            achievements: [
                "Created impactful data visualizations for Tata Consultancy Services.",
                "Prepared strategic questions for client senior leadership meetings.",
                "Analyzed complex datasets to support executive decision-making."
            ],
            tech: ["Data Visualization", "Analytics", "Business Intelligence"],
            gradient: "from-[#5AA8D6] to-[#00bfff]"
        },
        {
            role: "Python Developer Trainee",
            company: "Ardent Computech Pvt Ltd",
            period: "Oct 2023 - Nov 2023",
            location: "West Bengal, India",
            type: "Industrial Training",
            description: "Industrial Intensive Activate program focused on Python Programming.",
            achievements: [
                "Mastered Python programming fundamentals and application development.",
                "Completed intensive hands-on training and certification.",
                "Certification ID: ARDENT/2023/AD85608."
            ],
            tech: ["Python", "Application Development"],
            gradient: "from-[#131c80] to-[#3066be]"
        },
        {
            role: "Full Stack Web Development",
            company: "YCSAS PVT. LTD.",
            period: "30th Sep 2024 - 10th Nov 2024",
            location: "West Bengal, India",
            type: "Industrial Training",
            description: "Outstanding completion of the online autumn internship program.",
            achievements: [
                "Completed online autumn internship program in Full Stack Web Development.",
                "Recognized for being hardworking, sincere, and diligent.",
                "Certificate No: YCSAS/INTR/2024/0038"
            ],
            tech: ["Full Stack", "Web Development", "Python"],
            gradient: "from-[#131c80] to-[#3066be]"
        },
    ], // Keeping empty as we moved them to experiences for better visibility

    // Education & Achievements
    scienceFairs: [
        {
            name: "ViCoDathon 2026",
            category: "Hackathon",
            achievement: "Participant",
            date: "14 Aug 2026",
            description: "I recently participated in ViCoDathon 2026 - India’s AI Vibe Coding Hackathon, organized by AB Talks. ",
            certificate: "https://drive.google.com/file/d/1MrPVqgrZAcEZVcmFTr1vHmY3sEcGoYa3/view?usp=sharing",
            gradient: "from-[#FFD700] to-[#FFA500],from-[#C0C0C0] to-[#A8A8A8]",
            icon: "🤖"
        },
        {
            name: "Adobe",
            category: "Hackathon",
            achievement: "Participant",
            date: "9 Aug 2026",
            description: "This is to certify that Nilanjan Nayak from Haldia Instituteof Technology has participated in the Adobe University Hackathon organised by Adobe.",
            certificate: "https://drive.google.com/file/d/1pfGJMAajXjd-U8ZhOvS6UGOuFVUjTc0x/view?usp=sharing",
            gradient: "from-[#3066be] to-[#5AA8D6],from-[#C0C0C0] to-[#A8A8A8]",
            icon: "🤖"
        },
        {
            name: "Tech-A-Bit",
            category: "Hackathon",
            achievement: "Participant",
            date: "17th - 18th May 2025",
            description: "Participated in Tech-A-Bit at Tech-A-Thon 5.0, organized by the ECE Society, Birla Institute of Technology (BIT), Mesra, Ranchi, as a member of Team RunTime Error, representing Haldia Institute of Technology, Haldia, West Bengal.",
            certificate: "https://drive.google.com/file/d/1crUYOUI6ZR5rGgJFDjo2c-iNE6q9A58I/view?usp=sharing",
            gradient: "from-[#1a1f35] to-[#3066be],from-[#C0C0C0] to-[#A8A8A8]",
            icon: "🤖"
        },
        {
            name: "Science & Engineering Fair 2025",
            category: "Birla Industrial & Technological Museum",
            achievement: "Participant",
            date: "Jan 2025",
            description: "Participated in the prestigious Science & Engineering Fair 2025 organized by BITM (National Council of Science Museums, Govt. of India). Demonstrated scientific creativity by presenting an innovative project under the theme 'Science and Technology for Sustainable Future'.",
            certificate: "https://drive.google.com/file/d/1v9fyR3iWlsS2T-QHnFCybtFWpLf76_dW/view?usp=drive_link",
            gradient: "from-[#FFD700] to-[#FFA500],from-[#C0C0C0] to-[#A8A8A8]",
            icon: "🔭"
        },
        {
            name: "Inter-College Science Fair & Practical Project Exhibition 2024",
            category: "The Calcutta Technical School",
            achievement: "Group Participant",
            date: "May 2024",
            description: "Showcased scientific innovation by collaborating on a group project presented at the Inter-College Science Fair & Practical Project Exhibition, organized by The Calcutta Technical School.",
            certificate: "",
            gradient: "from-[#C0C0C0] to-[#A8A8A8],from-[#FFD700] to-[#FFA500]",
            icon: "🏅5️⃣"
        },
        {
            name: "Techphoria-2024: State-Level Online Coding Competition",
            category: "Technique Polytechnic Institute",
            achievement: "Participant",
            date: "Oct 2024",
            description: "Successfully competed in Techphoria-2024, an NBA-approved state-level online coding competition hosted by Technique Polytechnic Institute, demonstrating algorithmic problem-solving skills.",
            certificate: "https://drive.google.com/file/d/1GV1mo7NEz3WMWLCoiliwUrDG2HKXmEQK/view?usp=sharing",
            gradient: "from-[#C0C0C0] to-[#A8A8A8],from-[#FFD700] to-[#FFA500]",
            icon: "🏅5️⃣"
        },
        {
            name: "Workshop on Basic Digital Electronics",
            category: "Uluberia Govt. Polytechnic",
            achievement: "Group Participant",
            date: "Aug 2023",
            description: "Actively participated in the Basic Digital Electronics Workshop, engaging in hands-on activities and foundational electronics concepts at Uluberia Govt. Polytechnic.",
            certificate: "https://drive.google.com/file/d/1p4Vomh6hRJMp6fkv4TpYj9eG0dasnLDF/view?usp=drive_link",
            gradient: "from-[#C0C0C0] to-[#A8A8A8],from-[#FFD700] to-[#FFA500]",
            icon: "💡"
        }
    ],

    // Professional certifications
    certifications: [
        {
            name: "Basic Web Development",
            issuer: "Aeonix Research & Innovations LLP",
            year: "2024",
            certificate: "https://drive.google.com/file/d/1-1saTh93g8e3YHfbOKm_6EY58AOG5onp/view?usp=drive_link"
        },
        {
            name: "Data Visualisation",
            issuer: "Tata (Forage)",
            year: "2024",
            certificate: "https://drive.google.com/file/d/11ena5_RGRAb5tBAqNK2WYVke4rkIIq5s/view?usp=drive_link"
        },
        {
            name: "Data Analytics",
            issuer: "Accenture",
            year: "2024",
            certificate: "https://drive.google.com/file/d/1EZv8vr9Ayy4kMyZPFqC12U7rhN5r41sg/view?usp=drive_link"
        },
        {
            name: "Python Programming",
            issuer: "Ardent Computech Pvt Ltd",
            year: "2023",
            certificate: "https://drive.google.com/file/d/1GY-0KGo7G-yyaY81P8nuEuNxx6RcuD74/view?usp=drive_link"
        },
        {
            name: "Generative AI",
            issuer: "Microsoft & LinkedIn",
            year: "2024",
            certificate: "https://drive.google.com/file/d/1OBSPe3WV2x-x8x10vc9Cm4MIdLnq8mYp/view?usp=drive_link"
        },
        {
            name: "Full Stack Web Development",
            issuer: "YCSAS PVT. LTD.",
            year: "2024",
            certificate: "https://drive.google.com/file/d/1leWcswODkXny9uA5mHd9r_g7p3_XsWRC/view?usp=drive_link"
        },
        {
            name: "Workshop on Basic Digital Electronics",
            issuer: "Uluberia Govt. Polytechnic",
            year: "2023",
            certificate: "https://drive.google.com/file/d/1p4Vomh6hRJMp6fkv4TpYj9eG0dasnLDF/view?usp=drive_link"
        },
        {
            name: "State-Level Online Coding Competition",
            issuer: "Technique Polytechnic Institute",
            year: "2024",
            certificate: "https://drive.google.com/file/d/1v9fyR3iWlsS2T-QHnFCybtFWpLf76_dW/view?usp=drive_link"
        }
    ]
};

// ============================================================================
// DREAM PROJECT SECTION - Special showcase for the ultimate project
// ============================================================================
export const dreamProjectData = {
    title: "Star AI Lab",
    description: "The primary purpose of this website is to showcase my personal projects by sharing their GitHub repositories and related links in one place. In addition, the site is designed to introduce practical AI-powered features that people can easily use in their daily lives, making common tasks more efficient and accessible for both users and visitors.",
    vision: "To transform urban living by creating self-optimizing cities that enhance quality of life, reduce environmental impact, and foster innovation through data-driven decision making.",
    category: "Website Based Project",
    status: "In Development",
    image: "src/image/Screenshot 2025-11-27 141956.png",

    // Quick stats displayed prominently
    quickStats: [
        { value: "Trail Mode ", label: "Users" },
        { value: "1+", label: "Modules" },
        { value: "4+", label: "Projects Available" }
    ],

    // Key features
    keyFeatures: [
        "Intelligent Project Showcase",
        "Automatic Detection: - Session-based visitor identification",
        "Advanced UI/UX Features",
        "Performance Optimizations",
        "Authentication & Security",
        "Emergency Response System"
    ],

    // Technology stack
    techStack: [
        "React 18.3.1",
        "TypeScript 5.5.3",
        "Vite 5.4.2",
        "React Router DOM 6.20.1",
        "Tailwind CSS 3.4.17",
        "PostCSS",
        "Autoprefixer",
        "Lucide React",
        "MongoDB",
        "Mongoose",
        "Express.js",
        "Node.js",
        "Nodemon",
        "Etc.",
    ],

    // Expected impact
    impact: [
        "Reduce city energy consumption by 30% through AI-driven optimization",
        "Decrease traffic congestion by 40% with predictive routing algorithms",
    ],

    // Timeline
    timeline: {
        start: "Jan 2025",
        end: "I was Apparing for this "
    },

    // Team information
    teamSize: "Me only",

    // Progress percentage
    progress: 35,

    // Links
    liveUrl: "https://smartcity-demo.example.com",
    githubUrl: ""
};

// ============================================================================
// PROJECTS SECTION - Portfolio showcase
// ============================================================================
// data/portfolio.ts
export interface ProjectStats {
    year: string;
    status: 'Live' | 'In Progress' | 'Completed';
    stars?: string;
    commits?: string;
    views?: string;
    forks?: string;
}

export interface Project {
    title: string;
    description: string;
    image: string;
    tags: string[];
    category: string;
    accent: string;
    liveUrl: string;
    githubUrl: string;
    achievements: string[];
    stats: ProjectStats;
}

export const projectsData: Project[] = [

    {
        title: "Nayak SVG",
        description: "A Professional SVG Generator for any type of design and image upload.Integrated backend services for any type of image upload and generate svg file and  remove background from image then download svg file.",
        image: "",
        tags: ["Web Development", "html", "css", "js",],
        category: "Website",
        accent: "#5AA8D6",
        liveUrl: "",
        githubUrl: "https://github.com/Nilanjan-Nayak",
        achievements: [
            "Implemented modern UI/UX principles",
            "Integrated backend services for any type of image upload and generate svg file "
        ],
        stats: {
            year: "2024",
            status: "In Progress",
        }
    },
    {
        title: "Media Local Storage Management",
        description: "A web application that efficiently manages and organizes local media files.",
        image: "src/image/IMG-20251021-WA0067.jpg",
        tags: ["Web Development", "html", "css", "js", "Python"],
        category: "Full-Stack",
        accent: "#5AA8D6",
        liveUrl: "https://star-ai-lab.example.com",
        githubUrl: "https://github.com/Nilanjan-Nayak",
        achievements: [
            "Implemented modern UI/UX principles",
            "Integrated backend services for media management"
        ],
        stats: {
            year: "2024",
            status: "In Progress",
        }
    },
    {
        title: "Carrrerkick",
        description: "A comprehensive internship website designed to connect students with opportunities.",
        image: "src/image/Screenshot_2024-11-10_181701-removebg-preview.png",
        tags: ["Web Development", "Internship Portal", "Full Stack", "Group Project"],
        category: "Web Dev, Sofrtware Application",
        accent: "#3066be",
        liveUrl: "https://carrrerkick.example.com",
        githubUrl: "https://github.com/Nilanjan-Nayak",
        achievements: [
            "Designed user-friendly interface",
            "Optimized for performance"
        ],
        stats: {
            year: "2024",
            status: "In Progress",
            stars: "12",
            commits: "3",
            views: "Trail Mode "
        }
    },
    {
        title: "Star Assistant",
        description: "An AI-powered personal assistant application to enhance your day.",
        image: "src/image/Screenshot 2025-07-19 212242.png",
        tags: ["Data Visualization", "Analytics", "Business Intelligence"],
        category: "Data Science",
        accent: "#00bfff",
        liveUrl: "#",
        githubUrl: "https://github.com/Nilanjan-Nayak",
        achievements: [
            "Created effective visual insights",
            "Analyzed key business metrics"
        ],
        stats: {
            year: "2024",
            status: "Completed",
            stars: "5",
            commits: "10",
            views: "100"
        }
    },
    {
        title: "Star Mobile Assistant",
        description: "An AI-powered personal assistant application to enhance your day.",
        image: "src/image/Screenshot 2025-07-19 212242.png",
        tags: ["App Development", "Flutter", "AI Integration", "API Integration"],
        category: "Data Science",
        accent: "#00bfff",
        liveUrl: "#",
        githubUrl: "https://github.com/Nilanjan-Nayak",
        achievements: [
            "Created effective visual insights",
            " mobile app development"
        ],
        stats: {
            year: "2024",
            status: "In Progress",
            stars: "5",
            commits: "",
            views: "Under Development"
        }
    },
];

// ============================================================================
// SKILLS SECTION - Technical competencies
// ============================================================================
export const skillsData = {
    // Skill categories with detailed breakdown
    categories: [
        {
            id: 1,
            title: "Languages",
            icon: Code,
            size: "lg:col-span-2 lg:row-span-2",
            gradient: "from-[#3066be] to-[#5AA8D6]",
            iconSize: 48,
            skills: [
                { name: "Python", level: 15, years: 3, projects: 2, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                { name: "C", level: 9, years: 2, projects: 2, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
                { name: "JavaScript", level: 25, years: 2, projects: 12, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                { name: "HTML", level: 46, years: 3, projects: 20, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                { name: "CSS", level: 45, years: 3, projects: 20, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
                { name: "Java", level: 13, years: 2, projects: 3, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },

            ]
        },
        {
            id: 2,
            title: "Technologies",
            icon: Server,
            size: "lg:col-span-1 lg:row-span-1",
            gradient: "from-[#5AA8D6] to-[#00bfff]",
            iconSize: 32,
            skills: [
                { name: "TypeScript", level: 26, years: 2, projects: 5, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
                { name: "React", level: 25, years: 1, projects: 5, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "Node.js", level: 25, years: 1, projects: 5, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                { name: "vite", level: 20, years: 3, projects: 5, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" },
            ]
        },
        {
            id: 3,
            title: "Data & AI",
            icon: Brain,
            size: "lg:col-span-1 lg:row-span-1",
            gradient: "from-[#00bfff] to-[#3066be]",
            iconSize: 32,
            skills: [
                { name: "Generative AI", level: 26, years: 1, projects: 2, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
                { name: "Data Viz", level: 26, years: 2, projects: 4, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
                { name: "Algorithms", level: 15, years: 2, projects: 2, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
                { name: "Machine Learning", level: 15, years: 2, projects: 3, logo: "https://www.freepik.com/icon/machine-learning_2172891#fromView=image_search_similar&page=1&position=0&uuid=7d491d3a-a83b-4b0a-b23c-472424238414" },
                { name: "Chat GPT", level: 45, years: 2, projects: 6, logo: "https://upload.wikimedia.org/wikipedia/commons/e/ef/ChatGPT-Logo.svg" },
                { name: "Preplexity", level: 45, years: 2, projects: 6, logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/perplexity-color.png" },
            ]
        },
        {
            id: 4,
            title: "Tools",
            icon: Cpu,
            size: "lg:col-span-2 lg:row-span-1",
            gradient: "from-[#131c80] to-[#3066be]",
            iconSize: 40,
            skills: [
                { name: "MS Copilot", level: 85, years: 1, projects: 5, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
                { name: "Git/GitHub", level: 80, years: 2, projects: 15, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                { name: "VS Code", level: 95, years: 3, projects: 6, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
            ]
        }
    ],

    // Radar chart data for skill visualization
    radar: [
        { name: "Coding", level: 90 },
        { name: "Algorithms", level: 75 },
        { name: "Web Dev", level: 85 },
        { name: "Data Viz", level: 80 },
        { name: "Gen AI", level: 70 },
        { name: "Design", level: 65 }
    ]
};

// ============================================================================
// CONTACT SECTION - Communication methods
// ============================================================================
export const contactData = {
    methods: [
        {
            icon: Mail,
            label: "Email Me",
            value: "nayaknilanjan2@gmail.com",
            description: "I usually reply within 24 hours",
            link: "mailto:nayaknilanjan2@gmail.com",
            gradient: "from-[#3066be] to-[#5AA8D6]"
        },
        {
            icon: Globe,
            label: "Socials",
            value: "@Nilanjan-Nayak",
            description: "Follow my daily updates",
            link: "https://github.com/Nilanjan-Nayak",
            gradient: "from-[#5AA8D6] to-[#00bfff]"
        }
    ]
};

// ============================================================================
// NAVIGATION - Site navigation menu items
// ============================================================================
export const navItems = [
    { id: 'hero', label: 'Home', sectionId: 'hero' },
    { id: 'about', label: 'About', sectionId: 'about' },
    { id: 'dream-project', label: 'Dream Project', sectionId: 'dream-project' },
    { id: 'projects', label: 'Projects', sectionId: 'projects' },
    { id: 'skills', label: 'Skills', sectionId: 'skills' },
    { id: 'contact', label: 'Contact', sectionId: 'contact' }
];

const profileData = {
    title: 'Résumé',
    name: 'Hocine AMROUCHE',
    sub_title: 'Lead Full-Stack Developer',
    logoURL: 'assets/images/dp.jpg',
    about: {
        intro: ``,
        contact: {
            email: 'elhoce@gmail.com',
            phone: '06 79 82 82 30',
            address: 'Marseille'
        }
    },
    links: [
        {title: 'LinkedIn', src: 'https://www.linkedin.com/in/hocine-amrouche-2320b534/'},
    ],
    education: [
        {
            alma: 'Université d\'Avignon, Avignon',
            duration: '2006',
            std: 'Master PRO Info. Spé. : Traitement automatique de l\'information multimédia',
            score: '100.00%'
        },
        {
            alma: 'Université d\'Avignon, Avignon',
            duration: '2004',
            std: 'Licence Génie Mathématiques & Informatique',
            score: '100.00%'
        },
        {
            alma: 'Université d\'Avignon, Avignon',
            duration: '2003',
            std: 'DEUG Génie Mathématiques & Informatique',
            score: '100.00%'
        },
        {
            alma: 'Université St Charles, Marseille',
            duration: '2002',
            std: 'DEUG Mathématiques & Informatique appliqués aux sciences',
            score: '100.00%'
        },
        {
            alma: 'Lycée des remparts, Marseille',
            duration: '2000',
            std: 'BTS Mécanique & Automatique industrielle (1ère année)',
            score: '100.00%'
        },
        {
            alma: 'Lycée des remparts, Marseille',
            duration: '1999',
            std: 'Bac STI Génie Mécanique Industrielle',
            score: '100.00%'
        }
        
    ],
    skills: [
        {
            graph: 'false',
            category: 'Programming Languages',
            topics: ['Java 11', 'JS/TypeScript','CSS3','C++']
        },
        {
            graph: 'false',
            category: 'Databases',
            topics: ['MariaDB/MySQL', 'PostgreSQL']
        },
        {
            graph: 'false',
            category: 'Frameworks / Libraries',
            topics: ['Spring', 'SpringBoot', 'Angular', 'Vaadin','ChartJS','Lombok']
        },
        {
            graph: 'true',
            category: 'Env',
            topics: ['Linux','Jenkins','Git','GitHub','ArchLinux','Debian','SQL','Admin/Install PC/serveur', 'Bash scripting', 'Admin DNS', 'IntelliJ']
        }
    ],
    projects: [
       //  {
       //      title: 'Personal Doctor (Android App)',
       //      duration: 'Nov - Dec 2017',
       //      link: 'https://github.com/amitykaran/android-app',
       //      desc: `It is a small application have features like <strong>Medicine reminder</strong>
       // (remind you to take your medicine), find people of <strong>same blood group</strong> as yours and panic
       //  button for <strong>emergency call</strong>.`
       //  },
        {
            title: 'Down Syndrome Detection, (Using Machine Learning)',
            duration: 'Mar - April 2018',
            link: '',
            desc: `We can recognize a person suffering from <strong>Down Syndrome</strong> disorder by facial photograph.
       Developed in <strong>MATLAB</strong> using technologies like <strong>Image Recognition</strong>, <strong>Machine Learning</strong> and We use the different classifiers like SVM, Random Forest and KNN to train the machine.`
        },
        {
            title: `Front-End Project`,
            duration: 'Jan - Mar 2018',
            link: 'https://codepen.io/techcoderamit/full/wyBVdO',
            desc: `In the process of completion of <strong>front-end certification</strong> on <strong>Free Code Camp</strong>, I developed many small projects like <strong>Tic-tac-toe game</strong>, <strong>Sudoku solver</strong>, <strong>Weather finder App</strong>, <strong>JavaScript Calculator</strong>, <strong>Pomodoro Clock</strong>, <strong>Simon Game</strong>, etc.. 
`
        }
    ],
    experiences: [
        {
            organization: 'ADMS',
            roles: [
                {
                    title: `Lead Developer`,
                    desc: ``,
                    date: 'Depuis Dec 2017',
                    details: [
                        `Managing a team of <strong>6 peoples</strong> while working on <strong>2 different projects</strong>, In which one project is a <strong>customer-facing website</strong> and another is an <strong>internal CRM system</strong>. Our current focus is to implement new features with a futuristic approach. It will take our tech systems to new heights. `,
                    ]
                },
                {
                    title: `Ingénieur développeur Java - C++`,
                    desc: ``,
                    date: 'Mars 2008 - Dec 2017',
                    details: [
                        `Etude, développement, maintenance des logiciels de vacations, paie et du module de gestion des droits`,
                            `Installation & mise à jour des serveurs MS SQL ,Apache tomcat et JRE des clients (SDIS)`,
                        `Support technique et fonctionnel`,
                       `<strong>Env. Tech.</strong>`,
                        `&nbspJava, C++, Spring, Hibernate, Resteasy, MS SQL, MySQL, Tomcat, LDAP, Json, Eclipse, Borland C++ 6`,
                    ]
                }
            ],
        },
    ],
//     events: [
//         {
//             title: 'certifications',
//             body: [
//                 {
//                     desc: `<strong>IMAD (Introduction to Modern Application Development)</strong>, certified by <strong>NPTEL</strong>. (View Certificate: <a target='_blank' href='https://bit.ly/2D04Klj'>https://bit.ly/2D04Klj</a>)`,
//                     date: 'Feb - Mar 2018'
//                 },
//                 {
//                     desc: `<strong>Data Structure, in C</strong>, certified by <em> NPTEL </em>. Performance <strong> Elite(Topper)  </strong>. (View Certificate: <a target='_blank' href='https://bit.ly/2PNjaYN'> https://bit.ly/2PNjaYN</a>)`,
//                     date: 'Feb - Mar 2018'
//                 },
//                 {
//                     desc: `<strong>Legacy Front End</strong>, certified by <em> FreeCodeCamp </em>. (View Certificate: <a target='_blank' href='https://bit.ly/2OEZ5r9'> https://bit.ly/2OEZ5r9 </a>)`,
//                     date: 'Nov 2017 - Jan 2018'
//                 }
//             ]
//         },
//         {
//             title: 'Workshops',
//             body: [
//                 {
//                     desc: `<strong>First Step Robotics</strong>, Organized by Computer Society of India.`,
//                     date: 'Sep 2014'
//                 },

//                 {
//                     desc: `<strong>Web Essentials</strong> with KnowWorkshops and CSI Haridwar chapter at FET, GKV`,
//                     date: 'Feb 2015'
//                 },
//                 {
//                     desc: `<strong>Cloud Computing</strong>, Organized by Computer Society of India.`,
//                     date: 'Mar 2016'
//                 },
//                 {
//                     desc: `<strong> IOT</strong> Organized by <strong> Computer Society of India,
//  </strong> at FET, GKV`,
//                     date: 'Oct 2016'
//                 },

//             ]
//         },
//         {
//             title: 'Extracurricular Activities',
//             body: [
//                 {
//                     desc: `Co-Organizer (Decoration Committee) in <strong>Jnanagni'15</strong> (Annual Techno-Cultural fest of FET, GKV)`,
//                     date: 'Mar 2015'
//                 },
//                 {
//                     desc:
//                         'Volunteer during the <strong>Indian Science Congress seminar</strong>, at FET, GKV',
//                     date: 'Mar 2017'
//                 }
//             ]
//         }
//     ]
};

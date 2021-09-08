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
            topics: ['Spring', 'StringBoot', 'Angular', 'Vaadin','ChartJS']
        },
        {
            graph: 'false',
            category: 'Others',
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
            organization: 'Venuemonk',
            roles: [
                {
                    title: `Tech Lead(SDE-II)`,
                    desc: ``,
                    date: 'Aug 2020 - Present',
                    details: [
                        `Managing a team of <strong>6 peoples</strong> while working on <strong>2 different projects</strong>, In which one project is a <strong>customer-facing website</strong> and another is an <strong>internal CRM system</strong>. Our current focus is to implement new features with a futuristic approach. It will take our tech systems to new heights. `,
                    ]
                },
                {
                    title: `Full-Stack Developer(SDE-I)`,
                    desc: ``,
                    date: 'Jan 2020 - Aug 2020',
                    details: [
                        `Architecture design and Developed <strong>Application for Partners</strong> to make their work <strong>effortless</strong>, have features like <strong>On-boarding</strong>,  <strong>manage events</strong>, <strong>mail and Sms </strong>to the customer, track <strong>events status</strong>, <strong>past bookings</strong> and <strong>progress reports</strong>.`,
                        `Developed <strong>a smart lead management system</strong> to improve our sales team work <strong>efficiency nearly 4-times</strong>.`,
                    ]
                },
                {
                    title: `Front-End Developer(SDE-I)`,
                    desc: ``,
                    date: 'Dec 2018 - Dec 2019',
                    details: [
                        `Develop <strong>Our User Tracking System</strong> to track user behaviour at every point to give them a better experience. It will help us to implement <strong>AI and Machine Learning</strong> in the future.`,
                            `Develop a <strong>fully end-to-end application</strong> with a team of 3 to give a different experience to <strong>corporate users</strong>. They can manage their <strong>events</strong>, have a <strong>wallet</strong> to manage won <strong>cashpoints</strong>, also can buy <strong>coupons</strong> using them, etc.`,
                        // `Contributed to <strong>Corporate Application</strong> with <strong>2-Interns</strong> to give different experience to corporates. They can manage their <strong>events</strong>, have a <strong>wallet</strong> to manage <strong>cashpoints</strong>. To maintain cash flow have features like <strong>Won cashpoints</strong>, add <strong>coupons</strong> to cart to <strong>buy</strong> them, <strong>expire cash</strong>, etc. The whole project developed using <strong>React</strong>, <strong>Redux</strong>, <strong>CSS</strong>, <strong>Bootstrap 4</strong>, <strong>NodeJs</strong>, <strong>Express</strong>, <strong>MongoDB</strong>, etc.`,

                        `Contributed to <strong>Redesigning complete website(Mobile and Desktop)</strong> by translating the design mockups into reusable UI components of <strong>React</strong> with improved UI and functionality also integrate them with backend using APIs.`,

                    ]
                }
            ],
        },
        // {
        //     organization: 'Venuemonk',
        //     roles: [
        //         {
        //             title: `Full-Stack Developer(SDE-I)`,
        //             desc: `Full-Stack Engineer`,
        //             date: 'Dec 2018 - Present',
        //             details: [
        //                 `Contributed to <strong>Corporate Application</strong> with <strong>2-Interns</strong> to give different experience to corporates. They can manage their <strong>events</strong>, have a <strong>wallet</strong> to manage <strong>cashpoints</strong>. To maintain cash flow have features like <strong>Won cashpoints</strong>, add <strong>coupons</strong> to cart to <strong>buy</strong> them, <strong>expire cash</strong>, etc. The whole project developed using <strong>React</strong>, <strong>Redux</strong>, <strong>CSS</strong>, <strong>Bootstrap 4</strong>, <strong>NodeJs</strong>, <strong>Express</strong>, <strong>MongoDB</strong>, etc.`,
        //
        //                 `Developed <strong>Partner Application</strong> to make their work <strong>effortless</strong>, have features like <strong>On-boarding</strong>,  <strong>manage events</strong>, <strong>mail and Sms </strong>to the customer, track <strong>events status</strong>, <strong>past bookings</strong> and <strong>progress reports</strong>.`,
        //
        //                 `Contributed to <strong>Redesigning complete website(Mobile and Desktop)</strong> by translating the design mockups into reusable UI components of <strong>React</strong> with improved UI and functionality also integrate them with backend using APIs.`,
        //
        //                 // `Created a fully <strong>Dynamic Selective Form</strong> using different small reusable components to make the user experience effortless to connect with us. Integrate with <strong>Server</strong> and use <strong>AWS SQS</strong> to perform further operations on data.`,
        //
        //                 `<!--Created a <strong>Bootstrap 4 based custom framework</strong> to create <strong>design elements</strong> also <strong>convert SVG icons to CSS classes</strong> easily.-->`,
        //
        //                 // `Created a <strong>Dynamic Template website Generator</strong> to generate a single-page website quickly, with the help of templates written in <strong>DustJs</strong>, also connect with <strong>NodeJs</strong> to serve data.`,
        //
        //                 `Developed <strong>User Tracking System</strong> to track user behaviour to give them a better experience.`
        //             ]
        //         }
        //     ]
        // },
        {
            organization: 'NIC (National Informatics Centre)',
            roles: [
                {
                    title: `Project Engineer`,
                    desc: `Project Engineer`,
                    date: 'July 2018 - Nov 2018',
                    details: [
                        `Contributed to a development of <strong>Punjab Gov. portal</strong> that helps <strong>Industrialists and Investors</strong> to get all Clearances from <strong>20+ different Departments in one go.</strong>`
                    ]
                }
            ]
        }
    ],
    events: [
        {
            title: 'certifications',
            body: [
                {
                    desc: `<strong>IMAD (Introduction to Modern Application Development)</strong>, certified by <strong>NPTEL</strong>. (View Certificate: <a target='_blank' href='https://bit.ly/2D04Klj'>https://bit.ly/2D04Klj</a>)`,
                    date: 'Feb - Mar 2018'
                },
                {
                    desc: `<strong>Data Structure, in C</strong>, certified by <em> NPTEL </em>. Performance <strong> Elite(Topper)  </strong>. (View Certificate: <a target='_blank' href='https://bit.ly/2PNjaYN'> https://bit.ly/2PNjaYN</a>)`,
                    date: 'Feb - Mar 2018'
                },
                {
                    desc: `<strong>Legacy Front End</strong>, certified by <em> FreeCodeCamp </em>. (View Certificate: <a target='_blank' href='https://bit.ly/2OEZ5r9'> https://bit.ly/2OEZ5r9 </a>)`,
                    date: 'Nov 2017 - Jan 2018'
                }
            ]
        },
        {
            title: 'Workshops',
            body: [
                {
                    desc: `<strong>First Step Robotics</strong>, Organized by Computer Society of India.`,
                    date: 'Sep 2014'
                },

                {
                    desc: `<strong>Web Essentials</strong> with KnowWorkshops and CSI Haridwar chapter at FET, GKV`,
                    date: 'Feb 2015'
                },
                {
                    desc: `<strong>Cloud Computing</strong>, Organized by Computer Society of India.`,
                    date: 'Mar 2016'
                },
                {
                    desc: `<strong> IOT</strong> Organized by <strong> Computer Society of India,
 </strong> at FET, GKV`,
                    date: 'Oct 2016'
                },

            ]
        },
        {
            title: 'Extracurricular Activities',
            body: [
                {
                    desc: `Co-Organizer (Decoration Committee) in <strong>Jnanagni'15</strong> (Annual Techno-Cultural fest of FET, GKV)`,
                    date: 'Mar 2015'
                },
                {
                    desc:
                        'Volunteer during the <strong>Indian Science Congress seminar</strong>, at FET, GKV',
                    date: 'Mar 2017'
                }
            ]
        }
    ]
};

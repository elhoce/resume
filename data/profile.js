const profileData = {
    title: 'Résumé',
    name: 'Amit Yadav',
    sub_title: 'Full-Stack Developer',
    logoURL: 'assets/images/dp.jpg',
    about: {
        intro: `I am an innovative and passionate developer with a primary interest in <strong>JavaScript</strong>
     and it's applications. Experienced in designing and implementing sophisticated UI/UX with
      Progressive Web Application standards and application life-cycle managements.`,
        contact: {
            email: 'amitykaran74@gmail.com',
            phone: '+91-7409636807',
            address: 'Gurugram, Haryana 560035'
        }
    },
    links: [
        // { title: 'Portfolio', src: 'https://imvpn22.github.io/' },
        {title: 'Github', src: 'https://github.com/amitykaran'},
        {title: 'LinkedIn', src: 'https://www.linkedin.com/in/amit-yadav1/'},
        {title: 'Twitter', src: 'https://twitter.com/amitykaran74'},
        {title: 'HackerEarth', src: 'https://www.hackerearth.com/@amitykaran74'}
    ],
    education: [
        {
            alma: 'FET, GKV, Haridwar',
            duration: '2014 - 2018',
            std: 'Bachelor of Technology (Computer Science & Engineering)',
            score: '73.00%'
        },
        {
            alma: 'Agra Public School, Agra',
            duration: '2011 - 2013',
            std: 'Class XI - XII (PCM)',
            score: '82.20%'
        },
        {
            alma: 'Jawahar Navodaya Vidyalaya, Firozabad',
            duration: '2009 - 2011',
            std: 'Class IX - X (PCM)',
            score: '9.4 CGPA'
        }
    ],
    skills: [
        {
            graph: 'false',
            category: 'Programming Languages',
            topics: ['C', 'C++', 'JavaScript', 'TypeScript']
        },
        {
            graph: 'false',
            category: 'Databases',
            topics: ['MongoDB', 'PostgreSQL']
        },
        {
            graph: 'false',
            category: 'Frameworks / Libraries',
            topics: ['NodeJS', 'ReactJS', 'ExpressJs', 'Angular', 'Bootstrap']
        },
        {
            graph: 'false',
            category: 'Others',
            topics: ['AWS SQS(Simple Queue Service)', 'Redis']
        }
    ],
    projects: [
        {
            title: 'Personal Doctor (Android App)',
            duration: 'Nov - Dec 2017',
            link: 'https://github.com/amitykaran/android-app',
            desc: `It is a small application have features like <strong>Medicine reminder</strong>
       (remind you to take your medicine), find people of <strong>same blood group</strong> as yours and panic
        button for <strong>emergency call</strong>.`
        },
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
            title: `Full-Stack Developer(SDE-I)`,
            desc: `Full-Stack Engineer`,
            date: 'Dec 2018 - Present',
            details: [
                `Contributed to <strong>Corporate Application</strong> with <strong>2-Interns</strong> to give different experience to corporates. They can manage their <strong>events</strong>, have <strong>wallet</strong> to manage <strong>cash points</strong>. To maintain cash flow have feature like <strong>Won cash points</strong>, add <strong>coupons</strong> to cart to <strong>buy</strong> them, <strong>expire cash</strong>, etc. whole project developed using <strong>MERN Stack</strong>, <strong>Redux</strong>, <strong>CSS</strong> and <strong>AWS SQS</strong> to help background processing.`,
                `Developed <strong>Partner Application</strong> to make their work <strong>effortless</strong>, have feature like <strong>On-boarding</strong>,  <strong>manage events</strong>, <strong>mail and Sms </strong>to customer, track <strong>events status</strong>, <strong>past bookings</strong> and <strong>progress reports</strong>. Developed using <strong>MERN Stack</strong>, <strong>Redux</strong>, <strong>CSS</strong>, <strong>Bootstrap 4</strong>, <strong>React-Bootstrap</strong> and <strong>AWS SQS</strong> for Sms, Email and other background processes.`,
                `Contributed in <strong>Redesigning complete website(Mobile and Desktop)</strong> by translating the design mockups into reusable UI components of <strong>React</strong> with <strong>Redux</strong>, <strong>CSS</strong> and <strong>Bootstrap 3</strong> and adding actions to those also integrate backend using REST-APIs.`,
                `Created a fully <strong>Dynamic Selective Form</strong>, using different small reusable <strong>React</strong> components, to make user experience effortless to connect with us. Integrate with <strong>Server</strong> using APIs to store data in <strong>MongoDB</strong> also use <strong>AWS SQS</strong> to perform further operations on data.`,
                `Created <strong>Bootstrap 4 based custom framework</strong> to create <strong>design elements</strong> and <strong>convert SVG to CSS classes</strong> easily.`,

                `Contributed to create <strong>Dynamic Template website Generator</strong> to create single page website easily, In which templates are written in <strong>DustJs</strong> connect with <strong>NodeJs</strong>.`,
                `Developed <strong>User Tracking System</strong> to track user behaviour, So that we can give better experience to <strong>them</strong>.`
            ]
        },
        {
            organization: 'NIC (National Informatics Centre)',
            title: `Project Engineer`,
            desc: `Project Engineer`,
            date: 'July 2018 - Nov 2018',
            details: [
                `Contributed in a <strong>Gov. Project</strong> by developing different types of <strong>dynamic forms</strong>
 with specific validations in <strong>Angular 4</strong>, <strong>Angular-Material</strong> and adding actions to those by 
        creating services to integrate backend using <strong>REST-APIs</strong>.`,
                `Developing back-end APIs in <strong>NodeJs - Express</strong> using <strong>PostgresQL</strong> and integrating those with front- end application in <strong>Angular</strong>.`,
            ]
        },
        {
            organization: 'RWX Technologies',
            title: 'Software Developer Intern',
            desc: ``,
            date: 'May 2017 - July 2017',
            details: [
                `Contribute to a project <strong>Smile Detection</strong> using technologies like <strong>Image-Recognition</strong> and <strong>Machine Learning</strong> develop in 
<strong>MATLAB</strong>. Use Machine Learning algorithm like <strong>Random Forest</strong>, <strong>KNN(K-Nearest Neighbour)</strong>, etc.`,
                `Create data set of <strong>2500 Images</strong> and <strong>test</strong> on nearly <strong>300 Images</strong>.`,
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

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
            topics: ['Spring', 'SpringBoot', 'Angular', 'Vaadin','ChartJS','Lombok','Ebean']
        },
        {
            graph: 'false',
            category: 'Env',
            topics: ['Linux','Jenkins','Git','GitHub','ArchLinux','Debian','SQL', 'IntelliJ']
        },
        {
            graph: 'false',
            category: 'Autres',
            topics: ['Admin/Install PC/serveur', 'Bash scripting', 'Admin DNS/nom de domaine']
        }
    ],
//     projects: [
//        //  {
//        //      title: 'Personal Doctor (Android App)',
//        //      duration: 'Nov - Dec 2017',
//        //      link: 'https://github.com/amitykaran/android-app',
//        //      desc: `It is a small application have features like <strong>Medicine reminder</strong>
//        // (remind you to take your medicine), find people of <strong>same blood group</strong> as yours and panic
//        //  button for <strong>emergency call</strong>.`
//        //  },
//         {
//             title: 'Down Syndrome Detection, (Using Machine Learning)',
//             duration: 'Mar - April 2018',
//             link: '',
//             desc: `We can recognize a person suffering from <strong>Down Syndrome</strong> disorder by facial photograph.
//        Developed in <strong>MATLAB</strong> using technologies like <strong>Image Recognition</strong>, <strong>Machine Learning</strong> and We use the different classifiers like SVM, Random Forest and KNN to train the machine.`
//         },
//         {
//             title: `Front-End Project`,
//             duration: 'Jan - Mar 2018',
//             link: 'https://codepen.io/techcoderamit/full/wyBVdO',
//             desc: `In the process of completion of <strong>front-end certification</strong> on <strong>Free Code Camp</strong>, I developed many small projects like <strong>Tic-tac-toe game</strong>, <strong>Sudoku solver</strong>, <strong>Weather finder App</strong>, <strong>JavaScript Calculator</strong>, <strong>Pomodoro Clock</strong>, <strong>Simon Game</strong>, etc.. 
// `
//         }
//     ],
    experiences: [
        {
            organization: 'ADMS',
            roles: [
                {
                    title: `Lead Developer`,
                    desc: ``,
                    date: 'Depuis Dec 2017',
                    details: [
                        `Architecte, développement & maintenance du logiciel CAMO/MRO (suivi/maintenance des aéronefs)`,
                        `Administration/installation des serveurs physiques & dédiés`,
                        `Mise en production`,
                        `Montée en compétence des collaborateurs`,
                        `<strong>Env. Tech.</strong>`,
                        `&nbspJava 11, Vaadin, Spring Security/Web/Boot, Ebean, Postgres, Debian, Angular, CSS3, Web components, IntelliJ`,
                    ]
                },
                {
                    title: `Ingénieur développeur Java - C++`,
                    desc: ``,
                    date: 'Mars 2008 - Dec 2017',
                    details: [
                        `Étude, développement, maintenance des logiciels de vacations, paie et du module de gestion des droits`,
                            `Installation & mise à jour des serveurs MS SQL ,Apache tomcat et JRE des clients (SDIS)`,
                        `Support technique et fonctionnel`,
                       `<strong>Env. Tech.</strong>`,
                        `&nbspJava, C++, Spring, Hibernate, Resteasy, MS SQL, MySQL, Tomcat, LDAP, Json, Eclipse, Borland C++ 6`,
                    ]
                }
            ],
        },
    ],
};

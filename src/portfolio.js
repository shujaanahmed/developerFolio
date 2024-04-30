/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shujaan Ahmed",
  title: "Hi all, I'm Shujaan",
  subTitle: emoji(
    "I am software engineer with several years of experience working on web and desktop applications. Currently, I work as a Software Engineer at CDC - Central Depository Company of Pakistan"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/shujaanahmed",
  linkedin: "https://www.linkedin.com/in/shujaan-ahmed/",
  gmail: "shujaan.ahmed@live.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Passionate about learning new technologies and applying them in industry with focus on application developmen and design for the betterment of the society.",
  skills: [
    emoji(
      "☁ Develop highly interactive and currently used Banking portals for Investment companies."
    ),
    emoji("✨ Possess strong command over Java Database Connectivity (JDBC) and Enterprise JavaBeans (EJB)"),
    emoji(
      "🎯 Proficient in Databases including but not limited to PL/SQL, MS SQL Server."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Hamdard University",
      logo: require("./assets/images/hamdard.jpg"),
      subHeader: "Master of Science in Computer Science",
      duration: "2017-2019"
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "FAST National University",
      logo: require("./assets/images/fast.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "2008-2012",
      desc: "Took courses about Software Engineering, Web Security, Operating Systems, ",
      descBullets: ["Part of WebMasters at FAST University"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Deputy Manager",
      company: "CDC",
      companylogo: require("./assets/images/cdc.jpg"),
      date: "Jul 2022 - Present",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
         "Diagnose and resolve software issues efficiently,conducted ffectivecode reviews, and estimate project work accurately while communicating risks and issues.",
        "Collaborate effectively with development teams, QA, business analysts, architects, stakeholders, and contribute to defining technical strategy."
      ]
    },
    {
      role: "Assistant Manager",
      company: "CDC",
      companylogo: require("./assets/images/cdc.jpg"),
      date: "July 2017 - June 2022",
      desc: "Maintained exceptionally high standards of design and code quality at all times including adherence to performance standards. Consistently delivered project tasks on time and with desired quality standards."
    },
    {
      role: "Senior Software Engineer ",
      company: "CDC",
      companylogo: require("./assets/images/cdc.jpg"),
      date: "Jul 2015 - Jun 2017",
      desc: "Documented and translated business requirements into functional and technical specifications. Wrote and performed unit tests, integration tests. Reviewed and debugged code."
    },
    {
      role: "Software Engineer",
      company: "CDC",
      companylogo: require("./assets/images/cdc.jpg"),
      date: "Sep 2013 - Jun 2015",
      desc: "Developed and maintained high-performance, secure software applications using proven frameworks."
    },
    {
      role: "Software Engineer",
      company: "Doozie Labs",
      companylogo: require("./assets/images/dlabz.png"),
      date: "Jul 2013 - Sep 2013",
      desc: "Android development internship, also did Java Programming."
    },
    {
      role: "Junior Software Developer",
      company: "JS Global Capital Ltd.",
      companylogo: require("./assets/images/js.png"),
      date: "Jun 2009 - Jul 2009",
      desc: "Interned with JS Global Capital Limited in the Information Technology Department"
    },
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME PROJECTS I CREATED FOR COMPANIES",
  projects: [
    {
      image: require("./assets/images/cdc.jpg"),
      projectName: "Fund Management System Portal",
      projectDesc: "Specifically designed for Mutual Funds Industry, FMS is a comprehensive suite of integrated modules that ease transactions for Fund Managers",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },{
      image: require("./assets/images/cdc.jpg"),
      projectName: "Digital AMC Web Services",
      projectDesc: "Specifically designed for Mutual Funds Industry, FMS is a comprehensive suite of integrated modules that ease transactions for Fund Managers"
    },
    {
      image: require("./assets/images/cdc.jpg"),
      projectName: "EasyPaisa Mini App Web Services",
      projectDesc: "Specifically designed for Mutual Funds Industry, FMS is a comprehensive suite of integrated modules that ease transactions for Fund Managers"
    },
    {
      image: require("./assets/images/cdc.jpg"),
      projectName: "1Link Integration",
      projectDesc: "Specifically designed for Mutual Funds Industry, FMS is a comprehensive suite of integrated modules that ease transactions for Fund Managers"
    },
    {
      image: require("./assets/images/cdc.jpg"),
      projectName: " NADRA Valyses Integration",
      projectDesc: "Specifically designed for Mutual Funds Industry, FMS is a comprehensive suite of integrated modules that ease transactions for Fund Managers"
    },
    {
      image: require("./assets/images/cdc.jpg"),
      projectName: "Multimaster replication (alternative of oracle goldengate)",
      projectDesc: "Specifically designed for Mutual Funds Industry, FMS is a comprehensive suite of integrated modules that ease transactions for Fund Managers"
    },
   {
      image: require("./assets/images/cdc.jpg"),
      projectName: "EMLAAK Web Services",
      projectDesc: "Specifically designed for Mutual Funds Industry, FMS is a comprehensive suite of integrated modules that ease transactions for Fund Managers"
    },
    {
      image: require("./assets/images/cdc.jpg"),
      projectName: "KuickPay Integration",
      projectDesc: "Specifically designed for Mutual Funds Industry, FMS is a comprehensive suite of integrated modules that ease transactions for Fund Managers"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Certificate of Achievement",
      subtitle:
        "Trustee &Custodial Business Training Program”",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-0000000000",
  email_address: "shujaan.ahmed@live.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

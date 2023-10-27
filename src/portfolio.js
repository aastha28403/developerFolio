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
  username: "Saad Pasta",
  title: "Hi all, I'm Saad",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "saadpasta70@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
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
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
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
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: " OFC Turnkey Projects",
      logo: require("/"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "We offer end – to end telecom infrastructure services in transmission backhaul as OFC which includes the entire lifecycle of OFC network development, including network design, engineering, procurement, installation, testing, commissioning, and ongoing maintenance. DSDF Consultancy Services OFC turnkey projects are designed to meet the specific needs of our clients, and our team of experts is dedicated to delivering high-quality, reliable solutions. Our turnkey projects are tailored to different sectors, including telecommunications, power, oil and gas, and transportation, among others. We leverage our expertise in advanced technological projects such as:",
      descBullets: [
        "Optical Fiber Cable Installation & commissioning",
        "Optical Fiber planning and design",
        "Optical Fiber Infrastructure Maintenance.",
        "Optical Fiber Link characterization",
        "Optical network characterization like CD/PMD, Attenuation profile, Optical return loss etc."
      ]
    },
    {
      schoolName: " LT/HT",
      logo: require("/"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "DSDF Consultancy Services possesses specialized knowledge, extensive experience, and advanced techniques that are essential for the installation of high voltage power cables. We manage the entire installation process, from route preparation, pre-lay dredging, trenching, and cable laying, to the protection of crossing and the construction of landfalls. With a focus on delivering high-quality services and products, we are committed to ensuring that our clients receive both Quality-of-Service and Quality-of-Delivery. Our team of experts works closely with clients to understand their unique needs and requirements, and we provide tailored solutions to meet their specific demands. DSDF Consultancy Services is dedicated to providing reliable, safe, and efficient high voltage power cable installations, and we strive to deliver superior quality services to our clients."
      // descBullets: [""]
    },
    {
      schoolName: " OPGW",
      logo: require("/"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "DSDF Consultancy Services is a leading provider of OPGW (Optical Ground Wire) services, delivering high-quality solutions that meet the communication needs of its customers. OPGW is a vital component of power transmission systems, providing both overhead ground wire protection and communication capabilities. DSDF Consultancy Services ’s OPGW services are designed to meet the specific requirements of its customers, ensuring reliable communication systems that can operate in harsh environmental conditions. With a strong focus on innovation and technological excellence, DSDF’s OPGW services offer customers the latest in optical fiber technology, enabling them to stay connected and stay ahead in today’s rapidly evolving digital landscape."
      // descBullets: [""]
    },
    {
      schoolName: " LAN/ WAN/SWAN",
      logo: require("/"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "DSDF Consultancy Services is a leading expert in designing the most effective network layout and connection media for wireless, LAN/WAN/SWAN environments, and optical fibre needs. Our experienced team works to ensure seamless data communication throughout your enterprise, designing and defining the location of Wi-Fi access points, ensuring network security, and implementing broadcast encryption. Our experts also take care to identify and address potential wireless blind-spots and interference sources during the network design process. At DSDF, we prioritize delivering high-quality services that fit our clients’ specific needs, while optimizing both time and cost. With our well-trained technical staff, we provide efficient solutions for all your networking requirements."
      // descBullets: [""]
    },
    {
      schoolName: " IBS/ Broadband",
      logo: require("/"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "At DSDF, we provide a range of design services to help you select the optimal technology for your system and produce a detailed broadband network build-out plan. Our experts evaluate best-of-breed technology from multiple vendors to ensure that your business requirements are met. Some of our design services include technology evaluation and selection, lab testing, and modeling. We also offer complete network design for fiber, electronics, and wireless technologies, as well as fiber characterization. In addition, we provide operations support system (OSS) integration and testing, to ensure that the network is fully operational and delivering high-quality services"
      // descBullets: [""]
    },
    {
      schoolName: " FTTH",
      logo: require("/"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "DSDF Consultancy Services provides Fiber-to-the-Home (FTTH) services to customers looking for reliable and high-speed internet connectivity. Our FTTH services deliver fiber-optic cables directly to the user’s premises, providing a seamless and fast internet experience. We provide end-to-end FTTH solutions, including design, engineering, installation, and maintenance services. We offer a range of services, including detailed planning, data build/attribute fill and checks, outside plant design, in-building design, as-built OSP design, and OSP network maintenance. Our world-class Network Planning & Design team works to deliver optimized designs that lead to faster rollouts, ensuring that our clients stay ahead in the industry. We understand that efficient OSP design, which provides accurate and up-to-date access to critical network information, is fundamental to success. Our team works closely with clients to understand their unique needs and requirements, and we provide tailored solutions to meet their specific demands. We are committed to providing reliable, efficient, and high-quality services, and we strive to deliver superior results to our clients. With our state-of-the-art infrastructure and highly experienced team of professionals, we are able to provide optimized designs that are essential for the success of any network."
      // descBullets: [""]
    },
    {
      schoolName: " Video Conferencing",
      logo: require("/"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "DSDF Consultancy Services is dedicated to facilitating collaboration among people across the globe, enabling them to connect seamlessly from anywhere. Our advanced video conferencing solution is designed to capture every subtle detail and nuance of conversation, ensuring that participants feel like they are in the same room. Our comprehensive video-conference installation and set-up services are tailored to meet the specific needs of our customers, whether it’s setting up equipment at a single job site or managing multiple locations nationwide. With a focus on delivering top-notch customer service, we provide a single point of contact for coordination and support, making the video-conferencing experience as smooth and seamless as possible."
      // descBullets: [""]
    },
    {
      schoolName: " STRUCTURED CABLING",
      logo: require("/"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "DSDF Consultancy Services is a renowned provider of top-quality structured cabling solutions, which facilitate the efficient and well-organized distribution of voice, data, and video signals within a building or campus. Our structured cabling solutions are widely recognized for their superior quality and efficiency. Our range of structured cabling solutions includes twisted-pair copper cabling, as well as multimode and single-mode fiber optics, all built to meet or exceed published standards, guaranteeing reliable performance and compatibility with various applications. With DSDF’s structured cabling, you can be confident that your communication infrastructure will be highly efficient, scalable, and cost-effective. In today’s age of advanced technologies, fast performance is critical, and DSDF Consultancy Services offers a comprehensive range of cable assemblies, including coaxial, fiber, and hybrid options, along with the associated hardware, to create a complete telecom infrastructure. Our cables are designed to transmit multiple data simultaneously and include Shielded Cables, Twisted Pair Cables, Coaxial Cables, Fiber Optic Cables, and Ribbon Cables. We also provide a complete range of fiber cable assemblies, including fiber distribution assemblies, patch cords, pigtails, MPO cable assemblies, drop cable assemblies, and more."
      // descBullets: [""]
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
  description:
    "We have successfully provided underground fiber infrastructure to companies like:",
  descBullets: ["ACT", "Sify Technologies", "Excitel", "Railtel", "Spiderlink"],
  experience: [
    {
      role: "Software Engineer",
      company: "ACT Fibernet",
      companylogo: require("./assets//images/act-fibernet-vector-logo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Excitel",
      companylogo: require("./assets/images/excitel.jpeg"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Railtel",
      companylogo: require("./assets/images/railtel.jpg"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Sify Technologies",
      companylogo: require("./assets/images/sify.jpg"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Spider Link",
      companylogo: require("./assets/images/spiderlink.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Clients",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/act-fibernet-vector-logo.png"),
      projectName: "ACT"
      // projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"net,
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
    {
      image: require("./assets/images/excitel.jpeg"),
      projectName: "Excitel"
      // projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
    },
    {
      image: require("./assets/images/railtel.jpg"),
      projectName: "Railtel"
      // projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
    },
    {
      image: require("./assets/images/sify.jpg"),
      projectName: "Sify Technologies"
      // projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
    },
    {
      image: require("./assets/images/spiderlink.png"),
      projectName: "Spider Link"
      // projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji(" Key To Success🏆 "),
  subtitle:
    "DSDF Consultancy Services Pvt. Ltd. successfully earned trust of clients by dedication and hard work by providing them cost-effective quality services, customer support and best networks which is becoming the key of our success.",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "We deliver results by allying with leading telecom vendors and ISP, employing trained, licensed, and multi-skilled experts",
      image: require("./assets/images/1.png"),
      imageAlt: "logo",
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
      title: "Google Code-In Finalist",
      subtitle:
        "Our seasoned team of technicians and engineers will help you drastically improve your IT capabilities.",
      image: require("./assets/images/2.png"),
      imageAlt: "logo",
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
      title: "Google Code-In Finalist",
      subtitle:
        "With one primary vendor, we manage your IT scope through an exhaustive tracking system.",
      image: require("./assets/images/3.jpg"),
      imageAlt: "logo",
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
        "We’re an exension of your team and we support you 24/7/365 through a dedicated expert.",
      image: require("./assets/images/4.jpg"),
      imageAlt: " Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle:
        "We leverage our buyingpower, new technologies, vendors and knowledge to save your money.",
      image: require("./assets/images/5.png"),
      imageAlt: " Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Product Portfolio",
  description: "Fiber Optic Cable Assemblies",
  subtitle:
    "At DSDF, we are proud to offer a wide range of fiber optic cable assemblies to meet the diverse needs of our customers. Our fiber optic cable assemblies are designed to provide high-speed and reliable transmission of data, voice, and video signals over long distances, making them an ideal choice for a variety of applications, including telecommunications, data centers, broadcasting, and more. Our fiber optic cable assemblies are available in simplex, duplex, and multi-fiber configurations, and are terminated with popular connectors such as LC, SC, ST, and MTP. We also offer a range of options for cable types, including single-mode and multi-mode cables, so you can find the best solution for your specific needs. All of our fiber optic cable assemblies are built to the highest standards of quality and performance, using only the best materials and manufacturing processes. We are committed to providing our customers with solutions that are reliable, efficient, and cost-effective, backed by our exceptional customer service and support. So whether you need a standard or custom fiber optic cable assembly, you can trust us to deliver the best solution for your needs.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      // url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Fiber Optic Cable Assemblies"
      // description:
      //   "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      // url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Fiber Optic Cables"
      // description:
      //   "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    },
    {
      // url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Fiber Optic Jointing Kit"
      // description:
      //   "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      // url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Cabinets, Panels & Enclosures"
      // description:
      //   "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      // url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Coaxial Cables"
      // description:
      //   "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      // url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Copper Cable Assemblies"
      // description:
      //   "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      // url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Electrical Cables"
      // description:
      //   "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      // url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Fiber Optic Splitters/Couplers"
      // description:
      //   "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      // url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Copper Cables"
      // description:
      //   "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      // url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Electrical Cable Accessories"
      // description:
      //   "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      // url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Fiber Optic Media Converters"
      // description:
      //   "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      // url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Coaxial Cable Assemblies"
      // description:
      //   "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      // url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Fiber Optic Termination Unit"
      // description:
      //   "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "HAVE A QUESTION? CONTACT US",
  number: "+91-9587777842 , +91-9828136411 ",
  email_address: "dsdfconsultancy@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
  isHireable
};

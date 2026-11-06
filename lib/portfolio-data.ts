export const certifications = [
  {slug: "mos-word", title: "Microsoft Office Specialist: Word Associate (Office 2019)", issuer: "Microsoft / Certiport", date: "March 14, 2024", category: "Microsoft Office Specialist", description: "Microsoft Word 2019 Associate certification.", verifyUrl: "https://www.credly.com/badges/7f0f7c7d-ba25-4548-ad70-f3f68d645f81/public_url", pdf: "/certificates/cert_word2019.pdf"},
  {slug: "mos-powerpoint", title: "Microsoft Office Specialist: PowerPoint Associate (Office 2019)", issuer: "Microsoft / Certiport", date: "May 30, 2024", category: "Microsoft Office Specialist", description: "Microsoft PowerPoint 2019 Associate certification.", verifyUrl: "https://www.credly.com/badges/c6bb600b-a7fd-4df1-b2a0-c8ab6198f571/public_url", pdf: "/certificates/cert_ppt2019.pdf"},
  {slug: "its-html-css", title: "IT Specialist: HTML and CSS", issuer: "Certiport / Pearson", date: "February 4, 2026", category: "Information Technology Specialist", description: "Information Technology Specialist certification in HTML and CSS.", verifyUrl: "https://www.credly.com/badges/74140c6b-f40d-47a3-bd02-b9fb2e861aea/public_url", pdf: "/certificates/cert_html-css.pdf"},
  {slug: "its-javascript", title: "IT Specialist: JavaScript", issuer: "Certiport / Pearson", date: "June 3, 2026", category: "Information Technology Specialist", description: "Information Technology Specialist certification in JavaScript.", verifyUrl: "https://www.credly.com/badges/8c33397a-9757-4037-8c89-76804d93d96f/public_url", pdf: "/certificates/cert_javascript.pdf"},
  {slug: "cisco-ethical-hacker", title: "Ethical Hacker", issuer: "Cisco Networking Academy", date: "September 15, 2025", category: "Cisco Verified Badge", description: "Verified Cisco Networking Academy course badge for Ethical Hacker.", verifyUrl: "https://www.credly.com/badges/480aff99-8509-49da-85d9-491c8da18edc/public_url", pdf: null},
  {slug: "cisco-cybersecurity", title: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", date: "September 15, 2025", category: "Cisco Verified Badge", description: "Verified Cisco Networking Academy course badge for Introduction to Cybersecurity.", verifyUrl: "https://www.credly.com/badges/d3b44146-c1ba-4060-9648-62c3d3c609b3/public_url", pdf: null},
  {slug: "cisco-iot", title: "Introduction to IoT", issuer: "Cisco Networking Academy", date: "February 15, 2026", category: "Cisco Verified Badge", description: "Verified Cisco Networking Academy course badge for Introduction to IoT.", verifyUrl: "https://www.credly.com/badges/21685cf6-bed7-4020-9a0a-adfbf15a3f0a/public_url", pdf: null},
  {slug: "cisco-networking", title: "Networking Basics", issuer: "Cisco Networking Academy", date: "May 29, 2025", category: "Cisco Verified Badge", description: "Verified Cisco Networking Academy course badge for Networking Basics.", verifyUrl: "https://www.credly.com/badges/8d68c9ab-19fa-4532-b5eb-092c62c0218c/public_url", pdf: null},
];
export const additionalCredentials = [{slug:'testdome-sql',title:'SQL',issuer:'TestDome',date:'May 6, 2025',category:'Skills Assessment',description:'SQL public skills assessment · Ranked in the top 25%' ,verifyUrl:'https://www.testdome.com/certificates/2b67eefcae764bf988b84a111480ee8c',pdf:null}];

export const projects = [
  {
    slug: "padalock",
    title: "PadaLock",
    type: "Capstone Project",
    role: "Team Leader · Hardware",
    description:
      "An IoT-based intelligent residential parcel locker designed for secure deliveries, retrievals, and returns. The system integrates multi-step authentication, parcel detection, transaction monitoring, and event-triggered surveillance.",
    technologies: [
      "ESP32-CAM",
      "Next.js",
      "MongoDB",
      "Flutter",
      "Node.js",
      "PlatformIO",
      "Cloudinary",
      "Vercel",
    ],
  },
  {
    slug: "req-it",
    title: "REQ-IT",
    type: "Application Development · IoT",
    role: "Team Leader · Frontend · Backend · Documentation",
    description:
      "An IoT-enabled document request and tracking system designed to streamline registrar services. It supports online document requests, payment verification, real-time status tracking, and RFID-based document claiming.",
    technologies: [
      "Web Development",
      "Backend Development",
      "Database Management",
      "RFID",
      "IoT",
      "System Integration",
    ],
  },
  {
    slug: "iot-parcel-locker",
    title: "IoT Parcel Collection System",
    type: "IoT Course Project",
    role: "Team Leader · Hardware",
    description:
      "A prototype smart parcel locker combining electronic access control, tracking number verification, parcel detection, and a web dashboard for monitoring unattended residential deliveries.",
    technologies: [
      "ESP32-CAM",
      "PlatformIO",
      "Next.js",
      "MongoDB",
      "Keypad",
      "Solenoid",
      "Relay",
      "Ultrasonic Sensor",
    ],
  },
  {
    slug: "mindblossom",
    title: "MindBlossom",
    type: "Mobile Development",
    role: "Backend Development",
    description:
      "An Android mental health awareness application developed with a project partner.",
    technologies: ["Java", "XML", "Android Studio"],
  },
  {
    slug: "sdcanteen",
    title: "SDCanteen",
    type: "Mobile Development",
    role: "Backend · Database",
    description:
      "An Android canteen management application using Java and Firebase.",
    technologies: [
      "Java",
      "XML",
      "Android Studio",
      "Firebase",
    ],
  },
];


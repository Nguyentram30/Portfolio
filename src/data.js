// ====== HERO DATA ======
export const heroData = {
  name: "Nguyễn Ngọc Trâm",
  avatar: "/avatar.png",
  title: "Cloud & DevOps Enthusiast",
  bio: "Tôi là sinh viên năm 3 chuyên ngành Công nghệ Thông tin với định hướng theo đuổi Cloud Computing và DevOps. Đã có kinh nghiệm thực hành Docker, Jenkins và viết script tự động hóa trong các dự án học tập cá nhân. Mong muốn tham gia môi trường thực tập chuyên nghiệp để phát triển kỹ năng CI/CD, containerization và hỗ trợ tối ưu quy trình phát triển phần mềm. Luôn chủ động học hỏi và sẵn sàng thích nghi với công nghệ mới.",
  ctaText: "Xem dự án",
  ctaLink: "#projects"
};

// ====== EDUCATION DATA ======
export const educationData = [
  {
    id: 1,
    school: "Thu Dau Mot University",
    major: "Information Technology",
    period: "2023 - present",
    }
];

// ====== SKILLS DATA ======
export const skillsData = {
  technical: [
    {
      id: 1,
      category: "Lập trình",
      items: ["C++", "JavaScript", "Python", "HTML/CSS", "ReactJS"]
    },
    {
      id: 2,
      category: "Cơ sở dữ liệu",
      items: ["SQL Server", "MongoDB"]
    },
    {
      id: 3,
      category: "Hệ điều hành",
      items: ["Basic Linux (file management, permissions, services, package management, terminal)"]
    },
    {
      id: 4,
      category: "CI/CD",
      items: ["Jenkins"]
    }
  ],
  soft: [
    {
      id: 1,
      category: "Design tools",
      items: ["Canva", "Adobe Photoshop", "Adobe Illustrator", "After Effects"]
    },
    {
      id: 2,
      category: "Soft Skills",
      items: ["Good communication and teamwork skills", "Proactive and responsible at work"]
    }
  ]
};

// ====== PROJECTS DATA ======
export const projectsData = [
  {
    id: 1,
    title: "Real-Time Web Application Monitoring System | Dec 2025 – Present",
    description: "Researched and developed a real-time monitoring system for web applications using Prometheus and Grafana. The system supports performance analysis, incident alerting, and improves overall system reliability and stability.",
    link: "https://github.com/Nguyentram30/Real-Time-Web-Application-Monitoring-System.git"
  },
  {
    id: 2,
    title: "Real-Time CI/CD Pipeline Deployment | Jan 2026",
    description: "Designed and implemented an automated CI/CD pipeline for a web application to support real-time build, test, and deployment processes. Integrated Docker for containerization and Jenkins for workflow automation, reducing release time and improving system stability.",
    link: "https://github.com/Nguyentram30/Real-Time-CI-CD-Pipeline-Deployment.git"
  }
];

// ====== ADDITIONAL INFO DATA ======
export const additionalInfoData = [
  {
    id: 1,
    title: "Awards:",
    content: "Outstanding Idea Award – Exchange Program between Thu Dau Mot University and Hanam University (2025)"
  },
  {
    id: 2,
    title: "Extracurricular Activities:",
    content: [
    "Executive Committee Member – Youth Union of Digital Technology Institute",
    " Vice President – Student Association of Digital Technology Institute",
  ]
    
  }
];

// ====== FOOTER DATA ======
export const footerData = {
  email: "nngtram3011@gmail.com",
  copyYear: new Date().getFullYear()
};

// ====== ABOUT DATA ======
export const aboutData = {
  id: 'about',
  title: 'About',
  paragraphs: [
    "I am a third-year Information Technology student with a strong interest in Cloud Computing and DevOps. I have hands-on experience with Docker, Jenkins, and writing basic automation scripts through academic and personal projects. I am seeking an internship opportunity in a professional environment to gain practical experience in system operations, application deployment support, and improving software development processes. I am proactive, eager to learn, and ready to adapt to new technologies.",
  ]
};

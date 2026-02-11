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
    school: "Trường Đại học Thủ Dầu Một",
    major: "Công nghệ Thông tin",
    period: "2023 - nay",
    description: "Định hướng theo Cloud Computing & DevOps."
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
      items: ["Linux cơ bản (quản lý file, phân quyền, service, package, thao tác terminal)"]
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
      category: "Thiết kế",
      items: ["Canva", "Adobe Photoshop", "Adobe Illustrator", "After Effects"]
    },
    {
      id: 2,
      category: "Khác",
      items: ["Giao tiếp và làm việc nhóm tốt", "Chủ động, có trách nhiệm trong công việc"]
    }
  ]
};

// ====== PROJECTS DATA ======
export const projectsData = [
  {
    id: 1,
    title: "Nghiên cứu và Xây dựng hệ thống giám sát hiệu năng ứng dụng web thời gian thực sử dụng Prometheus và Grafana",
    description: "Phát triển hệ thống monitoring real-time cho web app bằng Prometheus và Grafana, hỗ trợ phân tích hiệu năng, cảnh báo sự cố và cải thiện tính ổn định hệ thống.",
    link: "#"
  },
  {
    id: 2,
    title: "Dự án triển khai hệ thống Pipeline CI/CD thời gian thực",
    description: "Thiết kế và triển khai hệ thống CI/CD tự động cho ứng dụng web, hỗ trợ build, test và deploy theo thời gian thực. Tích hợp Docker để container hóa ứng dụng và Jenkins để tự động hóa quy trình, giúp rút ngắn thời gian phát hành và tăng độ ổn định hệ thống.",
    link: "#"
  }
];

// ====== ADDITIONAL INFO DATA ======
export const additionalInfoData = [
  {
    id: 1,
    title: "Giải thưởng hoạt động",
    content: "Giải Ý tưởng xuất sắc trong chương trình giao lưu giữa Đại học Thủ Dầu Một và Đại học Hanam 2025"
  },
  {
    id: 2,
    title: "Hoạt động Đoàn Thanh niên / Hội sinh viên",
    content: "Hiện tại đang giữ chức vụ: Ủy viên BCH Đoàn Viện Công nghệ số, Liên chi Hội Phó LCH Viện Công nghệ Số"
  }
];

// ====== FOOTER DATA ======
export const footerData = {
  email: "email@example.com",
  copyYear: new Date().getFullYear()
};

export const navLinks = [
    {
      id: 1,
      name: 'Trang chủ',
      href: '#home',
    },
    {
      id: 2,
      name: 'Giới thiệu',
      href: '#about',
    },
    {
      id: 3,
      name: 'Kinh nghiệm',
      href: '#work',
    },
    {
      id: 4,
      name: 'Liên hệ',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'Hospital Manegements',
      desc: 'Trang web hỗ trợ quản lý việc khám, chữa bệnh tại một cơ sở bệnh viện, người dùng có thể đặt lịch khám bệnh, trao đổi với nhân viên,...',
      subdesc:
        'Trang web được xây dựng bởi framework Laravel + Vue.js.',
      href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      title: 'Movie Show',
      desc: 'QuickShow là nền tảng đặt lịch xem phim trực tuyến với giao diện hiện đại. Người dùng có thể xem thông tin phim, chọn rạp và đặt vé nhanh chóng, tiện lợi.',
      subdesc:
        'Với QuickShow, người dùng có thể trải nghiệm nền tảng đặt lịch xem phim hiện đại, nơi nhiều người dùng có thể tương tác mượt mà theo thời gian thực. Ứng dụng được xây dựng bằng React, Tailwind CSS và Node.js.',
      href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      title: 'Chat App',
      desc: 'Trang web là nơi để các người dùng có thể gửi tin nhắn, hình ảnh cho nhau',
      subdesc:
        'Được xây dựng bởi ReactJS với framework tailwindCSS, trang web có thể thực hiện trao đổi thông tin theo thời gian thực',
      href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    }
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'HTML + CSS',
      pos: 'Student',
      duration: '2021 - 2022',
      title: "Moi hoc HTML CSS",
      icon: '/assets/react.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'PHP',
      pos: 'Student',
      duration: '2020 - 2022',
      title: "PHP là ngôn ngữ thuận tiện, dễ dàng tiếp cận , có framework giúp cho việc cài đặt dễ dàng hơn",
      icon: '/assets/figma.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'React',
      pos: 'Student',
      duration: '2019 - 2020',
      title: "React helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
      icon: '/assets/react.svg',
      animation: 'salute',
    },
  ];
const data = {
  'work-experience': {
    robolink: {
      image: require('./res/robolink.png'),
      title: 'Robolink',
      time:
        'Teaching STEM to kids of all ages. Holds year around robotics camps & produces educational STEM materials --- June 2019 - August 2019 (3 Months)',
      notes: [
        'Instructed classes pertaining to STEM education utilizing Python & C++',
        'Developed documentation for STEM learning materials using Python, HTML, and Markdown',
      ],
      links: ['Company Website', 'https://robolink.com'],
    },
    programination: {
      image: require('./res/programination.png'),
      title: 'Programination',
      time:
        'Creating high quality web and mobile applications of all kinds for clients --- June 2020 - August 2020 (3 Months)',
      notes: [
        "Utilized React Native to assist in the development of mobile apps for the company's clients",
        "Utilized Postgres, GraphQL, ExpressJS, and React Native to develop a full-stack MVP for one of the company's products in development",
        'Gained experience developing apps with React Native & Flutter',
      ],
      links: ['Company Website', 'https://programination.com'],
    },
  },
  projects: {
    'fast-engine': {
      image: require('./res/projects/fast-engine.png'),
      title: 'Fast Engine',
      time: 'A simple game engine written in C++ using SDL',
      notes: [
        'Created with C++/SDL',
        "Created for my personal, and others' use to create games easily in C++",
      ],
      links: [
        'GitHub Page',
        'https://github.com/matthew-plusprogramming/FastEngine',
      ],
    },
    simpletodos: {
      image: require('./res/projects/simpletodos.png'),
      title: 'Simple Todos',
      time: 'Simple ToDo application made with MEAN stack & React (MERN stack)',
      notes: ['Created with MERN Stack', 'Created for my personal use'],
      links: [
        'GitHub Page',
        'https://github.com/matthew-plusprogramming/SimpleTodos',
      ],
    },
  },
};

export default data;
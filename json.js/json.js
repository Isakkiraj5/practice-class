const resume = {
    "personal_info": {
      "name": "ISAKKI RAj",
      "address": "11,ponvizhanagar G.N Mills Coimbatore",
      "phone": "8098117300",
      "email": "rajisakki7@gmail.com",
      "github": "https://github.com/Isakkiraj5"
    },
    "summary": "Web developer with one year of experience, seeking new opportunities to contribute and grow in a dynamic and collaborative work environment. Recently completed a comprehensive course in MERN stack, enhancing skills in full-stack web development.",
    "education": [
      {
        "degree": "Bachelor of Science in Computer Technology",
        "college": "Sri Krishna Arts and Science College",
        "graduation_year": 2020
      }
    ],
    "experience": [
      {
        "title": "Web Developer",
        "company": "Asten Labs",
        "location": "Coimbatore",
        "start_date": "February 2023",
        "end_date": "Present",
        "responsibilities": [
          "Contributing to the development of web applications.",
          "Collaborating with team members to design and implement new features.",
          "Ensuring the functionality and optimization of web applications."
        ]
      },
    ],
    "skills": [
      "JavaScript",
      "React",
      "Node.js",
      "HTML",
      "CSS",
      "Git",
      "SQL"
    ],
    "projects": [
      {
        "title": "E-commerce Website",
        "description": "Built a full-stack e-commerce website using React for the front end and Node.js for the backend. Implemented features such as user authentication, product catalog, and shopping cart functionality.",
        "technologies_used": ["React", "Node.js", "Express", "MongoDB"]
      },
      {
        "title": "Task Management App",
        "description": "Developed a task management application using React for the frontend and a RESTful API built with Node.js and Express. Implemented features for adding, updating, and deleting tasks.",
        "technologies_used": ["React", "Node.js", "Express", "RESTful API"]
      }
    ]
  };
  console.log("Using for...in for personal_info:");
  for (const key in resume.personal_info) {
    console.log(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${resume.personal_info[key]}`);
  }
  
  console.log("\nUsing for...of for education:");
  for (const education of resume.education) {
    for (const value of Object.values(education)) {
      console.log(value);
    }
  }
  
  console.log("\nUsing forEach for experience:");
  resume.experience.forEach(job => {
    console.log(`\n${job.title} at ${job.company}`);
    console.log(`Location: ${job.location}`);
    console.log(`Start Date: ${job.start_date} - End Date: ${job.end_date}`);
    console.log("Responsibilities:");
    job.responsibilities.forEach(responsibility => {
      console.log(`- ${responsibility}`);
    });
  });
  
  console.log("\nUsing for...in for skills:");
  for (const index in resume.skills) {
    console.log(resume.skills[index]);
  }
  
  console.log("\nUsing for...of for projects:");
  for (const project of resume.projects) {
    console.log(`\n${project.title}: ${project.description}`);
    console.log(`Technologies Used: ${project.technologies_used.join(", ")}`);
  }
  
//1) For loop:

const resumeData= {
    "Skills": {
      "front_end_technologies": ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
    },
}
    const frontEnd = resumeData.Skills.front_end_technologies;
    for (let x = 0; x < frontEnd.length; x++) {
       console.log(frontEnd[x]);
    } 

//2) For...in :

    const resumeData= {
        "personal_information": {
    "name": "Eswari Janardhanan",
    "email": "eswari.jana@gmail.com"
  },
    }

    for (let x in resumeData.personal_information) {
        console.log(x + ": " + resumeData.personal_information[x]); 
    }

//3) For...of:

const resumeData={
    "education": [
        {
          "degree": "Bachelor of Science in Computer Science"
        }
      ]
};
 
for (let x of resumeData.education) {
    console.log(x.degree); 
}

//4) For...Each:

const resumeData={
    "Skills": {
        "back_end_technologies": ["Node.js", "Python", "Django"],
        "database_management": ["MongoDB", "MySQL"],
        "version_control": ["Git", "GitHub"],
        "soft_skills": ["Problem-solving", "Teamwork", "Communication", "Adaptability"]
      },  
};
resumeData.Skills.back_end_technologies.forEach(function(x) {
    console.log(x); 
});
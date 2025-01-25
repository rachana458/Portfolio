// import React from "react";
// import Chip from '@mui/material/Chip';
// import '../assets/styles/Expertise.scss';

// const labelsFirst = [
//     "React",
//     "TypeScript",
//     "JavaScript",
//     "HTML5",
//     "CSS3",
//     "SASS",
//     "Flask",
//     "Python",
//     "SQL",
//     "PostgreSQL",
//     "Postman"
// ];

// const labelsSecond = [
//     "Git",
//     "GitHub Actions",
//     "Docker",
//     "AWS",
//     "Azure",
//     "Linux",
//     "Snowflake",
//     "Pandas",
//     "Selenium",
// ];

// const labelsThird = [
//     "OpenAI",
//     "Groq",
//     "LangChain",
//     "Qdrant",
//     "Hugging Face",
//     "LlamaIndex",
//     "Streamlit",
// ];

// function Expertise() {
//     return (
//         <div className="container" id="expertise">
//             <div className="skills-container">
//                 <h1>About</h1>
//                 <div className="introduction">
//                     <p>
//                         Hi, I am Rachana Yadav. Currently, I am pursuing M.Tech in National Institute of Technology, Rourkela.
//                         And have previously completed my B.Tech from College of Engineering, Roorkee.
//                         As a Computer Science and Engineering student at NIT Rourkela with a background in B.Tech from the College of Engineering Roorkee, 
//                         I have accumulated valuable experience in software development and machine learning. My technical skills include proficiency 
//                         in C, C++, and Python. I have completed internships focused on movie recommendation systems and face detection technologies, 
//                         where I applied my knowledge to real-world problems.
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Expertise;


import React from "react";
import '../assets/styles/Expertise.scss'; // Ensure this file exists and is updated

function Expertise() {
    return (
        <div className="expertise-section" id="expertise">
            <div className="about-container">
                {/* Left Side: Text */}
                <div className="text-content">
                    <h1>About</h1>
                    <p>
                        Hi, I am Rachana Yadav. Currently, I am pursuing M.Tech at the National Institute of Technology, Rourkela.
                        I have previously completed my B.Tech from the College of Engineering, Roorkee.
                        As a Computer Science and Engineering student at NIT Rourkela with a background in B.Tech from the College of Engineering Roorkee, 
                        I have accumulated valuable experience in software development and machine learning. My technical skills include proficiency 
                        in C, C++, and Python. I have completed internships focused on movie recommendation systems and face detection technologies, 
                        where I applied my knowledge to real-world problems.

                        A part from academic i am highly interested in dancing, cooking and also during my free time i love to scroll reels.
                        
                    </p>
                </div>
                {/* Right Side: Circular Image */}
                <div className="image-container">
                    <img 
                        src="https://media.licdn.com/dms/image/v2/C4D03AQGUvP7-xri6bg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1645024496756?e=1743033600&v=beta&t=7E3M_LrOJZBuhxqhSNwm3cExLVw0XbBlLMpllsdEjZc" 
                        alt="Rachana" 
                        className="profile-picture" 
                    />
                </div>
            </div>
        </div>
    );
}

export default Expertise;


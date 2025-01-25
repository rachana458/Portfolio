// import React from "react";
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import '../assets/styles/Main.scss';

// function Main() {

//   return (
//     <div className="container">
//       <div className="about-section">
//         <div className="image-wrapper">
//           <img src="https://media.licdn.com/dms/image/v2/C4D03AQGUvP7-xri6bg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1645024496756?e=1743033600&v=beta&t=7E3M_LrOJZBuhxqhSNwm3cExLVw0XbBlLMpllsdEjZc" alt="Avatar" />
//         </div>
//         <div className="content">
//           <div className="social_icons">
//             <a href="https://github.com/rachana458" target="_blank" rel="noreferrer"><GitHubIcon/></a>
//             <a href="https://www.linkedin.com/in/rachana-yadav-7875762302r/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
//           </div>
//           <h1>Rachana Yadav</h1>
//           <p>Student</p>

//           <div className="mobile_social_icons">
//             <a href="https://github.com/rachana458" target="_blank" rel="noreferrer"><GitHubIcon/></a>
//             <a href="https://www.linkedin.com/in/rachana-yadav-7875762302r/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Main;


import React, { useEffect, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";

function Main() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(30); // Faster typing speed

  const words = ["And I'm a <span class='highlight'>Student </span>", "And I'm doing <span class='highlight'>M.Tech </span>"];

  useEffect(() => {
    const handleTyping = () => {
      const currentIndex = loop % words.length;
      const fullText = words[currentIndex];

      if (!isDeleting) {
        setText(fullText.substring(0, text.length + 1));
        if (text === fullText) {
          setIsDeleting(true);
          setTypingSpeed(40); // Pause before deleting
        }
      } else {
        setText(fullText.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setLoop(loop + 1);
          setTypingSpeed(40); // Reset speed after deleting
        }
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, loop, typingSpeed, words]);

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src="https://media.licdn.com/dms/image/v2/C4D03AQGUvP7-xri6bg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1645024496756?e=1743033600&v=beta&t=7E3M_LrOJZBuhxqhSNwm3cExLVw0XbBlLMpllsdEjZc"
            alt="Avatar"
          />
        </div>
        <div className="content">
          <h1>Rachana Yadav</h1>
          {/* Typing Effect */}
          <p
            className="typing"
            dangerouslySetInnerHTML={{ __html: text }}
          ></p>

          {/* Social Icons below the typing text */}
          <div className="social_icons">
            <a href="https://github.com/rachana458" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/rachana-yadav-7875762302r/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

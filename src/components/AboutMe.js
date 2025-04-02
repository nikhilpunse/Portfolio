import React from "react";
import myImg from "../asset/my img.png";
const AboutMe = () => {
  return (
    <div className="aboutContent" id="about">
      <div className="title">About Me</div>
      <div>
        <img src={myImg} />
        <p>
          Hi, I’m Nikhil punse, a passionate MERN Stack Developer with a strong
          foundation in MongoDB, Express.js, React. I specialize in
          building scalable, high-performance web applications with a seamless
          user experience. With a deep understanding of front-end and back-end
          development, I enjoy crafting interactive, dynamic, and responsive web
          solutions that bring ideas to life. Whether it’s designing modern UI
          components in React, creating robust RESTful APIs with Node.js &
          Express, or managing databases efficiently with MongoDB. What I Do <br/> ✅
          Front-End Development: Building sleek, interactive, and user-friendly
          interfaces with React.js, Redux, and Tailwind CSS.<br/> ✅ Back-End
          Development: Developing scalable APIs and server-side logic using
          Node.js, Express.js, and MongoDB.<br/> ✅ Full-Stack Applications:
          Integrating front-end and back-end technologies to deliver complete
          web solutions.<br/> ✅ Performance Optimization: Ensuring smooth and
          fast-loading applications by implementing best coding practices.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;

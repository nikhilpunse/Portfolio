import React from "react";
import img1 from "../asset/ecommerce.png";
import img2 from "../asset/tagging tool.png";
import img3 from "../asset/human management system.png";
import img4 from "../asset/website.jpg";

const Projects = () => {
  const data = [
    {
      img: img1,
      title: "E-commerce",
      desc: "An eCommerce website is an online platform that allows businesses to sell products or services to customers over the internet. It typically includes features like product listings, shopping carts, secure payment options, and order management.",
    },
    {
      img: img2,
      title: "Tagging tool",
      desc: "An image tagging tool website allows users to label and categorize images, improving searchability, organization, and automation. It is useful for AI training, digital asset management.",
    },
  ];
  const data2 = [{
    img: img3,
    title: "Human Resource Managment",
    desc: "A Human Resource Management (HRM) website helps businesses manage employee-related tasks such as recruitment, payroll, performance tracking, and compliance. It streamlines HR processes, enhances productivity, and improves workforce management.",
  },
  {
    img: img4,
    title: "Miscellaneous website",
    desc: "I have created Miscellaneous website as per the customer requerement.Figma design replicate to match exact design. Website creation involves designing, developing, and launching a website for personal, business, or professional use. It includes designing layouts, coding, and adding content.",
  },];
  return (
    <div className="projectWrapper" id="project">
      <div className="title">Projects</div>
      <div className="cardWrapper">
        {data.map((item,index) => {
          return (
            <div className="card">
              <img src={item.img} />
              <label className="title">{item.title}</label>
              <p>{item.desc}</p>
            </div>
          )
        })}
      </div>
      <div className="cardWrapper">
        {data2.map((item,index) => {
          return (
            <div className="card">
              <img src={item.img} />
              <label className="title">{item.title}</label>
              <p>{item.desc}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Projects;

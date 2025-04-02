import React from 'react'

const HeroSection = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/files/Nikhil punse resume 2025 (1).pdf"; // File inside public/files/sample.pdf
    link.download = "sample.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className='heroWrapper' id='hero'>
      <div className='heroContent'>
        <div className='title'>Nikhil Punse</div>
        <div className='text'>MERN Stack Developer</div>
        <div className='cv' onClick={handleDownload}>CV</div>
        <button><a href='#about'>About Me</a></button>
        <div className='HeroChar'>N</div>
      </div>
    </section>
  )
}

export default HeroSection
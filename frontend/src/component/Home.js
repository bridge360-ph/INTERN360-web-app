import React from 'react';

export default function Home() {

  const containerHome = {

    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',  // Ensure the container takes at least the full height of the viewport
  

  };
  const containerStyle = {
    backgroundImage: 'url("resources_img/bg.jpg")',  // Replace with the path to your background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',  // Ensure the container takes at least the full height of the viewport
    padding: '50px',  // Adjust padding as needed
  };
  const image2 = {
    backgroundImage: 'url("resources_img/bg2.jpg")',  // Replace with the path to your background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',  // Ensure the container takes at least the full height of the viewport
    padding: '50px',  // Adjust padding as needed
  };
  const image3 = {
    backgroundImage: 'url("resources_img/bg3.jpg")',  // Replace with the path to your background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',  // Ensure the container takes at least the full height of the viewport
    padding: '50px',  // Adjust padding as needed
  };



  return (
    <div style={containerHome}>
      <div style={containerStyle}></div>
      <div style={image2}></div>
      <div style={image3}></div>
  
    </div>



  

  );
}

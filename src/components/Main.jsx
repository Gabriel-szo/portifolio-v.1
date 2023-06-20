import React from "react";
import "./main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="main-title">
        <h1>Sobre</h1>
      </div>
      <div className="sobre">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum numquam
          optio quod laudantium vitae ullam suscipit unde alias quisquam,
          dolores dignissimos, nulla accusamus ab voluptatem eum quidem delectus
          animi explicabo est molestiae consequatur! Perferendis placeat, quos
          doloremque labore magnam eligendi.
        </p>
      </div>
      <div className="main-title">
        <h1>Habilidades</h1>
      </div>
      <div className="habilidades">
        <div className="container-item">HTML</div>
        <div className="container-item">CSS</div>
        <div className="container-item">JS</div>
        <div className="container-item">REACTJS</div>
        <div className="container-item">BOOTSTRAP</div>
        <div className="container-item">FIGMA</div>
        <div className="container-item">PHP</div>
        <div className="container-item">NODE</div>
        <div className="container-item">NODE</div>
      </div>
        <div className="footer">
            <div className="footer-btn">Projetos</div>
            <div className="footer-btn">Contato</div>
        </div>
    </div>
  );
};

export default Main;

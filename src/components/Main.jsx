import React from "react";
import "./main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="main-title">
        <h1>Sobre</h1>
      </div>
      <div className="container-1">
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
      <div className="container-2">
        <div className="container-item"></div>
        <div className="container-item"></div>
        <div className="container-item"></div>
        <div className="container-item"></div>
        <div className="container-item"></div>
        <div className="container-item"></div>
      </div>
        <div className="others">
            <div className="projetos">Projetos</div>
            <div className="contato">Contato</div>
        </div>
    </div>
  );
};

export default Main;

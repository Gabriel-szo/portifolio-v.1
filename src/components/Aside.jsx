import "./aside.css";
import React from "react";

const Aside = () => {
  return (
    <div className="aside">
      <div className="img-box">
        <img src="" alt="foto" />
      </div>
      <div className="group-icons">
        <div className="icon">🥶</div>
        <div className="icon">🥶</div>
        <div className="icon">🥶</div>
      </div>
      <div className="title">
        <p>Desenvolvedor</p>
      </div>
      <div className="box">
        <div className="box-item">
          <div className="icon">🥶</div>
          <div className="item">
            <h4>Telefone</h4>
            <p>(21)6512-0210</p>
          </div>
        </div>
        <div className="box-item">
          <div className="icon">🥶</div>
          <div className="item">
            <h4>E-mail</h4>
            <p>gabrielszoliveira00@gmail.com</p>
          </div>
        </div>
        <div className="box-item">
          <div className="icon">🥶</div>
          <div className="item">
            <h4>Localização</h4>
            <p>Rio de Janeiro, RJ</p>
          </div>
        </div>
      </div>
      <div className="curriculum">
        <p>Download CV</p>
      </div>
    </div>
  );
};

export default Aside;

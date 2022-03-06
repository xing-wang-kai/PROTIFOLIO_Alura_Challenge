import React from "react";
import ImgEditor from "./assets/img/editor3.png"
import ImgComunid from "./assets/img/comunidade3.png"
import "./assets/css/style.css"

function NavRight() {
    return(
        <section className="menu_container">
            <nav className="menu_nav">
                <ul>
                    <h2 className="menu_titulo">MENU</h2>
    
                    <input type="radio" name="menu" id="code" className="menu_radio" checked/>
                        <label for='code' name="menu">
                            <li className="menu_item">
                                <figure className="menu_figure">
                                    <div className="menu_figure_bg">
                                        <img src={ImgEditor} className="menu_figure-img"/>
                                    </div>
                                    <figcaption className="menu_figure-label">Editor de Código</figcaption>
                                </figure>
                            </li>
                    </label>

                    <input type="radio" name="menu" id="comunidade" className="menu_radio"/>
                        <label id="menu" for='comunidade' name="menu">
                            <li className="menu_item">
                            
                                <figure className="menu_figure">
                                    <div className="menu_figure_bg">
                                        <img src={ImgComunid} className="menu_figure-img"/>
                                    </div>
                                        <figcaption className="menu_figure-label">Comunidade</figcaption>
                                </figure>
                            </li>
                        </label>
                </ul>
            </nav>
        </section>
    )
  }

  export default NavRight;
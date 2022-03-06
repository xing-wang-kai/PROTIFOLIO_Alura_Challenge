import React from "react";

import "./assets/css/style.css"

function NavLeft(){
    return(
        <section className="menu_left-container">
            <div className="menu_left-div">
                <form className="menu_left-form">
                    <div className="menu-1">
                        <h3 className="menu_left-form--item menu-titulo">seu projeto</h3>
                        <input className="menu_left-form--item item-imput" type="text" for='projeto' name="projeto" placeholder="Nome do seu Projeto"/>
                        <textarea className="menu_left-form--item item-textarea" rows="2" for="projeto" name="projeto" placeholder="Descrição do seu Projeto"/>
                    </div>
                    <div className="menu-2">
                    <h3 className="menu_left-form--item menu-titulo">personalização</h3>
                        <select className="menu_left-form--item item-select" >
                            <option >JavaScript</option>
                            <option >Python</option>
                            <option >C#</option>
                            <option >C++</option>
                            <option >C</option>
                            <option >Ruby</option>
                            <option >Java</option>
                            <option >PHP</option>
                        </select>
                        <input type="color" value="#6BD1FF" for='projeto' name="projeto" placeholder="Nome do seu Projeto" className="menu_left-form--item item-color"/>
                    </div>
                    <button className="menu_left--botao">Salvar projeto</button>
                </form>
            </div>
        </section>
    )

}

export default NavLeft;
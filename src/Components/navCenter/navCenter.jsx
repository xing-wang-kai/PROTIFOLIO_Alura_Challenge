import React from "react";
import './assets/css/style.css'

function NavCenter(){
    return(
        <section class ="body_container-center">
            <form>
            <section class="body-center">
            <section className="body-card">
                
                <label for="body_text-corpo" >
                    <fieldset className="body_text-corpo">
                        <input for="red" className="escolhared" type="radio" name="escolha" id="red" checked/>
                        <label for="red"></label>
                        <input for="yellow" className="escolhayellow" type="radio" name="escolha" id="yellow"/>
                        <label for="yellow"></label>
                        <input for="green" className="escolhagreen" type="radio" name="escolha" id="green"/>
                        <label for="green"></label>
                    </fieldset>

                    <fieldset className="body_textarea">
                        <textarea className="body_textarea--valor" rows="13" columns="75"/>
                    </fieldset>
                </label>
               
            </section>
            </section>
            <button className="body_botao">Visualizar com highlight</button>
            </form>
        </section>
    )
}

export default NavCenter;
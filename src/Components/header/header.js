import React from 'react';
import logoAlura from "./assets/_img/logoAlura.png";
import AluraLogin from "./assets/_img/acesso-img.png";
import ALuraMenuLog from "./assets/_img/menu3.png";
import AluraPesquisa from "./assets/_img/Pesquisar3x.png";
import './assets/styles/css/header.css'


function Header(){
    return(
        <section className='header_container'>

            <figure className='header_imagen'>
                <img src={logoAlura} alt="logo-alura" className='header_imagem--img'/>
            </figure>

            <form className='header_forms'>
                <input type="search" placeholder='Busque por Algo' className='header_forms--search'></input>
                
            </form>
            <img src={AluraPesquisa} className='header_form-pesquisa--img' alt='PESQUISAR' />

            <figcaption className='header_imagem--login'>
                <img src={AluraLogin} alt="foto-perfil" className='header_imagem--login-imagem'/>
                <figcaption className='header_imagem--label'>Harry</figcaption>
            </figcaption>
            <figcaption className='header_imagem--menu'>
                <img src={ALuraMenuLog} alt="foto-perfil" className='header_imagem--menu-img'/>
            </figcaption>
        </section>
    )

}

export default Header;
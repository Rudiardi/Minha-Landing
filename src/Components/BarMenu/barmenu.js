import React from "react";
import './barmenu.css'

function BarMenu(){
    return(
        <div className="container">
            <div className="gradebotoes">
                <a href="#" className="botaoBar">Inicio</a>
                <a href="https://github.com/Rudiardi" className="botaoBar">Sobre</a>
                <a href="#" className="botaoBar">Projeto</a>
                <a href="#" className="botaoBar">Contatos</a>
            </div>
        </div>
    )
}

export default BarMenu;
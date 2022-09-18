import React from "react";
import './apresentacao.css'
import foto from '../../Images/me.jpg'
import { TypeAnimation } from "react-type-animation";

function Apresentacao(){
    return(
        <div className="containerApresetacao">
            <div className="textos">
                <div className="bloco">
                            <text>Olá!</text>
                            <text className="isolado">Eu sou</text>
                        </div>
                        <div className="bloco">
                            <text>Rudiardi</text>
                        </div> 
                        <TypeAnimation
                            sequence={[
                                '<Engenheiro metido a Dev />',2000,
                                '<Defensor do console.log( ) />',2000,
                                '<Apaixonado por música />',2000
                            ]}
                            speed={30}
                            style={{fontSize: '2em'}}
                            wrapper='span'
                            repeat={Infinity}
                        />
                </div>
            <div className="foto">
                <img src={foto}/>
            </div>
        </div>
    )
}

export default Apresentacao;
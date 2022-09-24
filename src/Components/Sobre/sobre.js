import React from "react";
import './sobre.css';
import {AiOutlineArrowDown} from 'react-icons/ai'



function Sobre(){
    return(
        <div className="container-geral">
            <div className="container-sobre">
                <div className="titulo">
                    <text className="negrito">Sobre </text>
                    <text>mim.</text>
                </div>
                <div className="container-textos">
                    <text>
                    Sempre gostei de tecnologia e essa foi a minha maior motivação para seguir as ciências exatas, 
                    entrei para engenharia elétrica e lá de fato fui apresentado ao mundo da programação, tendo o 
                    início do meu contato sendo usando a linguagem C. A criação de projetos pessoais me apresentou 
                    a outras linguagens, como Python, Go e JavaScript, tendo sido essa paixão à primeira vista, devido a sua versatilidade.
                    </text>
                    <text>
                    Desde o começo de 2022 venho estudando bastante e tentando fazer o máximo de projetos pessoais 
                    possíveis, a fim de aumentar minha experiência e expertise.
                    </text>
                    <text>
                    Tenho como hobbies a música e a eletrônica e assistir séries!
                    </text>
                </div>
            </div>
            <div className="container-habilidades">
                <div className="titulo">
                    <text >Minhas </text>
                    <text className="negrito">Habilidades.</text>
                </div>
                <div className="caixa-botoes">
                    <div className="bot1">
                        <button href="#" className="botao" >
                            <div className="orgbutton">
                                <text>Front-end</text>
                                <AiOutlineArrowDown />
                            </div>                       
                        </button>    
                    </div>
                    <div className="bot1">
                        <button href="#" className="botao" >
                            <div className="orgbutton">
                                <text>Back-end</text>
                                <AiOutlineArrowDown />
                            </div>                       
                        </button>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sobre;
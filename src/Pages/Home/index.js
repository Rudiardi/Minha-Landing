import React from "react";
import BarMenu from "../../Components/BarMenu/barmenu";
import Apresentacao from "../../Components/Apresentacao/apresentacao";
import Sobre from "../../Components/Sobre/sobre";
import './index.css'

function Home(){
    return(
        <div>
            <BarMenu/>
            <Apresentacao/>
            <Sobre/>
        </div>
    );
}

export default Home;

//teste
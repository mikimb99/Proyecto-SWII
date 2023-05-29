import "./Especies.css"

import { Link, useLocation } from "wouter";

function Especies (){
    const [, setLocation] = useLocation()


    const handleButtonAll = () => {
        setLocation("/especies/all")
    };
    
    return(
        <>
            <Link to="/"><h1>ESPECIES</h1></Link>
            <button className="boton" onClick={handleButtonAll}>/getAllEspecies</button> <br/>
            <button className="boton">/getEspeciesById</button><br/>
            <button className="boton">/updateEspecie</button><br/>
            <button className="boton">/deleteById</button><br/>
            <button className="boton">/addEspecie</button><br/>
        </>
    )
}

export default Especies
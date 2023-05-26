import "./Especies.css"
import { Link } from "wouter";
function Especies (){
    return(
        <>
            <Link to="/"><h1>ESPECIES</h1></Link>
            <button className="boton">/getAllEspecies</button> <br/>
            <button className="boton">/getEspeciesById</button><br/>
            <button className="boton">/updateEspecie</button><br/>
            <button className="boton">/deleteById</button><br/>
            <button className="boton">/addEspecie</button><br/>
        </>
    )
}

export default Especies
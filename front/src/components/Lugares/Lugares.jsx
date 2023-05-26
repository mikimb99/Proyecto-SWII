import "./Lugares.css"
import { Link } from "wouter";
function Lugares (){
    return(
        <>
            <Link to="/"><h1>LUGARES</h1></Link>
            <button className="boton">/getAllLugares</button> <br/>
            <button className="boton">/getLugarById</button><br/>
            <button className="boton">/updateLugar</button><br/>
            <button className="boton">/deleteById</button><br/>
            <button className="boton">/addLugar</button><br/>
        </>
    )
}

export default Lugares
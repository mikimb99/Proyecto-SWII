import {Route, Router, Switch} from "wouter";
import Portada from "./components/portada/Portada";
import Animales from "./components/Animales/Animales";
import Especies from "./components/Especies/Especies";
import Lugares from "./components/Lugares/Lugares";
import AnimalById from "./components/EnpointsAnimales/getById/getAnimalById";
import UpdateById from "./components/EnpointsAnimales/updateById/UpdateById";
import AddAnimal from "./components/EnpointsAnimales/add/AddAnimal";
import GetAll from "./components/EnpointsAnimales/getAll/getAll";
import GetAllEspecies from "./components/EnpointsEspecies/getAll/getAllEspecies";

export default function Routes (){
   
    return (
        <Router>
            <Switch>
            <Route exact path="/" component={Portada} />
            <Route exact path="/animales" component={Animales} />
            <Route exact path="/animales/getAll/:pagina" component={GetAll} />
            <Route exact path="/animales/add" component={AddAnimal} />
            <Route exact path="/animales/:id" component={AnimalById} />
            <Route exact path="/animales/update/:id" component={UpdateById} />
            <Route exact path="/especies" component={Especies} />
            <Route exact path="/especies/all" component={GetAllEspecies} />
            <Route exact path="/lugares" component={Lugares} />
            </Switch>
        </Router>
    )}
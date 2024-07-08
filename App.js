import './App.css' ;
import { useState } from 'react';
import AnimalShow from './AnimalShow' ;

function getRandomAnimal(){
    const animals=['dog','cat','gator','horse','bird'];
    return animals[Math.floor(Math.random()*animals.length)]
}
function App(){

    const [animals,setAnimals] = useState([]);

    const handleClick = () =>{
        setAnimals([...animals,getRandomAnimal()])
    };

    const renderedAnimals = animals.map((animal,index)=>{
        return <AnimalShow type={animal} key={index} />;
    });

    return (
        <div className="app">        
            <button onClick={handleClick}>Add Animals</button>
            <div className="AnimalList">{renderedAnimals}</div>
        </div>

    )
}

export default App;
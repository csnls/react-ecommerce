import CareScale from './CareScale'

function PlantItem({id, name, cover, water, light}) {

    function handleClick(plantName){
        console.log(`${plantName} est un très bon choix`)
    }
    
    return (
        <div>
                    <li key={id} onClick={() => handleClick(name)}>
                        {name}
                        <img src={cover} alt={`${name} cover`} className='plant-cover'/>
                        <div>
                            <CareScale careType='water' scaleValue={water}/> 
                            {/* CareScale est l'enfant du composant PlantItem (son parent) */}
                            <CareScale careType='light' scaleValue={light}/>
                        </div>
                    </li>
        </div>
    )

}

export default PlantItem
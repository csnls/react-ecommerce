import {plantList} from '../datas/plantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'
import Categorie from './Categorie'
import {useState} from 'react'

function ShoppingList({cart, updateCart}) {

    var [activeCategory, setActiveCategory] = useState('')
    var categories = plantList.reduce(
        (accumulateur, valeurCourante) => 
            accumulateur.includes(valeurCourante.category) ? accumulateur : accumulateur.concat(valeurCourante.category),
            []
            // 1e appel : acc : [] & valC : classique           -> valC donc [classique] donc classique
            // 2e appel : acc : classique & valC : classique    -> acc donc classique
            // 3e appel : acc : classique & valC : classique    -> acc donc classique
            // 4e appel : acc : classique & valC : classique    -> acc donc classique
            // 5e appel : acc : classique & valC : ext          -> valC donc [classique,ext] donc ext
            // 6e appel : acc : ext & valC : ext                -> acc donc ext
            // 7e appel : acc : ext & valC : ext                -> acc donc ext
            // 8e appel : acc : ext & valC : pg                 -> valC donc [classique, ext, pg] donc pg
            // 9e appel : acc : pg & valC : pg                  -> acc donc pg
    )
    function addToCart(name, price) {
        var currentPlantAdded = cart.find((e) => e.name === name) 
        // je vérifie dans le tableau 'cart' si la plante est présente
        if (currentPlantAdded) {
            var cartFilteredCurrentPlant = cart.filter((e) => e.name !== name)
            // si elle l'est, je créé un nouveau tableau sans la plante
            updateCart([...cartFilteredCurrentPlant, {name, price, amount: currentPlantAdded.amount + 1}])
            // je le met dans le tableau 'updateCart' et j'ajoute 1 à la quantité de la plante en question
        } else {
            updateCart([...cart, {name, price, amount: 1}])
            // si elle ne l'est pas, je récupère le panier 'cart' et j'ajoute 1 à la plante en question
        }
    }

    return (
        <div className='lmj-shopping-list'>
            <Categorie categories={categories} setActiveCategory={setActiveCategory} activeCategory={activeCategory}/>
            <ul>
                {plantList.map(({id, name, cover, water, light, price, category}) => 
                    !activeCategory || activeCategory === category ? (
                        <div key={id}>
                            <PlantItem id={id} name={name} cover={cover} water={water} light={light} price={price}/>
                            <h2>{price}€</h2>
                            <button onClick={() => addToCart(name, price)}>Ajouter</button>
                        </div>
                    ) : null
                )}
            </ul>
        </div>
    )

}

export default ShoppingList
import '../styles/Cart.css'
import {useState} from 'react' // hook qui permet d'ajouter le state local React à des composants fonctions
import {useEffect} from 'react'

function Cart({cart, updateCart}){ 
    var [isOpen, setIsOpen] = useState(true)
    // useState renvoie une paire de valeurs dans un tableau de 2 éléments
    // le 1e élément est la valeur actuelle et le 2e est une fonction qui permet de la modifier
    // il est important de préciser une valeur initiale à notre state (ici true)
    var total = cart.reduce(
        (accumulateur, valeurCourante) => 
            accumulateur + valeurCourante.amount * valeurCourante.price,
            0
    )
    useEffect(()=> {
        document.title = `J'aurai ${total} à payer`
        }, [total]
    )
    // useEffect nous permet d'effectuer notre effet une fois le rendu du composant terminé 
    // le premier paramètre est la fonction à exécuter
    // le second paramètre [total] correspond à un tableau de dépendances


    return isOpen ? (
        <div className='lmj-cart'>
            <button onClick={() => setIsOpen(false)}>Fermer</button>
            {cart.length > 0 ? 
                <div>
                    <h3>Panier</h3>
                    {cart.map(({name, price, amount}, index) => (
                        <div key={`${name}-${index}`}>
                            {name} {price}€ x {amount}
                        </div>
                    ))}
                    <h3>total : {total}€</h3>
                    <button onClick={() => updateCart([])}>Vider le panier</button>
                </div>
            :   <div>
                    Votre panier est vide
                </div>
            }
        </div>
    ) : (
        <button onClick={() => setIsOpen(true)}>Ouvrir le panier</button>
    )
}

// Grâce à useState, le composant Cart est devenu un stateful component
// Cela veut dire que Cart peut être re-render autant de fois que nécessaire, et la valeur du panier sera préservée

export default Cart
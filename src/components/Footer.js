import {useState} from 'react'
// useState est un hook React qui permet d'ajouter l'état local React à une fonction composant.
import {useEffect} from 'react'


function Footer() {

    var [inputValue, setInputValue] = useState('')
    // inputValue = variable d'état | setInputValue = fonction qui permet de modifier l'état initial (placeholder)
    // Cela permet d'appeler le hook useState directement dans notre composant.
    function manageBlur() {
        if (!inputValue.includes('@')) {
            alert('Il manque un arobase !')
        }
    }

    useEffect(()=> {
        return () => console.log (`Cette alert s'affiche qd Footer est retiré du DOM`)
        }, []
    )

    return (
        <div>
            <input
            placeholder='Entrez votre mail'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={manageBlur} // alert si la zone de saisie n'est plus active suite à une perte de focus
            />
            <button onClick={() => console.log(inputValue)}>
                Cliquez ici
            </button>
        </div>
    )

}

export default Footer
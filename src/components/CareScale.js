function CareScale({careType, scaleValue}) {

    var scaleType = careType === 'light' ? '☀️' : '💧' // si careType = light -> ☀️ sinon 💧
    var range = [1, 2, 3]
    var careQuantity = ['', 'peu', 'pas mal', 'beaucoup']
    
    return (
        <div onClick={() => 
            alert(`Cette plante requiert ${careQuantity[scaleValue]} ${careType ==='light' ? 'de lumière' : `d'arrosage`}`)
        }>
            {range.map((rangeElement) => 
                scaleValue >= rangeElement ? <span key={rangeElement}>{scaleType}</span> : null
            )}
        </div>
        // 18 scaleValues [1, 1, 2, 1, 1, 2, 3, 1, 1, 3, 2, 2, 3, 2, 2, 3, 3, 3]
        // 1e scaleValue :  1 >= 1 (range[0]) -> 💧     1 >= 2 (range[1]) -> R      1 >= 3 (range[2]) -> R
        // 2e scaleValue :  1 >= 1 (range[0]) -> ☀️     1 >= 2 (range[1]) -> R      1 >= 3 (range[2]) -> R
        // 3e scaleValue :  2 >= 1 (range[0]) -> 💧     2 >= 2 (range[1]) -> 💧      2 >= 3 (range[2]) -> R
        // ...
        // 18e scaleValue :  3 >= 1 (range[0]) -> ☀️     3 >= 2 (range[1]) -> ☀️      3 >= 3 (range[2]) -> ☀️
        )

}

export default CareScale
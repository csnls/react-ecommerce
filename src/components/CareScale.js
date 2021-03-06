function CareScale({careType, scaleValue}) {

    var scaleType = careType === 'light' ? 'âï¸' : 'ð§' // si careType = light -> âï¸ sinon ð§
    var range = [1, 2, 3]
    var careQuantity = ['', 'peu', 'pas mal', 'beaucoup']
    
    return (
        <div onClick={() => 
            alert(`Cette plante requiert ${careQuantity[scaleValue]} ${careType ==='light' ? 'de lumiÃ¨re' : `d'arrosage`}`)
        }>
            {range.map((rangeElement) => 
                scaleValue >= rangeElement ? <span key={rangeElement}>{scaleType}</span> : null
            )}
        </div>
        // 18 scaleValues [1, 1, 2, 1, 1, 2, 3, 1, 1, 3, 2, 2, 3, 2, 2, 3, 3, 3]
        // 1e scaleValue :  1 >= 1 (range[0]) -> ð§     1 >= 2 (range[1]) -> R      1 >= 3 (range[2]) -> R
        // 2e scaleValue :  1 >= 1 (range[0]) -> âï¸     1 >= 2 (range[1]) -> R      1 >= 3 (range[2]) -> R
        // 3e scaleValue :  2 >= 1 (range[0]) -> ð§     2 >= 2 (range[1]) -> ð§      2 >= 3 (range[2]) -> R
        // ...
        // 18e scaleValue :  3 >= 1 (range[0]) -> âï¸     3 >= 2 (range[1]) -> âï¸      3 >= 3 (range[2]) -> âï¸
        )

}

export default CareScale
function Recommendation() {
    var currentMonth = new Date().getMonth()
    var isSpring = currentMonth >= 2 && currentMonth <= 5

    if (!isSpring) {
        return <div>Ce n'est pas le moment de rempoter</div>
    } 
    return <div>Ce n'est pas le moment de rempoter</div>     
}

export default Recommendation
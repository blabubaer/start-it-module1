function isDateValid(date) {

}

function length(date) {
    return (date.length() == 10)
}
function dotsAtPos(date) {
    var dotpos = []
    for (const i in date) {
        if (date[i] == ".") dotpos.push(i) 
    }
    if ( dotpos == [3,7]) return true
    else return false
}
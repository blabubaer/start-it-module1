// controller

function choose(number) {
    if (chosenBar == number) {
        chosenBar = null
    }
    else {chosenBar = number}
    show()
}
function deleteBar() {
    let pos = chosenBar-1
    numbers.splice(pos, 1)
    console.log(chosenBar)
    chosenBar = null
    show()
}

function change() {
    if (inputValue>0 && inputValue <=10) {
        numbers[chosenBar-1] = inputValue
    }
    else {
        alert("Invalid Number entered. Please enter a number between 1 and 10") 
        return
    }
    show()
}

function addbar() {
    if (numbers.length == 8) {
        alert("Maximum number of Bars is 8. Please delet a bar before adding another.")
        return
    }
    if (inputValue>0 && inputValue <=10) {
        numbers.push(inputValue)
    }
    else{
        alert("Invalid Number entered. Please enter a number between 1 and 10")
        return
    }
    show()
    

}
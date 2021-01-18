
//Main function
function isDateValid(date) {
    split(date)
    if( length(date) && dotsAtPos(date) && yeartest(date) && monthtest (date) && daytest(date)) return true
    else return false
}

// determines if length is correct
function length(date) {
    if (date.length == 10) return true
    else return false
}

// determines if dots are at the correct position
function dotsAtPos(date) {
    var dotpos = []
    for (const i in date) {
        if (date[i] == ".") dotpos.push(i) 
    }
    if ( JSON.stringify(dotpos) == JSON.stringify(["2","5"])) return true
    else return false
}


//splits the date for further use
function split(date) {
    var splitted = []
    splitted.push(date.slice(0,2))
    splitted.push(date.slice(3,5))
    splitted.push(date.slice(6))
    return splitted
}

// tests if the year is valid
function yeartest(date) {
    var year = split(date)[2]
    if (year >= "0000" && year <= "9999") return true
    else false
}

//tests if the month is valiud
function monthtest(date) {
    var month = split(date)[1]
    if(month >= 1 && month <= 12) return true
    else return false
}

//tests if the day is valid for the month and year
function daytest(date) {
    var day = split(date)[0]
    var month = split(date)[1]
    var year = split(date)[2]


    const numberofdays = { 31: [1,3,5,7,8,10,12], 28:[2] ,30:[4,6,9,11]}
    if (month == 2 && (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) && (day>=1 && day<=29)) return true
    for (var key in numberofdays) {
        if (numberofdays[key].includes(parseInt(month)) && (parseInt(day)>=0 && parseInt(day) <= key)) return true
    }
    return false
}

//Testoutput for my birthdate
console.log(isDateValid("15.12.1989"))

function emailtest(email) {

    var solution = (!(email.includes(" ")) && email.includes("@") && (email.slice(0, email.indexOf("@")).includes(".")) && email.slice(email.indexOf("@")+1,).includes("."))
    return solution
}
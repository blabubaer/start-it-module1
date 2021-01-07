const q1 = document.getElementById("q1")
const q2 = document.getElementById("q2")
const q3 = document.getElementById("q3")
const a1_1 = document.getElementById("a1_1")
const a1_2 = document.getElementById("a1_2")
const a1_3 = document.getElementById("a1_3")
const a2_1 = document.getElementById("a2_1")
const a2_2 = document.getElementById("a2_2")
const a2_3 = document.getElementById("a2_3")
const a3_1 = document.getElementById("a3_1")
const a3_2 = document.getElementById("a3_2")
const a3_3 = document.getElementById("a3_3")


const answers = ["a1_2", "a2_1","a3_2"]

function checkanswer(elmnt) {
    if (answers.includes(elmnt.id)) {
        elmnt.style.backgroundColor = "green"
    }
    else {
        elmnt.style.backgroundColor = "red"
    }
}

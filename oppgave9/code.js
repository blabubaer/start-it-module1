const box1 = document.getElementById("dp1");
const box2 = document.getElementById("dp2");
const box3 = document.getElementById("dp3");
const box4 = document.getElementById("dp4");
const box5 = document.getElementById("dp5");
const borderOnoff =document.getElementById("border-onoff");
const borderBold = document.getElementById("border-bold");
const borderDotted = document.getElementById("border-dotted");
const bgColor = document.getElementById("bg-color");
const textColor = document.getElementById("text-color");
const textPos = document.getElementById("text-pos")
const title = document.getElementById("boxname")

class DisplayBox {
    constructor(borderStyle, borderWidth, backgroundColor, textColor, textPosition) {
        this.borderStyle = borderStyle;
        this.borderWidth = borderWidth
        this.backgroundColor = backgroundColor;
        this.textColor = textColor;
        this.textPosition = textPosition;
    }
}

const Box1 = new DisplayBox(box1.style.borderStyle, box1.style.borderWidth, box1.style.backgroundColor, box1.style.color, box1.style.textAlign);
const Box2 = new DisplayBox(box2.style.borderStyle, box2.style.borderWidth, box2.style.backgroundColor, box2.style.color, box2.style.textAlign);
const Box3 = new DisplayBox(box3.style.borderStyle, box3.style.borderWidth, box3.style.backgroundColor, box3.style.color, box3.style.textAlign);
const Box4 = new DisplayBox(box4.style.borderStyle, box4.style.borderWidth, box4.style.backgroundColor, box4.style.color, box4.style.textAlign);
const Box5 = new DisplayBox(box5.style.borderStyle, box5.style.borderWidth, box5.style.backgroundColor, box5.style.color, box5.style.textAlign);

const idName = {"dp1":Box1,"dp2":Box2, "dp3":Box3, "dp4":Box4, "dp5":Box5 }
const idName2 = {"dp1":box1,"dp2":box2, "dp3":box3, "dp4":box4, "dp5":box5 }

var cBox = "dp1"
// On choosing a box this function is called and sets all the settings to the boxes current ssettings
function changeChoosers(box) {
    title.innerHTML = box.innerHTML;
    var uBox = idName[box.id];
    cBox = String(box.id)
  
    if (uBox.borderStyle != "") {
        borderOnoff.checked = true;
    }
    else {
        borderOnoff.checked = false
    }
    if (uBox.borderStyle == "dotted") {
        borderDotted.checked = true
    }
    else {
        borderDotted.checked = false
    }
    if (uBox.borderWidth == "thick") {
        borderBold.checked =true
    }
    else {
        borderBold.checked = false
    }
    bgColor.value = uBox.backgroundColor
    textColor.value = uBox.textColor
    textPos.value = uBox.textPosition
}

function changeBox() {
    var uBox = idName[cBox]
    
    if (borderDotted.checked) {
        uBox.borderStyle = "dotted"
    else {
        uBox.borderStyle = ""
    }
    
    if (borderOnoff.checked) {
        uBox.borderStyle = "solid"
    }
    else {
        uBox.borderStyle = ""
    }

    }
    if (borderBold.checked) {
        uBox.borderWidth = "thick"
    }
    else {
        uBox.borderWidth = ""
    }
    uBox.backgroundColor = bgColor.value
    uBox.textColor = textColor.value
    uBox.textPosition = textPos.value
    var vBox = idName2[cBox]

    vBox.style.borderStyle = uBox.borderStyle
    vBox.style.borderWidth = uBox.borderWidth
    vBox.style.backgroundColor = bgColor.value
    vBox.style.textAlign = textPos.value
    vBox.style.color = textColor.value


}
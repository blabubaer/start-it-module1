//Model
var placeholder = ["_____","_____","_____"]
class protagonist {
    constructor(job, ride, area,activebutton) {
        this.job = job
        this.ride = ride
        this.area = area
        this.activebutton = activebutton
    }
}
var pirate = new protagonist("pirate", "ship", "ocean",[".",".","."])
var biker = new protagonist("biker", "motorbike", "desert",["","",""])
var wizard = new protagonist("wizard","broomstick","magical forrest", ["","",""])
var protagonists = [pirate,biker,wizard]

show()

//View
    function show() {
       var app = document.getElementById("app")
       var header = document.createElement("div")
       var text = document.createElement("div")
       var picture = document.createElement("div")
       var chooser = document.createElement("div")

    //header construction
       header.classList.add("header")
       var title = document.createElement("h1")
       title.innerText = "Word Chooser!"
       header.appendChild(title)

    //text construction
        text.classList.add("text")
        var p1 = document.createElement("p")
        var field1 = document.createElement("span")
        field1.innerText = placeholder[0]
        p1.innerText ="This is Paolo, the little " + field1.innerText + "."

        var p2 = document.createElement("p")
        var field2 = document.createElement("span")
        field2.innerText = placeholder[1]
        p2.innerText ="With his mighty " + field2.innerText

        var p3 = document.createElement("p")
        var field3 = document.createElement("span")
        field3.innerText = placeholder[2]
        p3.innerText = "he cruises over the vast " + field3.innerText + "."
        text.appendChild(p1)
        text.appendChild(p2)
        text.appendChild(p3)

    // chooser construction
        chooser.classList.add("chooser")
        for (var i in protagonists) {
            var container = document.createElement("div");
            container.classList.add("list")
            var list = [protagonists[i].job,protagonists[i].ride,protagonists[i].area]
            for (var a in list){
                button = document.createElement("div");
                button.innerText = list[a];
                var addClass = protagonists[i].activebutton
                button.classList.add("button")
                button.style.backgroundColor = addClass[a]
                button.id = a
                button.onclick = function() {change(this);}
                container.appendChild(button)
            }
            chooser.appendChild(container)
        }
        
    //picture construction
        picture.classList.add("picture");








        app.appendChild(header)
        app.appendChild(text)
        app.appendChild(picture)
        app.appendChild(chooser)
    
    
    }   
//Controller
function change(button) {
    placeholder[button.id] = button.innerText
    var q = button.innerText
    for (var p of protagonists) {
        p.activebutton[button.id] = ""
        if(p.job == q || p.ride == q || p.area == q) {
            if (p.activebutton[button.id] == "green") {
                p.activebutton[button.id] = "" 
            }
            else {
                p.activebutton[button.id] = "green"
            }
        }

    }
    show()


}
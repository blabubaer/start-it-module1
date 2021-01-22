

    // hjelpevariable for både view og controller
    var contentDiv = document.getElementById('content');

    // model
    let numbers = [7, 3, 1, 5, 8];
    let chosenBar = null; // Variabel for hvilken stolpe som er valgt
    let inputValue; // Variabel for hva som er skrevet i input-feltet
    // view
    show();
    function show() {
        let svgInnerHtml = '';
        let buttonstate = ""
        for (let i = 0; i < numbers.length; i++) {
            svgInnerHtml += createBar(numbers[i], i + 1);
        }
        var valgt = ""
        if (chosenBar == null) {
            valgt = "ingen"
            buttonstate = "disabled"
        }
        else {
            valgt = chosenBar
            buttonstate = ""
        }
        contentDiv.innerHTML = `
            <svg id="chart" width="500" viewBox="0 0 80 110">
                ${svgInnerHtml}
            </svg><br/>
            Valgt stolpe: <i>${valgt}</i>
            <br />
            Verdi:
            <input type="number" min="1" max="10" oninput="inputValue = this.value" id="inputvalue"/>
            <button>Legg til stolpe</button>
            <button ${buttonstate} onclick="change()">Endre valgt stolpe</button><br />
            <button ${buttonstate} onclick="deleteBar()">Fjerne valgt stolpe</button>
            `;
    }

    function createBar(number, barNo) {
        const width = 8;
        const spacing = 2;
        let x = (barNo - 1) * (width + spacing);
        let height = number * 10;
        let y = 110 - height;
        let color = calcColor(1, 10, barNo);
        let style = ""
        if (barNo == chosenBar) {
            style = "stroke:black; stroke-width:1"
        }
        return `<rect width="${width}" height="${height}"
                            x="${x}" y="${y}" fill="${color}" style="${style}" onclick="choose(${barNo})"></rect>`;
    }

    function calcColor(min, max, val) {
        var minHue = 240, maxHue = 0;
        var curPercent = (val - min) / (max - min);
        var colString = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ",100%,50%)";
        return colString;
    }

    // controller (ingenting her ennå)

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
        var inputvalue = document.getElementById("inputvalue").value
        console.log(inputvalue)
        if (inputvalue>0 && inputvalue <=10) {
            numbers[chosenBar-1] = inputvalue
        }
        else alert("Invalid Number entered. Please enter a number between 1 and 10")
        show()
    }
const inputElement = document.querySelector("#input")
const fromElement = document.querySelector("#from")
const toElement = document.querySelector("#to")
const outputElement = document.querySelector("#output")
const convertButton = document.querySelector("#convert-btn")
const messageElement = document.querySelector("#message")

function convert(){
    const fromValue = fromElement.value;
    const toValue = toElement.value;

    //VALORES IGUAIS
    if(fromValue === toValue){
        outputElement.value = inputElement.value;
        messageElement.textContent = "";
        return;
    }

    //CONVERTER ENTRADA PARA METROS
    let meters
    switch (fromValue) {
        case "m":
            meters = inputElement.value;         
            break;
        case "km":
                meters = inputElement.value * 1000;      
                break;
        case "cm":
                meters = inputElement.value / 100;       
                break;
        case "mm":
                meters = inputElement.value / 1000;        
                break;
    }
    //CONVERTER METROS PARA UNIDADE DE SAÍDA
    let result;
    switch (toValue){
        case "m":
            result = meters;
            break;
        case "km":
            result = meters / 1000;
            break;
        case "cm":
            result = meters * 100;
            break
        case "mm":
            result = meters * 1000;
            break;
        }
    
    //RESULTADO NO INPUT
    outputElement.value = result

    //RESULTADO NA MSG
    const fromLabel = fromElement.options[fromElement.selectedIndex].text;
    const toLabel = toElement.options[toElement.selectedIndex].text;

    const message = `${inputElement.value} ${fromLabel} equivale a ${result} ${toLabel}`;
    messageElement.textContent = message;
    return;

}

convertButton.addEventListener("click", convert)

function traducir(){
    let texto = document.getElementById("text").value.trim();
    const array = new Array(texto.lenght);
    const array_binario = new Array(texto.lenght);
    for (let i = 0; i < texto.length; i++){
        array[i] = texto.charCodeAt(i);
        array_binario[i] = array[i].toString(2);
        console.log("array -> " + array[i]);
        console.log("array -> " + array_binario[i]);
    }
    let numero_ascii;
    let binario;
    let uno = "0";
    let dos = "00";
    for (let i = 0; i < texto.length; i++){
        numero_ascii = array[i];
        binario = array_binario[i];
        if (binario.length !=8){
            
            if (binario.length == 6){
                binario = dos + binario;
            } else if (binario.length == 7){
                binario = uno + binario;
            }
        }
        console.log("binario " + binario);
        var fila = "<tr><td>"+numero_ascii+"</td><td>"+binario[0]+"</td><td>"+binario[1]+"</td><td>"+binario[2]+"</td><td>"+binario[3]+"</td><td>"+binario[4]+"</td><td>"+binario[5]+"</td><td>"+binario[6]+"</td><td>"+binario[7]+"</td></tr>";
        var btn = document.createElement("TR");
        btn.innerHTML=fila;
        document.getElementById("tabla").appendChild(btn); 
    }
    document.getElementById("div_tabla").style.display = '';
}

function cancelar(){
    document.getElementById("text").value = "";
    document.getElementById("div_tabla").style.display = 'none';
    document.getElementById("tabla").innerHTML = "";
}

function Eliminar (i) {
    document.getElementsByTagName("table")[0].setAttribute("id","tableid");
    document.getElementById("tableid").deleteRow(i);
}

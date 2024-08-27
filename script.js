const textArea = document.querySelector(".textarea");
const mensaje = document.querySelector(".mensaje");



function btnEncriptar(){
    const textoEncriptdo = encriptar(textArea.value)
    mensaje.value = textoEncriptdo
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}


function encriptar(stringEncriptado) {
    let matrizCodigo = [["e", "enter"], ["i","imes"],["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
            
        }
    }
    return stringEncriptado
}
  

function BtnDesEncriptar() {
    const textoEncriptdo = desEncriptar(textArea.value)
    mensaje.value = textoEncriptdo
    textArea.value = "";

}


function desEncriptar(stringDesEncriptado) {
    let matrizCodigo = [["e", "enter"], ["i","imes"],["a","ai"], ["o","ober"], ["u","ufat"]];
    stringDesEncriptado = stringDesEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if (stringDesEncriptado.includes(matrizCodigo[i][1])) {
            stringDesEncriptado = stringDesEncriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
            
        }
    }
    return stringDesEncriptado
}

function btnCopiar() {
    mensaje.select();
    mensaje.setSelectionRange(0, 99999); // Para dispositivos móviles

    navigator.clipboard.writeText(mensaje.value).then(() => {
        alert("Texto copiado al portapapeles");
    }).catch(err => {
        console.error("Error al copiar el texto: ", err);
    });
}


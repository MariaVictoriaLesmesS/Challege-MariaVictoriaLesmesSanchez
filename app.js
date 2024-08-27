/**

La letra "a" es convertida para "ai"
 La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
 */
function iscifrado() {
    let text = document.querySelector('#textBox').value;
    let textSearch = ["ai", "enter", "imes", "ober", "ufat"];
    let descifrar = false;

    for (let word of textSearch) {
      if (text.toLowerCase().includes(word)) {
        descifrar = true;
        break;
      }
    }

    if (descifrar) {
      document.querySelector('#descifrar').removeAttribute('disabled');
    } else {
      document.querySelector('#descifrar').setAttribute('disabled', 'true');
    }
  }


function cifrar(){
    
    let text = a(document.querySelector('#textBox').value);
    changeContenedor();
    console.log(text);

    const contenidoSalida = document.querySelector('.output-content');

    let output = document.createElement('p');
    output.textContent=text;
    output.id = "answer-text"
    
    contenidoSalida.style.fontSize = '1.5rem';
    contenidoSalida.appendChild(output);    
}

function descifrar(){
    let text = b(document.querySelector('#textBox').value);
    changeContenedor();

    const contenidoSalida = document.querySelector('.output-content');

    let output = document.createElement('p');
    output.textContent=text;
    output.id = "answer-text"
    
    
    contenidoSalida.style.fontSize = '1.5rem';
    contenidoSalida.appendChild(output);
}

function changeContenedor(){
    const contenidoSalida = document.querySelector('.output-text');
    let boton = document.querySelector('#copiar');
    contenidoSalida.style.display ="none"
    boton.setAttribute('style', 'visibility: visible');
    if(document.querySelector('#answer-text')){
        document.querySelector('#answer-text').remove()
    }

}

function a(textoEncriptar){
    let textoPalabras = textoEncriptar.split('') 
    console.log(textoPalabras)
    for(let i = 0; i < textoPalabras.length;i++){
        if(textoPalabras[i]=="a"){
            textoPalabras[i] = "ai"
        }else if(textoPalabras[i]=="e"){
            textoPalabras[i]="enter"
        }else if(textoPalabras[i]=="i"){
            textoPalabras[i]="imes"
        }else if(textoPalabras[i]=="o"){
            textoPalabras[i]="ober"
        }else if(textoPalabras[i]=="u"){
            textoPalabras[i]="ufat"
        }
    }
    return(textoPalabras.join(''))
}

function b(textoEncriptado){
    let textoDesencriptado = textoEncriptado
   .replace(/ai/g, 'a')
   .replace(/enter/g, 'e')
   .replace(/imes/g, 'i')
   .replace(/ober/g, 'o')
   .replace(/ufat/g, 'u');
    
    return textoDesencriptado

}

function remove(){
    document.querySelector('#answer-text').remove();
}

function copiar(){
    navigator.clipboard.writeText(document.getElementById('answer-text').textContent);
    alert('texto copiado')
  }
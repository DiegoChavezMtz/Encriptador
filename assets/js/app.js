let keys = {
    'e':'enter',
    'i':'imes',
    'a':'ai',
    'o':'ober',
    'u':'ufat'
}

let txtOriginal = document.querySelector('#text-area_input-id');

let btnEncriptar = document.querySelector('#btn-encriptar');

let btnDesencriptar = document.querySelector('#btn-desencriptar');

let btnCopy = document.querySelector('#btn-copiar');

let notFound = document.querySelector('.message-notfound');

let result = document.querySelector('.result-container');

let txtResult = document.querySelector('.text-results');

function encriptar(){

    let txt = txtOriginal.value;

    let texto = txt.toLowerCase();
   
    let newText = '';
    
    for (let index = 0; index < texto.length; index++) {
        let element = texto[index];
        
        if(keys[element]){
            element = keys[element];
        }
        
        newText = newText + element;
        
    }
    result.style.display = 'flex';
    notFound.style.display = 'none';
    txtResult.innerHTML = newText;
}

function desencriptar(){

    let txt = txtOriginal.value;

    let texto = txt.toLowerCase();

    let newText = '';

    for (let index = 0; index < texto.length; index++) {

        let element = texto[index];
        let block = 0;

            if(keys[element]){

                block = keys[element].length - 1;
                
                newText = newText+element;

                index = index + block;
 
            }else{
                newText = newText+element;
            }
                    
    }
    result.style.display = 'flex';
    notFound.style.display = 'none';
    txtResult.innerHTML = newText;
}

function copy(){

    let text = txtResult.innerHTML;

    navigator.clipboard.writeText(text)
    .then(() => {
        txtOriginal.value = text;
    })
}

btnDesencriptar.addEventListener('click',desencriptar);
btnEncriptar.addEventListener('click',encriptar);
btnCopy.addEventListener('click',copy);
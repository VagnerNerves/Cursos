var minhaPromisse = function (idade) {      

    return new Promise(function(resolve,reject){
        setTimeout(function (){
            if (idade > 18){
                resolve('Maior que 18 anos');
            } else {
                reject('Menor ou igual a 18 anos.');
            } 
        }, 5000);  //5 segundos 
    })

}

var btnBotao = document.querySelector('button.botao');
btnBotao.onclick = function verifidaIdadeClick() {
    var container = document.querySelector('body');

    var labelRemove = document.querySelector('label[name=resultado]');
    if (labelRemove != null) {
        container.removeChild(labelRemove);
    }

    var inputIdade = document.querySelector('input[name=idade]');
    
    minhaPromisse (inputIdade.value)
        .then(function(response){
            var container = document.querySelector('body');

            var label = document.createElement('label');
            label.setAttribute('name','resultado');
            var texto = document.createTextNode(response);

            label.appendChild(texto);
            container.appendChild(label);

            console.log(response);
        })
        .catch(function(error){
            var container = document.querySelector('body');

            var label = document.createElement('label');
            label.setAttribute('name','resultado');
            var texto = document.createTextNode(error);

            label.appendChild(texto);
            container.appendChild(label);

            console.log(error);
        });
};
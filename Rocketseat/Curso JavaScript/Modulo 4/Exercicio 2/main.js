var botaoTela = document.querySelector('button.botao');
botaoTela.onclick = function (){
    var elementoPrincipal = document.querySelector('body');
    var divResultadoExiste = document.querySelector('div[name=resultado]');
    if (divResultadoExiste != null) {
        elementoPrincipal.removeChild(divResultadoExiste);
    }

    var divResultado = document.createElement('div');
    divResultado.setAttribute('name','resultado');
    var elementUL = document.createElement('ul');
    var elementLi = document.createElement('li');
    var texto = document.createTextNode('... Carregando ...');
    elementLi.appendChild(texto);
    elementUL.appendChild(elementLi);
    divResultado.appendChild(elementUL);

    elementoPrincipal.appendChild(divResultado);

    var inputUsuarioGit = document.querySelector('input[name=usuarioGit]');

    var url = 'https://api.github.com/users/'+inputUsuarioGit.value+'/repos';
    
    axios.get(url)
    .then(function(response) {
        console.log(response);
        var elementoPrincipal = document.querySelector('body');
        var divResultadoExiste = document.querySelector('div[name=resultado]');
        if (divResultadoExiste != null) {
            elementoPrincipal.removeChild(divResultadoExiste);
        }

        var divResultado = document.createElement('div');
        divResultado.setAttribute('name','resultado');

        var elementUL = document.createElement('ul');

        for (let valor of response.data) {
            var elementLi = document.createElement('li');
            var elementoTexto = document.createTextNode(valor.name);

            elementLi.appendChild(elementoTexto);
            elementUL.appendChild(elementLi);
        }

        divResultado.appendChild(elementUL);

        var elementoPrincipal = document.querySelector('body');
        elementoPrincipal.appendChild(divResultado);


    })
    .catch(function(error) {
        console.log(error);
        var elementoPrincipal = document.querySelector('body');
        var divResultadoExiste = document.querySelector('div[name=resultado]');
        if (divResultadoExiste != null) {
            elementoPrincipal.removeChild(divResultadoExiste);
        }

        var divResultado = document.createElement('div');
        divResultado.setAttribute('name','resultado');

        var label = document.createElement('label');
        var texto = document.createTextNode('Não encontrado o usuário: '+inputUsuarioGit.value);

        label.appendChild(texto);
        divResultado.appendChild(label);

        elementoPrincipal.appendChild(divResultado);
    });
}
var nomes = ['joao', 'marcelo', 'josé', 'silva'];
let nome = "gmail.com"
var compNomes = [];
for(var i = 0; i < nomes.length; i++){
    for(var j = i + 1; j < nomes.length; j++){
        // for(var n = 1; i < nome.length; n++){
            compNomes.push(nomes[i] +' '+ nomes[j] +' '+ nome);
        // }    
    }    
}

console.log(compNomes)



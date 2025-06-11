// validar se existe elemento para removr. Caso nao exista mais elementos para informar ao usuario com alert a mensagem, nao existe mais elementos 

    const cidades = [ "paloça", "js", "itajai", "brusque", "e" ]
     const numbers = [1, 2, 3, 4, 5  ] 
     numbers.forEach (function(num, i){
        console.log(num* 2 +i );
     }) ;
     numbers.forEach(num => {
        console.log( num * 2);
     });
     for (const num of numbers) {
        console.log(num* 2 );
     }
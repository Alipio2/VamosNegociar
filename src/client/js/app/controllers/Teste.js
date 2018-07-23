class Aluno {

    constructor(matricula, nome) {
        this.matricula = matricula;
        this.nome = nome;
    }
}

class Prova {

    constructor(aluno, nota) {
        this.aluno = aluno;
        this.nota = nota;
    }
}


var avaliacoes = [
    new Prova(new Aluno(1, 'Luana'), 8),
    new Prova(new Aluno(2, 'Cássio'), 6),
    new Prova(new Aluno(3, 'Barney'), 9),
    new Prova(new Aluno(4, 'Bira'), 5)
];

var aprovados = avaliacoes
    .filter(function(prova) { return prova.nota >= 7; })
    .map(function(prova) { return prova.aluno.nome;});    
console.log(aprovados);


var aprovados = avaliacoes.filter((prova)=>  prova.nota >= 7)
.map((prova) => prova.aluno.nome);
console.log(aprovados);

//-----------------------------------------
let numeros = [3,2,11,20,8,7];
let novosNumeros = numeros.map((item)=> (item % 2 + 1 ) * item);
let novosNumeros = numeros.map(item =>  item % 2 ? item * 2 : item);
console.log(novosNumeros);    


//-----------------------------------------

        let data = new Date(this._inputData.value.split('-'));
        let data2 = new Date(this._inputData.value.replace(/-/g,','));


        let data3 = new Date(...this._inputData.value
            .split('-')
            .map(function (item, index){
                if(index == 1){
                    return item-1;
                }            
                return item;
            }  

            )
        );      

        let data4 = new Date(...this._inputData.value
            .split('-')
            .map((item, index) => item - index % 2 )
        );


        let diaMesAno = negociacao.data.getDate() 
        + '/' + (negociacao.data.getMonth() +1)
        + '/' + negociacao.data.getFullYear();


         /*
            ${model.negociacoes.map(n =>{
                return `
                <tr>
                    <td>${DateHelper.dataParaTexto(n.data)}</td>
                    <td>${n.quantidade}</td>
                    <td>${n.valor}</td>
                    <td${n.volume}</td>                   
                </tr>
                `
            }).join('')}




             <td>
            ${
                (function(){
                    let total =0;
                    model.negociacoes.array.forEach(n =>  total+=n.volume);
                        return total;
                 })() //auto invocação
            }



             ${
               model.negociacoes.reduce(
                function(total,n){
                    return total + n.volume;
                },0.0)
            }
            
            */
    
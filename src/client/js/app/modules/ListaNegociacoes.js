class ListaNegociacoes{


    constructor(armadilha){
        this._negociacoes=[];
        this._armadilha = armadilha;
    }
    adiciona (negocicacao){
        this._negociacoes.push(negocicao);
        this._armadilha(this);
    }

    get negociacoes(){
        return [].concat(this._negociacoes);
    }


    esvazia(){
        this._negociacoes=[];
        this._armadilha(this);
    }

}
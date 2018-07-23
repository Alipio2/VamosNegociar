class View{

    constructor(elemento){
        this._elemeto=elemento;
    }

    template(model){
        throw  new Error('O metodo tamplate deve ser implementodo.');
    }

    update(model){
        this._elemeto.innerHTML= this._template(model);
    }
}
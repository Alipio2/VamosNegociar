class Negociacao {

constructor (data, quantidade, valor){

    this._data= new Data (data.getTime());
    this._quantidade =quantidade;
    this._valor= valor;

    Object.freeze(this);
}

get volume (){
 return this._quantidade * this._valor;
}

get data (){
return new Data (data.getTime())
}

get quantidade () {

return this._quantidade;
}

get valor(){
    
return this._valor;
}

}
class NegociacaoController{

    constructor(){

        let $ = document.querySelector.bind(document);
        this._inputData= $('#data');
        this._inputQuantidade =$('#quantidade');
        this._inputvalor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes(
            function(model){
                this._negociacoesView.update(model);
            }

        );
        this._negociacoesView = new NegocicaoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);
    }

    adiciona(event){
      
        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criarNegociacao());
       
        this._limpaFromulario();
       //  this._listaNegociacoes.negociacoes.push(this._criarNegociacao());

       this._mensagemView.update(this._mensagem);
        
        console.log(this._listaNegociacoes.negociacoes);
        console.log(negociacao);
        console.log(helper.dataParaTexto(negociacao.data));        
    }

    apaga(){
        this._listaNegociacoes.esvazia();
      
        this._mensagem.texto = "Negociações apagada com sucesso!";
        this._mensagemView.update(this._mensagem);

    }

    _criarNegociacao(){
        //let helper = new DateHelper ();
        return new NegociacaoController(
            helper.textoParaData(this._inputData.value),
            this._inputQuantidade,
            this._inputvalor);
        
        }

    _limpaFromulario(){

        this._inputData.value ='';
        this._inputQuantidade.value = 1;
        this._inputvalor.value =0.0;
        this._inputData.focus();
    }
}
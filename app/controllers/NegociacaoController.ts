import { Negociacao } from "../models/Negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";

export class NegociacaoController{

    private intputData: HTMLInputElement;
    private intputQuantidade: HTMLInputElement;
    private intputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();

    constructor()
    {
        this.intputData = document.querySelector("#data");
        this.intputQuantidade = document.querySelector("#quantidade");
        this.intputValor = document.querySelector("#valor");
    }

    adiciona() :void
    {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
        this.limpaFormulario();
    }

    criaNegociacao() :Negociacao
    {
        const exp = /-/g,
            date = new Date(this.intputData.value.replace(exp, ",")),
            quantidade = parseInt(this.intputQuantidade.value),
            valor = parseFloat(this.intputValor.value)
        ;

        return new Negociacao(date, quantidade, valor);
    }

    limpaFormulario() :void
    {
        this.intputData.value = '';
        this.intputQuantidade.value = '';
        this.intputValor.value = '';
        this.intputData.focus();
    }
}
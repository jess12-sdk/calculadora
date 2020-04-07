import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { estilos } from './assets/Estilos';
import Modifica from './Modifica';

const botoes = [
  ['LIMPAR', 'DEL'],
  ['7', '8', '9', '/'],
  ['4', '5', '6', 'x'],
  ['1', '2', '3', '-'],
  ['0', '.', '=', '+']
];

export default class App extends Component {

  constructor(){
    super()
    this.iniciaState = {
      valorSaida: '0',
      operador: null,
      primeiroValor: '',
      segundoValor: '',
      proximoValor: false
    }
    this.state = this.iniciaState;
  }

  renderBotao() {
    let exibe = botoes.map((buttonRows, index) =>  {
      let rowItem  = buttonRows.map((buttonItems, buttonIndex) => {
        return < Modifica 
          valor={buttonItems}
          pressionar={this.entrada.bind(this, buttonItems)}
          key={'btn-' + buttonIndex} />
      });
      return <View style={estilos.inputRow} key={'row-' + index}>{rowItem}</View>
    });
    return exibe
  }
  
  entrada = (input) => {
    const {valorSaida, operador, primeiroValor, segundoValor, proximoValor} = this.state;

    switch(input) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        this.setState({
          valorSaida: (valorSaida === '0') ? input : valorSaida + input
        })

        if(!proximoValor){
          this.setState({
            primeiroValor: primeiroValor + input
          })
        }else{
          this.setState({
            segundoValor: segundoValor + input
          })
        }

        break;
      case '+':
      case '-':
      case 'x':
      case '/':
        this.setState({
          proximoValor: true,
          operador: input,
          valorSaida: (operador !== null ? valorSaida.substr(0, valorSaida.length -1) : valorSaida) + input
        })
        break;
      case '.':
        let aux = valorSaida.toString().slice(-1) //pega o ultimo caractere
        this.setState({
          valorSaida: aux !== '.' ? valorSaida + input : valorSaida
        })

        if(!proximoValor){
          this.setState({
            primeiroValor: primeiroValor + input
          })
        }else{
          this.setState({
            segundoValor: segundoValor + input
          })
        }

        break;
      case '=':
        let mudaOP = (operador == 'x') ? '*' : operador
        let resultado = eval(primeiroValor + mudaOP + segundoValor)
        this.setState({
          valorSaida: resultado % 1 === 0 ? resultado : resultado.toFixed(2),
          primeiroValor: resultado % 1 === 0 ? resultado : resultado.toFixed(2),
          segundoValor: '',
          operador: null,
          proximoValor: false
        })
        break;

      case 'LIMPAR':
        this.setState(this.iniciaState)
        break;
      case 'DEL':
        let string = valorSaida.toString()
        let deletaString = string.substr(0, string.length -1)
        let tam = string.length;
        this.setState({
          valorSaida: tam == 1 ? '0' : deletaString
        })
        break;
    }
  }

  render() {
    return (
      <View style={estilos.container}>
        <View style={estilos.resultContainer}>
          <Text style={estilos.resultText}>
            {this.state.valorSaida}
          </Text>
        </View>

        <View style={estilos.inputContainer}>
          {this.renderBotao()}
        </View>
      </View>
    );
  }
}


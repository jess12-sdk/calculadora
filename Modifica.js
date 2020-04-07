import React, {Component} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { estilos } from './assets/Estilos';

export default class Modifica extends Component {
  render() {

    const {valor, pressionar} = this.props;
    
    return (
        <TouchableOpacity 
            style={estilos.container_1}
            onPress={() => pressionar(valor)} >
            <Text style={estilos.text}>{valor}</Text>
        </TouchableOpacity>
    );
  }
}
import {StyleSheet} from 'react-native';

export const estilos = StyleSheet.create({
    container: {
        flex: 1,
      },
      container_1: {
        flex: 1,
        margin: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        justifyContent: 'center',
        alignItems: 'center'
      },
      resultContainer: {
        flex: 2,
        justifyContent: 'center',
        backgroundColor: '#8B1A1A'
      },
      inputContainer: {
        flex: 8,
        backgroundColor: '#FF4040'
      },
      resultText: {
        color: 'white',
        fontSize: 80,
        fontWeight: 'bold',
        padding: 20,
        textAlign: 'right'
      },
      inputRow: {
        flex: 1,
        flexDirection: 'row'
      },
      text: {
        color: 'white',
        fontSize: 26
      }
})
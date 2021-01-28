import React, { Component } from 'react'
import { Alert, Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native'

export default class App extends Component {

    clicou = () => {
        Alert.alert("ENGLISH ON THE MOVE", "VOCÊ EXECUTOU A FUNÇÃO DE LOGIN")
    }

    render() {
        return (
           <View style={styles.container}>
    
            <Image 
                source={require('../assets/eotm.png')} 
                style={styles.logo}    
            />

            <TextInput
               style={styles.input}
               placeholder="Número de matrícula"
            />
    
            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Senha"
            />

            <TouchableOpacity 
            style={styles.botao}
            onPress={ () => {this.clicou()} }
            >
                <Text style={styles.botaoText}>Login</Text>

            </TouchableOpacity>


           </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "blue",
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius:100
    },
    input: {
        marginTop: 10,
        padding: 10,
        width: 300,
        backgroundColor: "white",
        fontsize: 16,
        fontweight: 'bold',
        borderRadius:3
    },
    botao: {
        width:300,
        height:42,
        backgroundColor: "red",
        marginTop:10,
        borderRadius:4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    botaoText: {
        fontsize: 16,
        fontweight: 'bold',
        color: 'white'
    }
})
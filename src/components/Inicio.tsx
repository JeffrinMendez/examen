import React from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Button } from "react-native";
import { useState } from 'react';

const Inicio = () => {


    const [usuario, setUsuario] = useState(' ')
    const [contraseña, setContraseña] = useState('')


    const iniciar = () => {

        if (usuario === 'hacker@gmail.com' && contraseña === '12345678') {

           




        }





    }



    return (

        <View style={styles.container}>
            <Text>Usuario</Text>



            <TextInput
                defaultValue={usuario}
                placeholder="  " style={{
                    borderColor: 'black',
                    borderWidth: 2,
                    borderRadius: 10,



                }}></TextInput>




            <Text>Contraseña</Text>

            <TextInput
                defaultValue={contraseña}

                placeholder="  " style={{
                    borderColor: 'black',
                    borderWidth: 2,
                    borderRadius: 10,



                }}></TextInput>
            <Button
                onPress={iniciar}
                title="Entrar"
                color="#22B5A3"
                accessibilityLabel="Learn more about this purple button"
            />




        </View>


    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Inicio;
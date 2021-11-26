import React, { Props } from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Button } from "react-native";
import { useState } from 'react';




const Inicio_sesion = ({navigation}:Props) => {


    const [usuario, setUsuario] = useState(' ')
    const [contraseña, setContraseña] = useState('')


    const iniciar = () => {

      
           
     


       


    }



    return (

        <View style={styles.container}>
            <Text>Usuario{usuario}</Text>



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
                onPress={() => navigation.navigate('Home')}
                title="Entrar"
                color="#22B5A3"
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

export default Inicio_sesion;
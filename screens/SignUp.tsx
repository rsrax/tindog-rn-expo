import firebase from '../firebase'
import React from 'react'
import { useState } from 'react'
import { StyleSheet, Text, View, Alert } from 'react-native'
import { KeyboardAvoidingView } from 'react-native'
import { Button, Input } from 'react-native-elements'

const SignUpScreen = ({navigation}: {navigation: any}) => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const SignUp = () => {
        if(email === '' && password === '') {
            navigation.navigate("SignUp")
          } else {
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then((res)=> {
                Alert.alert('SignUp successful.')
                navigation.navigate("Home")
            })
            .catch(error => {Alert.alert('SignUp Failed.')})
          }
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Text style={{marginBottom: 50, fontSize:20}}> Create a Tindog Account </Text>
        
            <View style={styles.inputContainer}>
                <Input placeholder="Email" autoFocus value={email} onChangeText={(text)=> setEmail(text)} leftIcon={{ type: 'font-feather', name: 'mail' }} />
                <Input placeholder="Password" autoFocus value={password} onChangeText={(text)=> setPassword(text)} leftIcon={{ type: 'font-feather', name: 'lock' }} />
            </View>
            <Button containerStyle={styles.button} onPress={SignUp} type="outline" title="SignUp" />
            <View style={{height:100}} />
        </KeyboardAvoidingView>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 10,
    },
    inputContainer: {
        width: 350,
    },
    button: {
        width: 250,
        marginTop: 15,
    },
})
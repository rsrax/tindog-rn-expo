import React from 'react'
import { useState } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input } from 'react-native-elements'
const LoginScreen = ({navigation}: {navigation: any}) => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const Login = () => {

    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            
            <View style={styles.inputContainer}>
                <Input placeholder="Email" autoFocus value={email} onChangeText={(text)=> setEmail(text)} leftIcon={{ type: 'font-feather', name: 'mail' }} />
                <Input placeholder="Password" secureTextEntry value={password} onChangeText={(text)=> setPassword(text)} leftIcon={{ type: 'font-feather', name: 'lock' }}/>
            </View>

            <Button containerStyle={styles.button} onPress={Login} title="Login" />
            <Button containerStyle={styles.button} onPress={()=> navigation.navigate("SignUp")} type="outline" title="SignUp" />
            <View style={{height:100}} />
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
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
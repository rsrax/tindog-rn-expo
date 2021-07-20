import React from 'react'
import { useState } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input } from 'react-native-elements'
const LogSignScreen = ({navigation}: {navigation: any}) => {
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Button containerStyle={styles.button} onPress={()=> navigation.navigate("Login")} title="Login With Facebook" />
            <Button containerStyle={styles.button} onPress={()=> navigation.navigate("Login")} title="Login With Google" />
            <Button containerStyle={styles.button} onPress={()=> navigation.navigate("Login")} title="Login" />
            <Button containerStyle={styles.button} onPress={()=> navigation.navigate("SignUp")} type="outline" title="SignUp" />
            <View style={{height:100}} />
        </KeyboardAvoidingView>
    )
}

export default LogSignScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
    button: {
        width: 250,
        marginTop: 15,
    },
})
/*
 * Design Native
 * Criado por Kaique
 * 
 * Baseado no Material
 * 
 */

//Importações

import React, { Component } from "react"
import { View, Text, StyleSheet, TextInput } from "react-native"
import { MaterialIcons as Icon } from "@expo/vector-icons"

//Interface padrão

interface defaultInterface {
    style?: object
    onClick?(): any
    onMove?(): any
}

interface defaultInterfaceText {
    style?: object
}

//Interface do Input

interface input {
    onChange?(): any
    autoCorrect?: boolean
    onFocus?: any
    style?: object
    placeholder?: string
    placeholderTextColor?: string
    autoCaptalize?: any
    keyboardType?: any
}

//Interface do Li

interface listElement extends defaultInterface {
    styleText: object
}

//Stylesheets

//Cabeçalho

const headerStyle = StyleSheet.create({
    header: {
        height: 50,
        backgroundColor: "#00ccaa",
        paddingHorizontal: 20,
        paddingVertical: 12,
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.34,
        elevation: 5,
    },
    text: {
        fontSize: 20,
    }
})

//Estilo do Botão

const buttonStyle = StyleSheet.create({
    button: {
        position: "absolute",
        backgroundColor: "#00ccaa",
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginBottom: 10,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOpacity: 0.38,
        elevation: 5,
    },
    buttonText: {
        textTransform: "uppercase",
    }
})

//Estilo do Button

const inputStyle = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderColor: "#ccc",
        marginBottom: 20,
        width: 240,
        paddingHorizontal: 20,
        paddingVertical: 12,
        fontSize: 18,
    },
})

//Estilo do AppBar

const appbarStyle = StyleSheet.create({
    appbar: {
        height: 50,
        backgroundColor: "#00ccaa",
        justifyContent: "center",
    },
    icon: {
        marginRight: 12,
        fontSize: 40,
    },
    text: {
        fontSize: 20,
    }
})

//Componentes

//Cabeçalho

export const Header: React.FC <defaultInterface> = (props) => (
    <View style={headerStyle.header}>
        <Text style={headerStyle.text}>
            {props.children}
        </Text>
    </View>
)

//AppBar

export const AppBar: React.FC <defaultInterface> = (props) => (
    <View 
        style={appbarStyle.appbar}
        onTouchStart={props.onClick}
        onTouchMove={props.onMove}
    >
        <Icon name="menu" style={[appbarStyle.icon, props.style]} />
        <Text>
            {props.children}
        </Text>
    </View>
)


//Título

export const Title: React.FC <defaultInterfaceText> = (props) => (
    <Text style={[{fontSize: 28, marginBottom: 10, color: "#00ccaa"}, props.style]}>
        {props.children}
    </Text>
)


//Subtítulo

export const Subtitle: React.FC <defaultInterfaceText> = (props) => (
    <Text style={
        [{fontSize: 24, marginBottom: 10, marginTop: -5, color: "#666"}, props.style]
    }>
        {props.children}
    </Text>
)


//P - Paragraph

export const P: React.FC <defaultInterfaceText> = (props) => (
    <Text style={
        [{fontSize: 14, color: "#666", marginBottom: 10,}, props.style]}
    >
        {props.children}
    </Text>
)


//H3

export const H3: React.FC <defaultInterfaceText> = (props) => (
    <Text style={[
        {marginBottom: 10, fontSize: 16}, props.style
    ]}>
        {props.children}
    </Text>
)


//Main

export const Main: React.FC <defaultInterface> = (props) => (
    <View style={
        [{paddingHorizontal: 20, paddingVertical: 20, marginBottom: 10,}, props.style]
    }>
        {props.children}
    </View>
)


//Center

export const Center: React.FC = (props) => (
    <View style={{flex: 1, alignItems: "center",}}>
        {props.children}
    </View>
)


//Section

export const Section: React.FC <defaultInterface> = (props) => (
    <View 
        style={props.style} 
        onTouchMove={props.onMove}
        onTouchStart={props.onClick}
    >
        {props.children}
    </View>
)


//Div

export const Div: React.FC <defaultInterface> = (props) => (
    <View 
        style={props.style} 
        onTouchMove={props.onMove}
        onTouchStart={props.onClick}
    >
        {props.children}
    </View>
)


//Aside

export const Aside: React.FC <defaultInterface> = (props) => (
    <View 
        style={props.style} 
        onTouchMove={props.onMove}
        onTouchStart={props.onClick}
    >
        {props.children}
    </View>
)


//Footer

export const Footer: React.FC <defaultInterface> = (props) => (
    <View
        style={props.style}
        onTouchStart={props.onClick}
        onTouchMove={props.onMove}
    >
        {props.children}
    </View>
)


//Button

export const Button: React.FC <defaultInterface> = (props) => (
    <View>
        <View style={buttonStyle.button}>
            <Text style={buttonStyle.buttonText}>
                {props.children}
            </Text>
        </View>
    </View>
)


//Input

export class Input extends Component <input> {
    state = {
        border: "#ccc",
    }

    render() {
        return (
            <TextInput 
                placeholder={this.props.placeholder} 
                autoCorrect={this.props.autoCorrect === true && true}
                style={[inputStyle.input, this.props.style]}
                placeholderTextColor={this.props.placeholderTextColor}
                onChangeText={this.props.onChange}
                autoCapitalize={this.props.autoCaptalize}
                keyboardType={this.props.keyboardType}
            />
        )
    }
}


//Nav

export const Nav: React.FC <defaultInterface> = (props) => (
    <View 
        style={props.style} 
        onTouchStart={props.onClick}
        onTouchMove={props.onMove}
    >
        {props.children}
    </View>
)


//Ul

export const Ul: React.FC <defaultInterface> = (props) => (
    <View 
        style={props.style} 
        onTouchStart={props.onClick} 
        onTouchMove={props.onMove}
    >
        {props.children}
    </View>
)


//Li

export const Li: React.FC <listElement> = (props) => (
    <View 
        style={props.style}
        onTouchStart={props.onClick}
        onTouchMove={props.onMove}
    >
        <Text style={props.styleText}>
            • {props.children}
        </Text>
    </View>
)

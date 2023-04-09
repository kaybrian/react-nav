import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Home = () => {
  const onLogin = () => {
    console.log('Login')
  }
  const onForgotPassword = () => {
    console.log('Forgot Password')
  }
  const onRegister = () => {
    console.log('Register')
  }
  return (
    <View className="flex felx-1 justify-center items-center">
      <Text>Home</Text>
      <View className="flex flex-row items-center justify-start">
        <TouchableOpacity onPress={onLogin} className="bg-blue-50 rounded-sm py-2 px-3 m-2">
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onRegister} className="bg-blue-50 rounded-sm py-2 px-3 m-2">
          <Text>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onForgotPassword} className="bg-blue-50 rounded-sm py-2 px-3 m-2">
          <Text>Forgot Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home

import {View,Text,TextInput,TouchableOpacity,StyleSheet} from 'react-native';
import React, { useState } from 'react';
import { styles } from '../styles/Loginpage.js';
import { useNavigation } from '@react-navigation/native';

export const Loginpage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
    navigation.navigate('ChatList'); // Navigate to ChatList on successful login
  };

  return (
    <View style={styles.login_container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
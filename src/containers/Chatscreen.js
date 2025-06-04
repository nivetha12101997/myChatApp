import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from '../styles/Chatscreen_styles.js';
import { chatData } from '../dummyData/ChatData.js';
import { useNetInfo } from '@react-native-community/netinfo';


export const Chatscreen = (props) => {
    console.log("ChatScreen props", props.route.params);
    const { chatName } = props.route.params;
    const [message, setMessage] = useState('');
    const [chatMessages, setChatMessages] = useState(chatData);

        useEffect(() => {
        console.log(chatName);
        const filteredMessage= chatMessages.filter((item) => item.name === chatName);
        
        setChatMessages(filteredMessage[0].messages);
        console.log("Filtered Messages:", filteredMessage);
    }, [chatName]);

    const sentMessage=(message)=>{
        const newMessage = {
            text: message,
            timestamp: new Date().toLocaleTimeString(),
            sender: 'You'
        };
        setChatMessages(prev=>[...prev, newMessage]);
        setMessage('');

    }

    const renderChatBubble = ({ item }) => {
        console.log("Chat Bubble Item:", item);
        return (
            <View style={[styles.chatBubble,item.sender==='You' ? styles.sender : styles.receiver]} key={item.id}>
                <Text>{item.text}</Text>
                <Text style={{ fontSize: 10, color: 'gray' }}>{item.timestamp}</Text>
            </View>
        );
    }


    return (
        <View>
            {/* <Text>ChatScreen for {chatName} </Text> */}
            <View>
                <FlatList style={styles.chatScreen_container} data={chatMessages} renderItem={renderChatBubble} keyExtractor={(item,index) =>index } />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
            <TextInput
                style={styles.input}
                placeholder="Type a message"
                value={message}
                onChangeText={setMessage}
            />
            <TouchableOpacity style={styles.button} onPress={() => sentMessage(message)}>
                <Text style={styles.buttonText}>Send</Text>
            </TouchableOpacity>
            </View>

        </View>
    )
}
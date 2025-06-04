import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from '../styles/Chatscreen_styles.js';
import { chatData } from '../dummyData/ChatData.js';


export const Chatscreen = (props) => {
    console.log("ChatScreen props", props.route.params);
    const { chatName } = props.route.params;
    const [message, setMessage] = useState('');
        useEffect(() => {
        console.log(chatName);
        const filteredMessage= chatData.filter((item) => item.name === chatName);
        
        setMessage(filteredMessage[0].messages);
        console.log("Filtered Messages:", filteredMessage);
    }, [chatName]);

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
                <FlatList style={styles.chatScreen_container} data={message} renderItem={renderChatBubble} keyExtractor={(item,index) =>index } />
            </View>
            {/* <TextInput
                style={styles.input}
                placeholder="Type a message"
                value={message}
                onChangeText={setMessage}
            />
            <TouchableOpacity style={styles.button} onPress={() => console.log('Send message:', message)}>
                <Text style={styles.buttonText}>Send</Text>
            </TouchableOpacity> */}
        </View>
    )
}
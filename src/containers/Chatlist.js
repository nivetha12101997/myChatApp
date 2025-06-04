import {View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../styles/Chatlist_styles.js';
import { chatListData } from '../dummyData/ChatList.js';
import { useNavigation } from '@react-navigation/native';

export const Chatlist = () => {
    const navigation = useNavigation();
    const navigateToChatScreen = (chatName) => {
        console.log(`Navigating to chat screen for: ${chatName}`);
        navigation.navigate('ChatScreen', { chatName: chatName });
    };
    const renderData=({item,index})=>{
        return(
            <TouchableOpacity onPress={()=>navigateToChatScreen(item.name)}>
            <View style={styles.chatlist_item}>
                <Text style={styles.chatlist_item_text}>{item.name}</Text>

            </View>
            </TouchableOpacity>

        )
    }
    return(
        <View style={styles.chatlist_container}>
            {/* <Text>ChatList Page</Text> */}
            <FlatList
            data={chatListData}
            renderItem={renderData}
            keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}
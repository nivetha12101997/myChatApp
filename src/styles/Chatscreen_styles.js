import {View, Text,TextInput, TouchableOpacity, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({  
    chatBubble:{
        maxWidth: '80%',
         padding: 10,
        borderRadius: 15,
        marginVertical: 25,
        backgroundColor:'blue',
        marginHorizontal:12,

    },
    chatScreen_container:{
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'start',
    },
    sender:{
        alignSelf: 'flex-end',
        backgroundColor: '#DCF8C6',
    },
    receiver:{
        alignSelf: 'flex-start',
        backgroundColor: '#ECE5DD',
    },
    input: {
        flex: 1,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#f0f0f0',
        marginRight: 10,
    },
});
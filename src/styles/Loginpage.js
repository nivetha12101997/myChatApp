import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    login_container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '80%',
        padding: 10,
        borderRadius: 5,
    },
    button:{
        width: '80%',
        padding: 10,
        backgroundColor: '#007BFF',
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    }
}); 

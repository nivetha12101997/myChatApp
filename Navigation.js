import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Loginpage } from './src/containers/Loginpage';             
import { Chatlist } from './src/containers/Chatlist';
import { Chatscreen } from './src/containers/Chatscreen';   

export const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Loginpage} />
        <Stack.Screen name="ChatList" component={Chatlist} />
        <Stack.Screen name="ChatScreen" component={Chatscreen} options={({route})=>({headerTitle:route.params.chatName})}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
import { NavigationContainer, useScrollToTop } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './telas/Home';
import Cadastrar from './telas/Cadastrar';
import Login from './telas/Login';
import Tasks from './telas/Tasks';
import Perfil from './telas/Perfil';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import {  useEffect, useState } from 'react';
import AS from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
<Tab.Navigator
screenOptions={{
    headerLeft: () => null,
    headerBackTitle: "Voltar",
            headerBackAccessibilityLabel: "Voltar para tela anterior",
            headerStyle: {
                backgroundColor: 'rgb(60,60,60)',
},
headerTintColor: "#fff",
            headerTitleAlign: "center",
            tabBarStyle: {
                backgroundColor: 'rgb(45,45,45)',
            },
            tabBarLabelStyle: {
                color: '#fff',
            },
            tabBarActiveBackgroundColor: "rgb(60,60,60)"
}}
>
    <Tab.Screen
    name="Tasks"
    component={Tasks}
    options={{
        tabBarIcon: () => <FontAwesome name='tasks' size={24} color="white" />
    }}
    />
    <Tab.Screen
    name="Perfil"
    component={Perfil}
    options={{
        tabBarIcon: () => <AntDesign name='profile' size={24} color="white" />
    }}
    />
</Tab.Navigator>
    );
}

export default function Routes() {
    const [logado, setLogado] = useState(null);

    useEffect(() => {
        const statusLogado = async () => {
            const estaLogado = await 
            AS.getItem("logado")
                setLogado(estaLogado === "true");
            };
            statusLogado();
      }, []);

if (logado === null) return null;
return (
    <NavigationContainer>
        <Stack.Navigator
        initialRouteName={logado ? "Tabs" : "Home"}
        screenOptions={{
            headerBackTitle: "Voltar",
            headerBackAccessibilityLabel: "Voltar para tela anterior",
            headerStyle: {
                backgroundColor: 'rgb(60,60,60)',
            },
            headerTintColor: "#fff",
            headerTitleAlign: "center"
        }}
        >
            <Stack.Screen 
            name="Home"
            component={Home}
            />
            <Stack.Screen 
            name="Cadastrar"
            component={Cadastrar}
            />
            <Stack.Screen 
            name="Login"
            component={Login}
            />
            <Stack.Screen 
            name="Tabs"
            component={Tabs}
            options={{
                headerShown: false
            }}
            />
        </Stack.Navigator>
    </NavigationContainer>
)
}
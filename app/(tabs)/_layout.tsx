import React from 'react';
import { Stack, useRouter } from 'expo-router';
import { Pressable } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const App = () => {
    const router = useRouter();

    return (
        <Stack>
            <Stack.Screen 
                name="index" options={{
                    title: "BACK",
                    headerStyle: { backgroundColor: '#000' },
                    headerTintColor: 'grey',
                    headerTitleStyle: { fontFamily: 'CircularLight', fontSize: 17 },
                    headerLeft: () => (
                        <Pressable 
                            onPress={() => router.back()} 
                            style={{ paddingHorizontal: 3 }}
                        >
                            <AntDesign name="left" size={24} color="grey" />
                        </Pressable>
                    )
                }} 
            />
        </Stack>
    );
};

export default App;

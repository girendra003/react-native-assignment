import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { StatusBar } from 'expo-status-bar';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

// Fix: Use an object to store video paths
const videoSources: { [key: string]: any } = {
    "clip1": require("@/assets/video/clip1.mp4"),
    "clip2": require("@/assets/video/clip2.mp4"),
};

const Carousel1 = ({ title }: { title: string }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black', borderWidth: 1, borderColor: "white" }}>
            <StatusBar hidden={true} />

            <View style={{ flex: 1 }}>
                <Video
                    source={videoSources[title]}
                    style={{ width: '100%', height: 250, overflow: 'hidden' }}
                    shouldPlay
                    isLooping
                    resizeMode={ResizeMode.COVER}
                />

                <View style={{ flexDirection: "row", flexWrap: 'wrap', alignItems: "center", marginLeft: 10, marginTop: 12, marginRight: 10 }}>
                    <Text style={{ color: "lightyellow", textAlign: 'left', marginRight: 10, fontFamily: 'CircularBook', fontSize: 19, flexShrink: 1 }}>
                        intro to coding with web dev
                    </Text>
                    <View style={{ backgroundColor: "white", borderRadius: 100 }}>
                        <Feather name="globe" size={24} color="aqua" />
                    </View>
                </View>

                <Text style={{ color: "lightyellow", marginTop: 10, fontFamily: 'CircularLight', padding: 14, fontSize: 13 }}>
                    start building websites with html & css, the building blocks that power the web. grow into full-stack coding!
                </Text>

                <View style={{ flexDirection: "row", justifyContent: "center", padding: 10 }}>
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 10, borderColor: "white", borderWidth: 1, paddingLeft: 23, paddingRight: 23 }}>
                        <Text style={{ color: "white", fontFamily: 'CircularLight', paddingRight: 7 }}>VIEW TRACK DETAILS</Text>
                        <FontAwesome5 name="arrow-right" size={20} color="white" />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Carousel1;
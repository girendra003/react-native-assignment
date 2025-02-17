import React from 'react';
import { View, Text, SafeAreaView, FlatList, Image,ScrollView } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { StatusBar } from 'expo-status-bar';
import Feather from '@expo/vector-icons/Feather';// globe icon
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';// cursor icon
import AntDesign from '@expo/vector-icons/AntDesign'; // check icon

const combinedData = [
    { id: "1", name: "HTML", image: require('@/assets/images/htmlImg.png') },
    { id: "2", name: "CSS", image: require('@/assets/images/cssImg.png') },
    { id: "3", name: "TAILWIND", image: require('@/assets/images/tailwindImg.png') },
    { id: "4", name: "JAVASCRIPT", image: require('@/assets/images/javaScrImg.png') },
    { id: "5", name: "CURSOR.AI", image: require('@/assets/images/cursoraiImg.png') },
    { id: "6", name: "GSAP ANIMATION", image: require('@/assets/images/gsapImg.png') },
    { id: "7", name: "FRAMER MOTION", image: require('@/assets/images/framerImg.png') },
];

const Detail1 = () => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'black' }}>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
            <StatusBar hidden={true} />

            <View style={{ flex: 1 }}>
                <View>
                    <Video
                        source={require('@/assets/video/clip1.mp4')}
                        style={{ width: '100%', height: 250, overflow: 'hidden' }}
                        shouldPlay
                        isLooping
                        resizeMode={ResizeMode.COVER}
                    />
                    <Image source={require('@/assets/images/logoDetail1.png')} style={{ width: 50, height: 50,position:'absolute',right:10,top:9 }} />

                </View>

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

                <View style={{
                    borderStyle: 'dashed',
                    borderTopWidth: 1,
                    borderBottomWidth: 1,
                    borderTopColor: 'grey',
                    borderBottomColor: 'grey',
                    paddingBottom: 15,
                }}>
                    <Text style={{ color: "white", fontFamily: "CircularLight", paddingBottom: 14, fontSize: 13 }}>
                        <MaterialCommunityIcons name="cursor-pointer" size={24} color="grey" /> TOOLS COVERED (7)
                    </Text>

                    <FlatList
                        data={combinedData}
                        keyExtractor={(item) => item.id}
                        horizontal
                        renderItem={({ item }) => (
                            <View style={{ width: 80, height: 50, alignItems: "center", marginBottom: 5, backgroundColor: 'black', marginRight: 10 }}>
                                <Image source={item.image} style={{ width: 30, height: 30, marginBottom: 5 }} />
                                <Text style={{ color: "white", fontFamily: "CircularLight", fontSize: 13, marginTop: 5, textAlign: 'center' }}>
                                    {item.name}
                                </Text>
                            </View>
                        )}
                    />
                </View>
                <View>
                    <Text style={{ color: 'white', fontFamily: 'CooperHewittMedium', marginLeft: 20, marginTop: 20, fontSize: 20 }} >
                        let's choose your starting point for this track ⛳️
                    </Text>
                    <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                        <View style={{ marginVertical: 5, justifyContent: 'flex-start' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                                <AntDesign name="check" size={15} color="lightgreen" />
                                <Text style={{ color: "white", textAlign: 'left', paddingHorizontal: 10, fontFamily: 'CircularLight' }}>
                                    you're assigned sub-skill
                                    <MaterialCommunityIcons name="signal" size={24} color="yellow" />
                                   <Text style={{color:'yellow'}}>LEVEL 3</Text>
                                </Text>
                            </View>
                            <Text style={{ color: "white", textAlign: 'left', paddingHorizontal: 30, fontFamily: 'CircularLight' }}>
                                based on your answers.
                            </Text>

                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                            <AntDesign name="check" size={15} color="lightgreen" />
                            <Text style={{ color: "white", paddingHorizontal: 10, fontFamily: 'CircularLight' }}>
                                you can change levels if you wish!
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
        </ScrollView>

    );
};

export default Detail1;

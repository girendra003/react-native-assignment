import React from 'react';
import { View, Text, SafeAreaView, FlatList, Image,ScrollView } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { StatusBar } from 'expo-status-bar';
import Feather from '@expo/vector-icons/Feather';// globe icon
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';// cursor icon
import AntDesign from '@expo/vector-icons/AntDesign'; // check icon

const combinedData = [
    { id: "1", name: "PYTON", image: require('@/assets/images/images/python.png') },
    { id: "3", name: "PANDAS", image: require('@/assets/images/images/pandas.png') },
    { id: "2", name: "NUMPY", image: require('@/assets/images/images/numpy.png') },
    { id: "4", name: "FAST.AI", image: require('@/assets/images/images/fastAi.png') },
    { id: "5", name: "GOOGLE COLLAB", image: require('@/assets/images/images/googleClb.png') },
    { id: "6", name: "SCIKITLEARN  ", image: require('@/assets/images/images/scikit.png') },
];

const Detail2 = () => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'black' }}>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
            <StatusBar hidden={true} />

            <View style={{ flex: 1 }}>
                <View>
                    <Video
                        source={require('@/assets/video/clip2.mp4')}
                        style={{ width: '100%', height: 250, overflow: 'hidden' }}
                        shouldPlay
                        isLooping
                        resizeMode={ResizeMode.COVER}
                    />
                    <Image source={require('@/assets/images/logoDetail1.png')} style={{ width: 50, height: 50,position:'absolute',right:10,top:9 }} />

                </View>

                <View style={{ flexDirection: "row", flexWrap: 'wrap', alignItems: "center", marginLeft: 10, marginTop: 12, marginRight: 10 }}>
                    <Text style={{ color: "lightyellow", textAlign: 'left', marginRight: 10, fontFamily: 'CircularBook', fontSize: 19, flexShrink: 1 }}>
                    intro to coding with ai python 🤖
                    </Text>
                    
                </View>

                <Text style={{ color: "lightyellow", marginTop: 10, fontFamily: 'CircularLight', padding: 14, fontSize: 13 }}>
                learn python basics and dive into ai. build practical ai apps, get hands-on with ml models and grow into ai engineering!
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
                        <MaterialCommunityIcons name="cursor-pointer" size={24} color="grey" /> TOOLS COVERED (6)
                    </Text>

                    <FlatList
                        data={combinedData}
                        keyExtractor={(item) => item.id}
                        horizontal
                        renderItem={({ item }) => (
                            <View style={{ width: 80, height: 50, alignItems: "center", marginBottom: 5, backgroundColor: 'black', marginRight: 10 }}>
                                <Image source={item.image} style={{ width: 30, height: 30, marginBottom: 5 }} />
                                    <Text style={{ color: "white", fontFamily: "CircularLight", fontSize: 13, marginTop: 5, textAlign: 'center',width:90 }}>
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

export default Detail2;

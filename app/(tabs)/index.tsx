import React, { useRef } from 'react';
import { View, Text, SafeAreaView, } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { StatusBar } from 'expo-status-bar';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
const Carousel1 = () => {
  const videoRef = useRef(null);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black', paddingTop: 50 }}>
      <StatusBar hidden={true} />

      <View style={{ flex: 1 }}>
        <Video
          ref={videoRef}
          source={require('@/assets/video/clip1.mp4')}
          style={{ width: '99%', height: 300, borderRadius: 10, overflow: 'hidden' }}
          shouldPlay
          isLooping
          resizeMode={"cover" as ResizeMode}
        />

        <View style={{ flexDirection: "row", alignItems: "center", padding: 0 }}>
          <Text style={{ color: "lightyellow", textAlign: 'left', marginRight: 10, fontFamily: 'CircularBook', fontSize: 18 }}>
            intro to coding with web dev
          </Text>
          <View style={{ backgroundColor: "white", borderRadius: 100 }}>
            <Feather name="globe" size={24} color="aqua" />
          </View>
        </View>


        <Text style={{ color: "lightyellow", marginTop: 10, fontFamily: 'CircularLight', fontSize: 18 }}>
          start building websites with html & css, the building blocks that power the web. grow into full-stack coding!
        </Text>

        <View style={{ flexDirection: "row", justifyContent: "center", padding: 10 }}>
          <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 10, borderColor: "white", borderWidth: 1 }}>
            <Text style={{ color: "white", fontFamily: 'CircularLight' }}>VIEW TRACK DETAILS</Text>
            <FontAwesome5 name="arrow-right" size={20} color="white" />
          </View>
        </View>
      </View>

    </SafeAreaView>
  );
};

export default Carousel1;

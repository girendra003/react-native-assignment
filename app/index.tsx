import React from 'react';
import { ImageBackground, AppRegistry, StyleSheet, View, Text, Image, FlatList, Dimensions } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from 'expo-router';
import Carouselcomp1 from './components/carosuelComp1';
const data = [
    { id: "1", title: "clip1" },
    { id: "2", title: "clip2" },
];

const { width } = Dimensions.get("window");

const App = () => {
    return (
        <ImageBackground
            source={{ uri: 'https://i.pinimg.com/736x/26/79/33/267933960f566c4d6ed02bd55890f7c7.jpg' }}
            style={styles.background}
            resizeMode="cover"
        >
            {/* This is header of page*/}
            <View style={{ flex: 1, flexDirection: 'row' }}>
                {/* title of the page */}
                <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'NTBrickSans', fontSize: 20, color: "white", paddingBottom: 5 }}>pick your track</Text>
                    <Text style={{ fontFamily: 'NTBrickSans', fontSize: 20, color: "yellow" }}>time to build 🚀</Text>
                </View>
                {/* page logo is here  */}
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'NTBrickSans', color: "#00EB97", marginTop: 12 }}>tech</Text>
                    <Image source={require('@/assets/images/appLogo.png')} style={{ width: 50, height: 50 }} />
                </View>
            </View>
            {/* we are going to insert key points here */}
            <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flex: 1, flexDirection: 'column', marginLeft: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                        <AntDesign name="check" size={15} color="lightgreen" />
                        <Text style={{ color: "white", textAlign: 'center', paddingHorizontal: 10 }}>
                            switch or add tracks anytime as you grow
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                        <AntDesign name="check" size={15} color="lightgreen" />
                        <Text style={{ color: "white", paddingHorizontal: 10 }}>
                            complete your track to unlock new skills and projects!
                        </Text>
                    </View>
                </View>
                <View style={{ flex: 6, flexDirection: 'column', marginLeft: 20 }}>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id}
                        horizontal
                        pagingEnabled // Ensures full-page swipe
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View
                                style={{
                                    width,
                                    height: 500,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    // backgroundColor: "#ddd",
                                    paddingRight: 50,
                                }}
                            >
                                <Carouselcomp1 title={item.title}/>
                            </View>
                        )}
                        />
                </View>
                <Link href='/(tabs)' style={{color:"white"}}>Go to tab</Link>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
});

AppRegistry.registerComponent('main', () => App);

export default App;
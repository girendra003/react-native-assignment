import React from 'react';
import { ImageBackground, AppRegistry, StyleSheet, View, Text, Image, FlatList, Dimensions } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from 'expo-router';
import Carouselcomp1 from '@/components/Mycomp/CarouselComp1';
import Carouselcomp2 from '@/components/Mycomp/CarouselComp2';

// Sample data for the carousel
const data = [
    { id: "1", title: Carouselcomp1 },
    { id: "2", title: Carouselcomp2 },
];

const { width } = Dimensions.get("window");

const App = () => {
    return (
        <ImageBackground
            source={{ uri: 'https://i.pinimg.com/736x/26/79/33/267933960f566c4d6ed02bd55890f7c7.jpg' }}
            style={styles.background}
            resizeMode="cover"
        >
            {/* Header of the page */}
            <View style={{ flex: 1, flexDirection: 'row' }}>

                {/* Title of the page */}
                <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'NTBrickSans', fontSize: 20, color: "white", paddingBottom: 5 }}>pick your track</Text>
                    <Text style={{ fontFamily: 'NTBrickSans', fontSize: 20, color: "yellow" }}>time to build 🚀</Text>
                </View>
                
                {/* Page logo */}
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'NTBrickSans', color: "#00EB97", marginTop: 12 }}>tech</Text>
                    <Image source={require('@/assets/images/appLogo.png')} style={{ width: 50, height: 50 }} />
                </View>
            </View>
            
            {/* Key points section */}
            <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flex: 1, flexDirection: 'column', marginLeft: 20 }}>
                    {/* Key point 1 */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                        <AntDesign name="check" size={15} color="lightgreen" />
                        <Text style={{ color: "white", textAlign: 'center', paddingHorizontal: 10 }}>
                            switch or add tracks anytime as you grow
                        </Text>
                    </View>
                    {/* Key point 2 */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                        <AntDesign name="check" size={15} color="lightgreen" />
                        <Text style={{ color: "white", paddingHorizontal: 10 }}>
                            complete your track to unlock new skills and projects!
                        </Text>
                    </View>
                </View>
                
                {/* Carousel section */}
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
                                    width: width - 70,
                                    height: 500,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    paddingRight: 20,
                                }}
                            >   
                                <item.title/>
                            </View>
                        )}
                    />
                </View>
                
                {/* Navigation link */}
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
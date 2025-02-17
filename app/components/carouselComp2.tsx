import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Video } from 'expo-av';

const Carousel1 = () => {
  return (
    <View style={styles.container}>
      <Video
        source={require('@/assets/video/clip2.mp4')} // ✅ Correct path
        style={styles.video}
        shouldPlay={true} // Auto-play
        isLooping={true} // Loop the video
        useNativeControls // Show Play/Pause controls
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  video: {
    width: '100%',
    height: 300,
  },
});

export default Carousel1;

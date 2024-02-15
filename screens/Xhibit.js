import React, { useState, useRef } from 'react';
import { SafeAreaView, Animated, ImageBackground } from 'react-native';

import FakeNavBar from './FakeNavBar';

const Xhibit = () => {
    const [isNavBarVisible, setIsNavBarVisible] = useState(true);
    const fakeNavBarRef = useRef(null);  // Use useRef for the FakeNavBar component
    const scrollY = useRef(new Animated.Value(0)).current;
    const navBarOpacity = scrollY.interpolate({
        inputRange: [0, 50],  // Adjust the range as needed
        outputRange: [1, 0],
        extrapolate: 'clamp',
    });

    return (
        <ImageBackground
            source={require('../assets/doodle.jpg')}
            style={{ flex: 1 }}
        >
            <SafeAreaView style={{ flex: 1 }}>
                <Animated.View
                    style={{
                        ...styles.fakeNavBarContainer,
                        opacity: navBarOpacity,
                        display: isNavBarVisible ? 'flex' : 'none', // Show/hide based on state
                    }}
                >
                    <FakeNavBar onCartAdd={(triggerAnimation) => (fakeNavBarRef.current = { triggerCircleAnimation: triggerAnimation })} />
                </Animated.View>
            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = {
    fakeNavBarContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Adjust the background color and opacity as needed
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        paddingVertical: 10,
        zIndex: 2,
    },
};

export default Xhibit;

import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FakeNavBar = ({ onCartAdd }) => {
    const navigation = useNavigation();
    const scaleValue = useRef(new Animated.Value(1)).current;
    const [borderColor, setBorderColor] = useState('#fff');
    const [circleContainerBorderWidth, setCircleContainerBorderWidth] = useState(0);
    const [borderColors, setBorderColors] = useState(['#8a2be2']); // Add more colors if needed
    const [currentColorIndex, setCurrentColorIndex] = useState(0);
    const [circleContainerRotation] = useState(new Animated.Value(0));
    const categoriesImageScale = useRef(new Animated.Value(1)).current;
    const categoriesImageRotation = useRef(new Animated.Value(0)).current;


    useEffect(() => {
        // Listen for changes in the cart and trigger animation accordingly
        if (onCartAdd) {
            onCartAdd(triggerCircleAnimation);
        }
    }, [onCartAdd]);

    const triggerCircleAnimation = () => {
        Animated.timing(scaleValue, {
            toValue: 0.8,
            duration: 200,
            easing: Easing.ease,
            useNativeDriver: true,
        }).start();

        setBorderColor(borderColors[currentColorIndex]);
        setCurrentColorIndex((prevIndex) =>
            prevIndex === borderColors.length - 1 ? 0 : prevIndex + 1
        );

        Animated.timing(circleContainerRotation, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start();

        setCircleContainerBorderWidth(3);

        Animated.parallel([
            Animated.timing(categoriesImageScale, {
                toValue: 0.5,
                duration: 1000,
                easing: Easing.ease,
                useNativeDriver: true,
            }),
            Animated.timing(categoriesImageRotation, {
                toValue: 1,
                duration: 1000,
                easing: Easing.linear,
                useNativeDriver: true,
            }),
        ]).start();

        setTimeout(() => {
            retractAnimation();
        }, 1000);
    };

    const retractAnimation = () => {
        Animated.timing(scaleValue, {
            toValue: 1,
            duration: 200,
            easing: Easing.ease,
            useNativeDriver: true,
        }).start(() => {
            setBorderColor('#fff');
            setCircleContainerBorderWidth(0);
            circleContainerRotation.setValue(0);
            categoriesImageScale.setValue(1);
            categoriesImageRotation.setValue(0);
        });
    };

    const handleCreatePress = () => {
        navigation.navigate("CreatePost");
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.navItem} onPress={handleCreatePress}>
                <Image source={require('../assets/register.png')} style={[styles.navImage, styles.centerImage]} />
                <Text style={styles.navText}>Create Post</Text>
            </TouchableOpacity>
            <Animated.View
                style={[
                    styles.circleContainer,
                    {
                        borderColor,
                        borderWidth: circleContainerBorderWidth,
                        transform: [
                            {
                                rotate: circleContainerRotation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ['0deg', '360deg'],
                                }),
                            },
                            {
                                scale: scaleValue,
                            },
                        ],
                    },
                ]}
            >
                <TouchableOpacity
                    style={styles.circleButton}
                    onPress={triggerCircleAnimation}
                >
                    <Image source={require('../assets/categories.png')} style={styles.navImage2} />
                </TouchableOpacity>
            </Animated.View>
            <TouchableOpacity style={styles.navItem2}>
                <Image source={require('../assets/add.png')} style={styles.navImage} />
                <Text style={styles.navText}>Add Item</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        paddingVertical: 10,
        position: 'absolute', // Fix the navbar at the bottom
        bottom: 0, // Align with the bottom of the screen
        width: '100%', // Occupy the full width
        height: 70
    },
    navItem: {
        alignItems: 'center',
        paddingTop: 5
    },
    navItem2: {
        alignItems: 'center',
        paddingTop: 5,
        paddingRight: 10,
        paddingLeft: 10
    },
    navImage: {
        width: 30,
        height: 30,
        marginBottom: 5,
    },
    navImage2: {
        width: 50,
        height: 50,
    },
    centerImage: {
        transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
    },
    navText: {
        fontSize: 12,
    },
    circleContainer: {
        position: 'relative',
        top: -25,
        borderRadius: 999,
        overflow: 'hidden',
        backgroundColor: '#fff',
        marginLeft: -70,
        marginRight: -70,
        // Add shadow for iOS
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        // Add elevation for Android
        elevation: 7,
        borderWidth: 0, // Initial border width
    },
    circleButton: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 999,
    },
    backgroundCircle: {
        position: 'absolute',
        top: -80, // Adjust the positioning based on your design
        left: -80,
        width: 240, // Adjust the size based on your design
        height: 240,
        borderRadius: 120, // Half of the width/height to make it a circle
    },
});

export default FakeNavBar;

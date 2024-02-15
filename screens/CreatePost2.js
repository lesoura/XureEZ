import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from '../styles/styles2';
import { useNavigation } from '@react-navigation/native';
import { Modalize } from 'react-native-modalize';
import { CountryPicker } from 'react-native-country-codes-picker'; // Import the CountryPicker component

const CreatePost2 = ({ route }) => {
    const { selectedImage, selectMultipleMode } = route.params;
    const [caption, setCaption] = useState('');
    const navigation = useNavigation();
    const modalizeRef = React.useRef(null);
    const [selectedCountry, setSelectedCountry] = useState('');

    const goBack = () => {
        navigation.goBack();
    };

    const openModal = () => {
        modalizeRef.current?.open();
    };

    const closeModal = () => {
        modalizeRef.current?.close();
    };

    const [audienceText, setAudienceText] = useState('Everyone');

    // Country Picker
    const LocationPicker = () => {
        const [show, setShow] = useState(false);

        const handleCountrySelection = (item) => {
            setSelectedCountry(item.flag + ' ' + item.name.en + " ");  // Set the selected country
            setShow(false);
        };

        return (
            <TouchableOpacity
                onPress={() => setShow(true)}
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '100%', // Set the width to take the whole space
                }}
            >
                <Text style={styles.label}>
                    {selectedCountry ? (
                        <>
                            <Text style={styles.selectedCountry}>{selectedCountry}</Text>
                        </>
                    ) : (
                        'Add Location'
                    )}
                </Text>
                <Image source={require('../assets/locationg.png')} style={styles.icon2} />

                <CountryPicker
                    show={show}
                    pickerButtonOnPress={handleCountrySelection}
                />
            </TouchableOpacity>
        );
    };


    const renderBottomSheet = () => {
        const [selectedOption, setSelectedOption] = useState('Everyone');

        const handleBulletPress = (option) => {
            if (option === 'Everyone') {
                setSelectedOption('Everyone');
                setAudienceText('Everyone');
            } else if (option === 'Followers') {
                setSelectedOption('Followers');
                setAudienceText('Followers');
            }
            closeModal();
        };

        return (
            <Modalize
                ref={modalizeRef}
                adjustToContentHeight
                modalStyle={styles.bottomSheet}
            >
                <Text style={styles.bottomSheetTitle}>Audience Settings</Text>
                <Text style={styles.bottomSheetSubtitle}>
                    Your post will be visible in Xhibit, on your profile, and within search results.
                </Text>

                {/* Everyone Option */}
                <TouchableOpacity
                    style={styles.audienceOption}
                    onPress={() => handleBulletPress('Everyone')}
                >
                    <Text style={styles.audienceLabel}>Everyone</Text>
                    <Image
                        source={selectedOption === 'Everyone' ? require('../assets/selectedBullet.png') : require('../assets/bullet.png')}
                        style={styles.bulletIcon}
                    />
                </TouchableOpacity>
                <Text style={styles.audienceSublabel}>
                    Choose "Everyone" to share your post with the public
                </Text>

                {/* Followers Option */}
                <TouchableOpacity
                    style={styles.audienceOption}
                    onPress={() => handleBulletPress('Followers')}
                >
                    <Text style={styles.audienceLabel}>Followers</Text>
                    <Image
                        source={selectedOption === 'Followers' ? require('../assets/selectedBullet.png') : require('../assets/bullet.png')}
                        style={styles.bulletIcon}
                    />
                </TouchableOpacity>
                <Text style={styles.audienceSublabel2}>
                    Only show to people who follow you
                </Text>
            </Modalize>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={goBack}>
                    <FastImage source={require('../assets/left-arrow.png')} style={styles.leftArrow} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Create Post</Text>
                <TouchableOpacity>
                    <Text style={styles.nextButton}>Next</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container2}>
                <View style={styles.imageContainer}>
                    {selectedImage.length >= 0 && (
                        <>
                            <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
                            {selectMultipleMode && (
                                <Image source={require('../assets/multi.png')} style={styles.multiImage} />
                            )}
                        </>
                    )}
                    <TextInput
                        style={styles.captionInput}
                        placeholder="Write caption"
                        placeholderTextColor="#6A6A6A"
                        value={caption}
                        onChangeText={(text) => setCaption(text)}
                    />
                </View>

                <View style={styles.labelContainer}>
                    <LocationPicker />
                </View>

                <View style={styles.labelContainer}>
                    <Text style={styles.label}>Tagged Users</Text>
                    <View style={styles.iconContainer}>
                        <Text style={styles.taggedUsersText}>3 people </Text>
                        <Image source={require('../assets/userg.png')} style={styles.icon} />
                    </View>
                </View>

                <View style={styles.labelContainer}>
                    <Text style={styles.label}>Audience</Text>
                    <View style={styles.iconContainer}>
                        <Text style={styles.audienceText}>{audienceText} </Text>
                        <TouchableOpacity onPress={openModal}>
                            <Image source={require('../assets/rightg.png')} style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.labelContainer}>
                    <Text style={styles.label}>Select an Item</Text>
                    <View style={styles.iconContainer}>
                        <Image source={require('../assets/bagg.png')} style={styles.icon} />
                    </View>
                </View>

                <View style={styles.itemContainer}>
                    <Text style={styles.itemContainerLabel}>2 selected items</Text>
                    <View style={styles.itemRow}>
                        <FastImage
                            style={styles.itemImage}
                            source={require('../assets/sword.jpg')}
                        />
                        <View style={styles.itemInfo}>
                            <Text style={styles.itemLabel}>420694206942069</Text>
                            <Text style={styles.itemSubLabel}>Blood Sword</Text>
                            <Text style={styles.itemCategory}>Merchandise</Text>
                        </View>
                        <FastImage
                            style={styles.appraisal}
                            source={require('../assets/appraised.png')}
                        />
                        <View style={styles.removeItemContainer}>
                            <FastImage
                                style={styles.removeItemImage}
                                source={require('../assets/removeg.png')}
                            />
                        </View>
                    </View>

                    <View style={styles.itemRow}>
                        <FastImage
                            style={styles.itemImage}
                            source={require('../assets/glasses.jpg')}
                        />
                        <View style={styles.itemInfo}>
                            <Text style={styles.itemLabel}>870087008700</Text>
                            <Text style={styles.itemSubLabel}>Red Glasses</Text>
                            <Text style={styles.itemCategory}>Merchandise</Text>
                        </View>
                        <FastImage
                            style={styles.appraisal}
                            source={require('../assets/unidentified.png')}
                        />
                        <View style={styles.removeItemContainer}>
                            <FastImage
                                style={styles.removeItemImage}
                                source={require('../assets/removeg.png')}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.labelContainer}>
                    <Text style={styles.label2}>Tag other people's items</Text>
                    <View style={styles.iconContainer}>
                        <Image source={require('../assets/qrg.png')} style={styles.icon} />
                    </View>
                </View>
            </View>
            {renderBottomSheet()}
        </View>
    );
};

export default CreatePost2;

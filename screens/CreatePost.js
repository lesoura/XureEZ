import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Modalize } from 'react-native-modalize';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/styles';

const CreatePost = () => {
    const [selectedImage, setSelectedImage] = useState();
    const [selectedItems, setSelectedItems] = useState({});
    const [selectMultipleMode, setSelectMultipleMode] = useState(false);
    const [selectMultipleLabel, setSelectMultipleLabel] = useState('Select Multiple');

    const modalizeRef = React.useRef(null);
    const navigation = useNavigation();

    useEffect(() => {
        openModal();
    }, []);

    const goBack = () => {
        navigation.goBack();
    };

    // Bottom Sheet
    const openModal = () => {
        modalizeRef.current?.open();
    };

    const closeModal = () => {
        modalizeRef.current?.close();
    };

    // Sample Data
    const data = [
        { id: '1', uri: 'https://i.pinimg.com/736x/b0/75/2e/b0752e7f2b3077af7923fecada433cb3.jpg' },
        { id: '2', uri: 'https://i.pinimg.com/originals/a6/b7/16/a6b7169b131d53d493e70c2502f039e3.png' },
        { id: '3', uri: 'https://i.pinimg.com/564x/56/8d/93/568d935a0d5dc55cae1e7ad77596e601.jpg' },
        // ...
        { id: '4', uri: 'https://pbs.twimg.com/media/Eb9wU_cU8AANzPF.jpg' },
        { id: '5', uri: 'https://external-preview.redd.it/YwBG7y7EWNrSMJtDgG1xIBMm3mtKfsxuvAdJeQSJfhk.png?width=640&crop=smart&format=pjpg&auto=webp&s=b61c0337922c8e471e5e51cfa61d5d0be22b8b1d' },
        { id: '6', uri: 'https://static.wikia.nocookie.net/kyoukainokanata/images/7/79/Miraiiiii.png/revision/latest?cb=20210618053535' },
        // ...
        { id: '7', uri: 'https://i.pinimg.com/736x/26/96/ba/2696ba1f83b1728c8c1c58216070bfb8.jpg' },
        { id: '8', uri: 'https://i.pinimg.com/236x/32/3a/0a/323a0abe53856ef07526915033845947.jpg' },
        { id: '9', uri: 'https://i.pinimg.com/736x/87/93/7e/87937ec4689f338acceecaa428297d4e.jpg' },
    ];

    // Flatlist item rendering
    const renderItem = ({ item }) => {
        const isSelected = selectedItems[item.id];
        const count = isSelected ? selectedItems[item.id] || 0 : 0;

        return (
            <TouchableOpacity
                onPress={() => toggleItemSelection(item.id)}
                style={{ position: 'relative' }}
            >
                <Image source={{ uri: item.uri }} style={styles.imagePreview} />
                {selectMultipleMode && (
                    <View style={styles.blankCircle}></View>
                )}
                {isSelected && (
                    <View style={styles.selectedCountContainer}>
                        <Text style={styles.selectedCountText}>{count}</Text>
                    </View>
                )}
            </TouchableOpacity>
        );
    };

    // Item selection
    const toggleItemSelection = (itemId) => {
        const selectedImageURI = data.find(item => item.id === itemId)?.uri;

        setSelectedImage(selectedImageURI);

        setSelectedItems((prevSelectedItems) => {
            const updatedSelection = { ...prevSelectedItems };

            if (selectMultipleMode) {
                if (updatedSelection[itemId]) {
                    // If the item is already selected, decrease the count
                    updatedSelection[itemId] -= 1;

                    if (updatedSelection[itemId] === 0) {
                        // If count becomes 0, remove the item from the selection
                        delete updatedSelection[itemId];
                    }
                } else {
                    // If the item is not selected, find the max count and increment by 1
                    const maxCount = Math.max(...Object.values(updatedSelection), 0);
                    updatedSelection[itemId] = maxCount + 1;
                }

                // Adjust counts after unselecting an item
                let count = 1;
                for (const key in updatedSelection) {
                    updatedSelection[key] = count;
                    count += 1;
                }
            }

            return updatedSelection;
        });
    };

    // Bottom sheet rendering
    const renderBottomSheet = () => (
        <Modalize
            ref={modalizeRef}
            adjustToContentHeight
            modalStyle={styles.bottomSheet}
        >
            <Text style={styles.bottomSheetTitle}>Xure would like to access</Text>
            <Text style={styles.bottomSheetSubtitle}>
                To scan QR codes for transfers, Xure needs to access to your Camera.
                Please provide permission via your phone settings.
            </Text>
            <TouchableOpacity style={styles.allowAccessButton} onPress={closeModal}>
                <Text style={styles.allowAccessButtonText}>Allow Access</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.maybeLaterButton} onPress={closeModal}>
                <Text style={styles.maybeLaterButtonText}>Maybe Later</Text>
            </TouchableOpacity>
        </Modalize>
    );

    const handleSelectMultiplePress = () => {
        setSelectMultipleMode((prevMode) => !prevMode);

        if (!selectMultipleMode) {
            // If switching to selectMultipleMode, clear the selected items
            setSelectedItems({});
            setSelectMultipleLabel('Cancel');
        } else {
            // If switching back to single mode, clear the selected image and items
            setSelectedImage(null);
            setSelectedItems({});
            setSelectMultipleLabel('Select Multiple');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={goBack}>
                    <FastImage source={require('../assets/left-arrow.png')} style={styles.leftArrow} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Create Post</Text>
                <TouchableOpacity
                    onPress={() => {
                        if (selectedImage) {
                            navigation.navigate('CreatePost2', { selectedImage, selectMultipleMode });
                        }
                    }}
                    disabled={!selectedImage}
                >
                    <Text style={[styles.nextButton, !selectedImage && styles.disabledButton]}>
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.upperHalf}>
                {selectedImage
                    ? <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
                    : <Image source={require('../assets/thumbnail.png')} style={styles.defaultImage} />
                }
                {selectedImage &&
                    <TouchableOpacity style={styles.cropIconContainer}>
                        <Image source={require('../assets/crop.png')} style={styles.cropIcon} />
                    </TouchableOpacity>
                }
            </View>
            <View style={styles.lowerHalf}>
                <View style={styles.labelContainer}>
                    <View style={styles.leftColumn}>
                        <Text style={styles.label}>Recents</Text>
                        <Image source={require('../assets/down.png')} style={styles.downIcon} />
                    </View>
                    <View style={styles.rightColumn}>
                        <TouchableOpacity style={styles.selectMultipleButton} onPress={handleSelectMultiplePress}>
                            <View style={styles.buttonContent}>
                                <Image source={require('../assets/multi.png')} style={styles.multiIcon} />
                                <Text style={styles.buttonText}>{selectMultipleLabel}</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.cameraIconContainer}>
                            <Image source={require('../assets/cam.png')} style={styles.cameraIcon} />
                        </View>
                    </View>
                </View>

                <FlatList
                    data={data}
                    numColumns={3}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                />

            </View>
            {renderBottomSheet()}
        </View>
    );
};

export default CreatePost;

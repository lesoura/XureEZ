import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111111'
    },
    downIcon: {
        width: 20,
        height: 20,
    },
    upperHalf: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: -27
    },
    lowerHalf: {
        flex: 0.5,
        backgroundColor: '#111111'
    },
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        height: 25
    },
    label: {
        fontSize: 16,
        marginRight: 5,
        color: "white",
        padding: 2,
        paddingLeft: 15
    },
    downIcon: {
        width: 15,
        height: 8,
        verticalAlign: 'center',
        marginLeft: 5
    },
    imagePreview: {
        width: width / 3,
        height: height / 6,
        margin: 1,
    },
    selectedImageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    selectedImage: {
        flex: 1,
        aspectRatio: 1.2,
        width: '100%'
    },
    leftColumn: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightColumn: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto',
    },
    selectMultipleButton: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 50,
        paddingLeft: 10,
        paddingRight: 10,
        padding: 3,
        marginRight: 10,
        backgroundColor: '#7C7C7C',
        textAlignVertical: 'center',
        paddingBottom: 5,
    },
    buttonText: {
        color: 'white',
    },
    cameraIconContainer: {
        width: 30,
        height: 30,
        borderRadius: 17,
        overflow: 'hidden',
        marginLeft: 3,
        backgroundColor: '#232323',
        justifyContent: 'center',
        padding: 5,
        marginRight: 10
    },
    cameraIcon: {
        padding: 5,
        width: 18,
        height: 13.5,
        alignSelf: 'center',
        resizeMode: 'cover',
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    multiIcon: {
        width: 20,
        height: 20,
        marginRight: 3,
    },
    selectedImageContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        position: 'relative',
    },

    // Crop Icon
    cropIconContainer: {
        bottom: 50,
        left: -155,
        backgroundColor: 'transparent',
    },
    cropIcon: {
        width: 40,
        height: 40,
        resizeMode: 'cover',
    },

    // Bottom Sheet
    bottomSheet: {
        backgroundColor: '#3E3E3E',
        padding: 16,
    },
    bottomSheetTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
        color: 'white',
        alignSelf: 'center'
    },
    bottomSheetSubtitle: {
        fontSize: 12,
        marginBottom: 16,
        color: 'white',
        alignSelf: 'center',
        textAlign: 'center',
    },
    allowAccessButton: {
        backgroundColor: '#EBC488',
        padding: 12,
        borderRadius: 50,
        alignItems: 'center',
    },
    allowAccessButtonText: {
        color: '#212121',
        fontSize: 16,
    },
    maybeLaterButton: {
        backgroundColor: '#3E3E3E',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 16,
    },
    maybeLaterButtonText: {
        color: 'white',
        fontSize: 16,
    },

    // Selected Count
    blankCircle: {
        position: 'absolute',
        bottom: 5,
        right: 8,
        backgroundColor: '#3E3E3E',
        borderColor: 'white',
        borderRadius: 50,
        width: 28,
        height: 28,
    },
    selectedCountContainer: {
        position: 'absolute',
        bottom: 4.5,
        right: 7.5,
        backgroundColor: '#EBC488',
        borderRadius: 100,
        padding: 5,
        paddingHorizontal: 10.5
    },
    selectedCountText: {
        color: 'black',
        fontSize: 12,
    },

    // header
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 15,
    },
    leftArrow: {
        width: 35,
        height: 35,
        tintColor: 'white',
    },
    headerTitle: {
        color: 'white',
        fontSize: 16,
    },
    nextButton: {
        fontSize: 15,
        borderWidth: 2,
        borderColor: '#EBC488',
        paddingHorizontal: 10,
        borderRadius: 20,
        textAlign: 'center',
        paddingTop: 3,
        color: '#EBC488',
        marginLeft: -25
    },

    // Thumbnail
    defaultImage: {
        flex: 1,
        aspectRatio: 1.2,
        width: '100%',
        marginBottom: 40
    },

    // Disabled Button
    disabledButton: {
        color: 'gray', // Customize the color for disabled state
        borderColor: 'gray'
        // Add any other styling for disabled state if needed
    },

});

export default styles;

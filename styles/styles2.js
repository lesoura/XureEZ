import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111111',
    },
    container2: {
        flex: 1,
        backgroundColor: '#111111',
        padding: 15
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    selectedImage: {
        width: 80,
        height: 80,
        marginRight: 20,
    },
    captionInput: {
        flex: 1,
        height: 80,
        borderWidth: 1,
        fontSize: 13,
        borderRadius: 5,
        backgroundColor: '#3E3E3E',
        textAlignVertical: 'top',
        padding: 15,
        color: 'white'
    },
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#5C5C5C',
        paddingTop: 15,
        paddingBottom: 15
    },
    label: {
        flex: 1,
        color: '#F7D091',
        fontSize: 16,
    },
    label2: {
        flex: 1,
        color: '#F7D091',
        fontSize: 14,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    icon2: {
        width: 20,
        height: 20,
        marginRight: 11,
    },
    taggedUsersText: {
        color: '#BCBCBC',
        marginLeft: 5,
    },
    audienceText: {
        color: '#BCBCBC',
        marginLeft: 5,
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
    selectLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    // Item Rows
    itemContainer: {
        marginTop: 10,
        marginBottom: 10,
    },
    itemContainerLabel: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#BCBCBC',
        marginBottom: 10
    },
    itemRow: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#EBC488',
        position: 'relative', // Make the container relative for absolute positioning
        width: '85%',
        borderRadius: 5,
        marginBottom: 5
    },
    removeItemContainer: {
        position: 'absolute',
        right: -50, // Adjust the right position as needed
        verticalAlign: 'middle'
    },
    itemImage: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    appraisal: {
        aspectRatio: 2.9,
        height: 30,
    },
    itemInfo: {
        flex: 1,
    },
    itemLabel: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white'
    },
    itemSubLabel: {
        fontSize: 7,
        color: 'white',
    },
    itemCategory: {
        fontSize: 7,
        color: 'white',
    },
    removeItemImage: {
        width: 25,
        height: 25,
        marginRight: 10
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
        color: '#BCBCBC',
        alignSelf: 'center',
        textAlign: 'center',
    },
    audienceOption: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
    },
    audienceLabel: {
        color: 'white',
        flex: 1,
        fontSize: 16,
    },
    audienceSublabel: {
        fontSize: 11,
        color: '#BCBCBC', // Adjust color as needed
    },
    audienceSublabel2: {
        fontSize: 11,
        color: '#BCBCBC', // Adjust color as needed
        marginBottom: 30
    },
    bulletIcon: {
        height: 30,
        width: 30,
    },

    // Multi
    multiImage: {
        position: 'absolute',
        top: 0,
        left: 50,
        width: 30,
        height: 30,
        resizeMode: 'contain',
        zIndex: 999
    },

    // Location Picker
    selectedCountryLabel: {
        flex: 1,
        color: '#F7D091',
        fontSize: 16,
    },
    selectedCountry: {
        color: 'white', // Replace 'your_chosen_color' with the desired color
        textAlign: 'right'
    }

});

export default styles;

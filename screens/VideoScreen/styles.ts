import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    videoPlayer: {
        width: '100%',
        height: 200,
        // aspectRatio: 16/9,
    },

    videoInfoContainer: {
        margin: 10,

    },
    title: {
        color: 'black',
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 5,
    },
    tags: {
        color: 'blue',
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 5,
    },
    subtitle: {
        color: 'grey',
        fontSize: 14,
        fontWeight: '500'
    },

    actionListContainer: {
        // flexDirection: 'row'
        marginVertical: 10,
    },
    actionListItem: {
        width: 60,
        height: 60,
        justifyContent: "space-around",
        alignItems: "center",
    },
    actionText: {
        color: 'black',
    },
    
    // user
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    }

})

export default styles
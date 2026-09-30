import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    postCard: {
        backgroundColor: '#ffffff',
        borderColor: '#dde6f3',
        borderRadius: 8,
        borderWidth: 1,
        flexDirection: 'row',
        gap: 14,
        padding: 14,
    },
    pressedCard: {
        opacity: 0.60,
        transform: [{ scale: 0.99 }],
    },
    postNumber: {
        alignItems: 'center',
        backgroundColor: '#eff6ff',
        borderRadius: 8,
        height: 42,
        justifyContent: 'center',
        width: 42,
    },
    postNumberText: {
        color: '#1d4ed8',
        fontSize: 15,
        fontWeight: '900',
    },
    postContent: {
        flex: 1,
        gap: 7,
    },
    postTitle: {
        color: '#172033',
        fontSize: 17,
        fontWeight: '900',
        lineHeight: 23,
        textTransform: 'capitalize',
    },
    postBody: {
        color: '#5a6577',
        fontSize: 14,
        lineHeight: 20,
    },
    readMore: {
        color: '#2563eb',
        fontSize: 14,
        fontWeight: '900',
    },
})
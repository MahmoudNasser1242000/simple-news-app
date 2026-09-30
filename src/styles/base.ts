import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    // Safe Area Styles
    safeArea: {
        backgroundColor: '#f4f7fb',
        flex: 1,
    },
    screen: {
        flex: 1,
        marginTop: -10,
    },

    // Scroll Content Styles
    scrollContent: {
        gap: 18,
        paddingHorizontal: 18,
        paddingTop: 8,
        paddingBottom: 34,
    },
    list: {
        gap: 12,
    },

    // query states
    stateBox: {
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderColor: '#dde6f3',
        borderRadius: 8,
        borderWidth: 1,
        gap: 12,
        padding: 26,
    },
    stateText: {
        color: '#5a6577',
        fontSize: 15,
        fontWeight: '700',
    },
    errorBox: {
        backgroundColor: '#fff1f2',
        borderColor: '#fecdd3',
        borderRadius: 8,
        borderWidth: 1,
        gap: 12,
        padding: 14,
    },
    errorText: {
        color: '#be123c',
        fontSize: 15,
        fontWeight: '800',
    },
});
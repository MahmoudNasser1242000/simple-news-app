import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    retryButton: {
        alignItems: 'center',
        alignSelf: 'flex-start',
        backgroundColor: '#be123c',
        borderRadius: 8,
        justifyContent: 'center',
        minHeight: 40,
        paddingHorizontal: 14,
    },
    retryButtonText: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '900',
    },
    detailsWrap: {
        gap: 14,
    },
    backButton: {
        alignItems: 'center',
        alignSelf: 'flex-start',
        backgroundColor: '#e0f2fe',
        borderRadius: 8,
        justifyContent: 'center',
        minHeight: 42,
        paddingHorizontal: 16,
    },
    backButtonText: {
        color: '#075985',
        fontSize: 15,
        fontWeight: '900',
    },
    pressedButton: {
        opacity: 0.72,
    },
    detailsCard: {
        backgroundColor: '#ffffff',
        borderColor: '#c7d2fe',
        borderRadius: 8,
        borderWidth: 1,
        gap: 10,
        padding: 18,
    },
    detailLabel: {
        color: '#4f46e5',
        fontSize: 13,
        fontWeight: '900',
        textTransform: 'uppercase',
    },
    detailTitle: {
        color: '#172033',
        fontSize: 24,
        fontWeight: '900',
        lineHeight: 31,
        textTransform: 'capitalize',
    },
    detailBody: {
        color: '#4b5563',
        fontSize: 16,
        lineHeight: 24,
    },
});
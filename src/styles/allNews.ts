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

    // fixed Header Styles
    fixedHeader: {
        backgroundColor: '#f4f7fb',
        padding: 18,
        paddingTop: 0,
        paddingBottom: 10,
        zIndex: 1,
    },
    hero: {
        backgroundColor: '#111827',
        borderRadius: 8,
        gap: 6,
        padding: 20,
    },
    eyebrow: {
        color: '#93c5fd',
        fontSize: 13,
        fontWeight: '800',
        textTransform: 'uppercase',
    },
    title: {
        color: '#ffffff',
        fontSize: 34,
        fontWeight: '900',
    },
    description: {
        color: '#dbeafe',
        fontSize: 16,
        lineHeight: 23,
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
    commentsHeader: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    sectionTitle: {
        color: '#172033',
        fontSize: 22,
        fontWeight: '900',
    },
    commentCount: {
        backgroundColor: '#dbeafe',
        borderRadius: 8,
        color: '#1d4ed8',
        fontSize: 14,
        fontWeight: '900',
        overflow: 'hidden',
        paddingHorizontal: 12,
        paddingVertical: 6,
    },
    commentCard: {
        backgroundColor: '#ffffff',
        borderColor: '#dde6f3',
        borderRadius: 8,
        borderWidth: 1,
        gap: 6,
        padding: 14,
    },
    commentName: {
        color: '#172033',
        fontSize: 16,
        fontWeight: '900',
        lineHeight: 22,
        textTransform: 'capitalize',
    },
    commentEmail: {
        color: '#2563eb',
        fontSize: 13,
        fontWeight: '800',
    },
    commentBody: {
        color: '#5a6577',
        fontSize: 14,
        lineHeight: 21,
    },
});
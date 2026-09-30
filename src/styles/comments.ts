import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    list: {
        gap: 12,
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
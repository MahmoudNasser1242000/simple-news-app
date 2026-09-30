import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
});
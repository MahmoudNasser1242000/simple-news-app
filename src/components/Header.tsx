// Libs
import { Text, View } from 'react-native'

// Styles
import { styles } from '@/styles/header'

// Types
import type { IHeader } from '@/types'

export default function Header({
    eyebrow,
    title,
    description
}: IHeader) {
    return (
        <View style={styles.fixedHeader}>
            <View style={styles.hero}>
                <Text style={styles.eyebrow}>{eyebrow}</Text>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    )
}

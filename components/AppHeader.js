import { StyleSheet, Text, View, Button } from 'react-native'

export default function AppHeader() {
    return (
        <View style={styles.header}>
            <Text>sdfd</Text>
            <Button title={'sd'} />
            <Button title={'sdf'} />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
    }
})
/*
 * Project: react-native-unordered-list
 * File: /index.js
 * Author: Qi Xi
 * Email: me@imxiqi.com
 * File Created: Wednesday, 22nd January 2020 10:46:46 pm
 * Description: react-native unordered list component
 */

import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const bullets = ['\u2022', '\u25E6', '\u25AA'];

export default ({ children, unorderedListLevel, bulletUnicode }) => {
    const level = !unorderedListLevel ? 0 : unorderedListLevel;
    const newChildren = React.Children.map(children, child => {
        return React.cloneElement(child, {
            unorderedListLevel: level + 1,
        });
    });

    return (
        <View style={styles.bulletPointLine}>
            <Text>{bulletUnicode ? String.fromCharCode(bulletUnicode) : (level > bullets.length ? bullets[bullets.length - 1] : bullets[level])}</Text>
            <View style={styles.bulletPointText}>{newChildren}</View>
        </View>
    );
}

const styles = StyleSheet.create({
    bulletPointLine: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    bulletPointText: {
        flex: 1,
        paddingLeft: 5
    }
});

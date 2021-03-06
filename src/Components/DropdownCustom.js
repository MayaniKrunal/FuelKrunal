import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, } from "react-native";
import { Fonts, Icons, } from "../utils";
import { TouchableOpacity as GHTouchableOpacity } from 'react-native-gesture-handler'

export default ExtraDrop = ({ style, visible, onPress, dropdownName, onPress1 }) => {
    const dropdownData = [
        { id: 0, value: 'DAILY' },
        { id: 1, value: 'WEEKLTY' },
        { id: 2, value: 'MONTHLY' },
        { id: 3, value: 'YEARLY' }
    ];
    return (
        <View>
            <View style={[styles.subcontainer, { ...style }]}>
                <TouchableOpacity
                    style={styles.touchabelcontainer}
                    onPress={onPress}
                >
                    <Image
                        source={Icons.list}
                        style={styles.imagestyle}
                    />
                    <Text style={{ color: '#748C74', marginHorizontal: 10 }}>{dropdownName}</Text>
                    <Image source={visible === true ? Icons.upd : Icons.down}
                        style={styles.imagestyle} />
                </TouchableOpacity>
            </View>
            {visible &&
                <View style={[styles.dropcontainer, { ...style, }]}>
                    {dropdownData.map((item, index) => {
                        return (
                            <View style={{
                                flex: 1,
                            }} key={index}>
                                {Platform.OS === 'ios' ?
                                    <TouchableOpacity style={[styles.dropdowntouchcontainer]}
                                        onPress={() => { onPress1(item.value); onPress(); }}
                                    >
                                        <Text style={{ fontFamily: Fonts.Roboto_Regular, color: '#748C74', marginLeft: 10 }} >{item.value}</Text>
                                    </TouchableOpacity>
                                    :
                                    <GHTouchableOpacity style={[styles.dropdowntouchcontainer]}
                                        onPress={() => { onPress1(item.value); onPress(); }}
                                    >
                                        <Text style={{ fontFamily: Fonts.Roboto_Regular, color: '#748C74', marginLeft: 10 }} >{item.value}</Text>
                                    </GHTouchableOpacity>}
                            </View>
                        )
                    })}
                </View>
            }
        </View>
    );
};
const styles = StyleSheet.create({
    subcontainer: {
        marginHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#E6ECE6',
        padding: 10,
        marginBottom: 10,
        flex: 1,
    },
    touchabelcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#E6ECE6',
    },
    dropcontainer: {
        marginHorizontal: 10,
        borderRadius: 4,
        position: 'absolute',
        top: 41,
    },
    imagestyle: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
        tintColor: '#748C74'
    },
    dropdowntouchcontainer: {
        backgroundColor: '#E6ECE6',
        borderWidth: 0.2,
        borderColor: '#c5d3c5',
        padding: 10
    }
})
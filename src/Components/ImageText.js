import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Images, Icons, Fonts, Colors } from "../utils";

export const ImageText = ({ title1, title2, logoiamge, info, text1, text2, sign, style }) => {
    return (
        <View style={{ flexDirection: 'row', backgroundColor: '#fff', }}>
            <View style={{ flex: 1, marginHorizontal: 20, marginTop: 30 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {logoiamge && <Image
                        source={logoiamge}
                        style={{ height: 30, width: 30, resizeMode: 'contain' }}
                    />}
                    <Text style={{ fontSize: 18, fontFamily: Fonts.Roboto_Bold }}>{sign}</Text>
                    <Text style={styles.textcontainer} > {title1}</Text>
                </View>
                {text1 && <Text style={{ color: '#8fab96', fontSize: 15 }}>Today</Text>}
            </View>
            <View style={{ flex: 1, marginHorizontal: 20, marginTop: 33, ...style }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.uparrowcontainer}>
                        <Image source={Icons.up} style={styles.uparrow} />
                    </View>
                    <Text style={[styles.textcontainer, { marginLeft: 5, fontSize: 25 }]} >{title2}</Text>
                </View>
                {text2 && <Text style={{ color: '#8fab96', fontSize: 15 }}>Last Week</Text>}
            </View>
            {info && <View style={{ flex: 1 }}>
                <Image source={Icons.roundi} style={styles.round_infoimage} />
            </View>}
        </View>
    );
};

const styles = StyleSheet.create({
    uparrowcontainer: {
        height: 25,
        width: 25,
        backgroundColor: 'green',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    round_infoimage: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
        borderRadius: 50,
        tintColor: '#dee7df',
        alignSelf: "flex-end",
        marginRight: 10,
        marginTop: 5,
    },
    uparrow: {
        height: 18,
        width: 18,
        resizeMode: 'contain',
        tintColor: '#fff',
    },
    textcontainer: {
        fontSize: 30,
        fontWeight: "700",
        fontFamily: Fonts.Roboto_Regular,
        color: Colors.Black
    },
})
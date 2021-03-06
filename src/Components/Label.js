import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableWithoutFeedback, } from 'react-native';
import { TouchableWithoutFeedback as GHTouchableOpacity } from 'react-native-gesture-handler'
import { Fonts, Colors, Images, Icons } from '../utils';

export default Label = ({ onPress, }) => {
    return (
        <>
            <View style={{ backgroundColor: Colors.LebelColor, }}>
                <View style={styles.viewcontainer}>
                    <View style={{ flex: 1, }}>
                        <Text style={styles.textcontainer}>Recommended</Text>
                        <Text style={{ fontSize: 23, color: Colors.White, opacity: 1, fontFamily: Fonts.Roboto_Medium, }} >MSRP Regular</Text>
                    </View>
                    <View style={styles.viewlabel}>
                        <Text style={styles.labeltext}>2.72</Text>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <GHTouchableOpacity
                        onPress={onPress}
                    >
                        <View style={styles.downarrowcontainer}>
                            <Image
                                source={Icons.down1}
                                style={styles.downImge}
                            />
                        </View>
                    </GHTouchableOpacity>
                </View>
            </View>

        </>
    );
};
const styles = StyleSheet.create({
    viewcontainer: {
        paddingHorizontal: 5,
        paddingVertical: 13,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        zIndex: 100,

    },
    textcontainer: {
        color: Colors.White,
        fontSize: 14,
        fontWeight: '400',
        fontFamily: Fonts.Roboto_Regular,
        opacity: 1,
    },
    viewlabel: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        backgroundColor: Colors.White,
        borderRadius: 7,
        alignSelf: "center",
    },
    labeltext: {
        fontSize: 25,
        fontWeight: '700',
        alignSelf: 'center',
        justifyContent: 'center',
        color: Colors.Black
    },
    downImge: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        tintColor: Colors.White,
        marginTop: 15,
    },
    downarrowcontainer: {
        height: 60,
        width: 60,
        backgroundColor: Colors.LebelColor,
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    buttonContainer: {
        position: 'absolute',
        alignSelf: 'center'
    }
});
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import colorconst from "../utils/colorconst";
import { Fonts, Colors } from "../utils";
const ButtonComponent = () => {
    const [buttonIndex, setbuttonIndex] = useState(0);
    const buttonData = [
        { index: 0, name: 'Reg', },
        { index: 1, name: 'Prem', },
        { index: 2, name: 'Mid', },
        { index: 3, name: 'Dsl' }
    ];
    return (
        <SafeAreaView style={{ backgroundColor: colorconst.backgroundcolor }} >
            <View style={styles.maincontainer}>
                {buttonData.map((item, index) =>

                    <TouchableOpacity style={styles.touchcontainer}
                        onPress={() => {
                            setbuttonIndex(index)
                        }}
                        key={index}
                    >
                        <Text style={[{ color: index === buttonIndex ? Colors.BtnBackGround : '#ababab' }, styles.textcontainer]}  >{item.name}</Text>
                    </TouchableOpacity>
                )}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    textcontainer: {
        fontSize: 20,
        fontFamily: Fonts.Roboto_Bold
    },
    maincontainer: {
        backgroundColor: colorconst.backgroundcolor,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: "100%",
    },
});
export default ButtonComponent;
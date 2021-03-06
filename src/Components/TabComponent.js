import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, } from 'react-native';
import { Fonts, Colors } from "../utils/"
import Header from "../Components/Header";

const TabComponent = ({ navigation }) => {
    const [colorIndex, setindex] = useState(1);
    const tabData = [
        { id: 1, name: 'Pricing' },
        { id: 2, name: 'Sales' },
        { id: 3, name: 'Customers' },
        { id: 4, name: 'Macro' }
    ];

    return (
        <View style={{ backgroundColor: 'rgba(0,0,0,0)' }} >
            <View style={styles.maincontainer}>
                <SafeAreaView>
                    <Header />
                    <View style={styles.btnviewcontainer}>
                        {tabData.map((item, index) =>
                            <TouchableOpacity onPress={() => {
                                setindex(item.index)
                                navigation.navigate(item.name)
                            }} style={styles.touchablecontainer}
                                key={index}
                            >
                                <Text style={[{ color: colorIndex === item.id ? Colors.White : Colors.LebelColor, }, styles.textcontainer]} >{item.name}</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </SafeAreaView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    textcontainer: {
        fontSize: 22,
        fontFamily: Fonts.Roboto_Regular
    },
    maincontainer: {
        backgroundColor: Colors.TabHeader,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingHorizontal: 10
    },
    btnviewcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },

    touchablecontainer: {
        alignItems: 'center',
    }
});
export default TabComponent;
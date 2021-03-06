import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, } from 'react-native';
import AverageComponent from "./AverageComponent";
import SpreadCompnent from "./SpreadCompnent";
import { Colors, } from "../utils";
import DropdownCustom from './DropdownCustom';
export default MapImageComponent = () => {

    const [buttonIndex, setindex] = useState(0);
    const data = [
        { index: 1, value: 'Spread', },
        { index: 0, value: 'Average', },
    ];

    const [visible, setVisible] = useState(false);
    const [dropdownName, setdropdownName] = useState('DAILY');

    return (
        <View style={{ backgroundColor: '#f7f7f7', flex: 1, }}>
            <View style={styles.container}>
                <View style={{ flex: 1, top: 5, justifyContent: 'space-around' }}>
                    <DropdownCustom style={{ width: 110 }}
                        visible={visible}
                        onPress={() => { setVisible(!visible) }}
                        dropdownName={dropdownName}
                        onPress1={(val) => { setdropdownName(val) }}
                    />
                </View>
                <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-around', }}>
                    {data.map((item, index) =>
                        <TouchableOpacity style={[styles.subcontainer, { backgroundColor: buttonIndex === index ? '#afd9b5' : Colors.BtnBackGround }]}
                            onPress={() => setindex(item.index)}
                            key={index}
                        >
                            <Text style={styles.textcontainer}>{item.value}</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>

            <View style={{ flex: 2 }}>
                {buttonIndex === 0 && <AverageComponent />}
                {buttonIndex === 1 && <SpreadCompnent />}
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    textcontainer: {
        color: Colors.White,
        fontSize: 18,
        alignSelf: 'center',
        marginVertical: 7
    },
    subcontainer: {
        borderRadius: 5,
        paddingHorizontal: 20,
        width: 120

    },
    container: {
        flex: 1,
        zIndex: 10,
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: 'center',
        // marginHorizontal: 15,
        // marginTop: 5
    },
})
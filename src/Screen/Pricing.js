import React, { useState, useRef } from "react";
import { View, ScrollView, TouchableOpacity, FlatList, Text, StyleSheet, Dimensions, } from 'react-native';
import ButtonComponent from '../Components/ButtonComponent';
import CardComponent from "../Components/CardComponent";
import Label from "../Components/Label";
import Mapcom from '../Components/Map';
import ModalComponent from "../Components/ModalComponent";
import ModalizeComponent from "../Components/ModalizeComponent";
import { Colors, Fonts, Icons, Images } from "../utils";

const { width, height } = Dimensions.get('window');
export default Pricing = () => {
    const [selected, setSelected] = useState(false);
    const [index, setindex] = useState(null);
    const modalRef = useRef(null);
    const onOpen = () => {
        const modal = modalRef.current;
        if (modal) {
            modal.open();
        }
    };
    const Card = [
        {
            id: 1, title: 'Chevron', imageurl: Images.chevron, Price: 2.86, time: 12,
            axis: [
                { x: 1, y: 2 },
                { x: 2, y: 3 },
                { x: 3, y: 5 },
                { x: 4, y: 4 },
                { x: 5, y: 7 }
            ], color: '#88c428'
        },
        {
            id: 2, title: '76Gas', imageurl: Images.gas76, Price: 2.90, time: 11,
            axis: [
                { x: 1, y: 2 },
                { x: 2, y: 3 },
                { x: 3, y: 5 },
                { x: 4, y: 4 },
                { x: 5, y: 7 }
            ], color: '#2da844'
        },
        {
            id: 3, title: 'Repsol', imageurl: Images.repsol, Price: 2.95, time: 8,
            axis: [
                { x: 1, y: 2 },
                { x: 2, y: 3 },
                { x: 3, y: 5 },
                { x: 4, y: 4 },
                { x: 5, y: 7 }
            ], color: '#7d8a60'
        },
        {
            id: 4, title: 'Shiclair', imageurl: Images.shiclair, Price: 2.40, time: 7,
            axis: [
                { x: 1, y: 2 },
                { x: 2, y: 3 },
                { x: 3, y: 5 },
                { x: 4, y: 4 },
                { x: 5, y: 7 }
            ], color: '#88c428'
        },
        {
            id: 5, title: 'Shell', imageurl: Images.shell, Price: 2.60, time: 10,
            axis: [
                { x: 1, y: 2 },
                { x: 2, y: 3 },
                { x: 3, y: 5 },
                { x: 4, y: 4 },
                { x: 5, y: 7 }
            ], color: '#2da844'
        },
    ];
    const Compare = (index) => {
        setindex(index);
        onOpen();
    }
    return (
        <>
            <Mapcom onPress={() => Compare(1)} />
            <View style={{ position: 'absolute', }} >
                <ButtonComponent />
                <View style={{ zIndex: 1 }}>
                    <Label
                        onPress={() => {
                            setSelected(!selected);
                        }}
                    />
                </View>
                <View style={styles.comparebtnview}>
                    <TouchableOpacity onPress={() => Compare(0)} >
                        <Text style={styles.compareTextContainer}>Compare</Text>
                    </TouchableOpacity>
                </View>
                {selected &&
                    <View style={{ height: height - 250, }}>
                        <ScrollView bounces={false}
                            showsVerticalScrollIndicator={false}
                        >
                            < ModalComponent />
                        </ScrollView>
                    </View>
                }
            </View>
            <View style={[styles.cardview, { flex: 1, alignSelf: 'center' }]} >
                {!selected &&
                    <FlatList horizontal
                        showsHorizontalScrollIndicator={false}
                        data={Card}
                        keyExtractor={(Card, index) => index.toString()}
                        style={{ paddingHorizontal: 10 }}
                        renderItem={({ item }) => {
                            return (
                                <CardComponent data={item} />
                            );
                        }}
                    />
                }
            </View>
            <ModalizeComponent index={index} modalRef={modalRef} />
        </>
    );
};
const styles = StyleSheet.create({
    comparebtnview: {
        position: 'absolute',
        backgroundColor: Colors.BtnBackGround,
        paddingHorizontal: 15,
        paddingVertical: 8,
        alignSelf: 'flex-end',
        right: 20,
        borderRadius: 7,
        marginTop: 140
    },
    cardview: {
        position: 'absolute',
        bottom: 0,
        flex: 1,
    },
    compareTextContainer: {
        fontSize: 22,
        color: Colors.White
    },
})
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Platform } from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme, VictoryTooltip, VictoryLabel, VictoryAxis } from "victory-native";
import DropdownCustom from './DropdownCustom';
import { ImageText } from '../Components/ImageText';
import { Fonts, Colors, Images } from "../utils";
import Slider from 'react-native-slider';
import Chartview from "../Components/Chartview";
export default ModalComponent = () => {
    const [Slidervalue, setSlidervalue] = useState(3.72);
    const data = [
        { x: 1, y: 1000 },
        { x: 2, y: 1650 },
        { x: 3, y: 2005 },
        { x: 4, y: 1425 },
        { x: 6, y: 1900 },
        { x: 5, y: 1300 },
        { x: 7, y: 1650 },
    ];
    const predictedData = [
        { id: 0, name1: 'Sales(Gal)', value1: '+550Gal', name2: 'Sales($)', value2: `$1233` },
        { id: 1, name1: 'Total Visits', value1: '+900', name2: 'Profit $ Fuel', value2: `$331` },
        { id: 2, name1: 'Non Fuel Vistor', value1: '+450', name2: 'Profit Non-Fuel', value2: `$211` },
    ];
    const [visible, setVisible] = useState(false);
    const [dropdownName, setdropdownName] = useState('DAILY');
    return (
        <View style={{ flex: 1, backgroundColor: '#F4F4F4', }}>
            <View style={{ flex: 1, backgroundColor: '#2C9800' }}  >
                <View style={{ paddingTop: 30 }}>
                    <Text style={styles.setPriceText}>Set my Price</Text>
                    <Slider
                        style={{ flex: 1, marginHorizontal: 20, }}
                        value={Slidervalue}
                        minimumValue={0} maximumValue={10}
                        minimumTrackTintColor="#fec53d"
                        maximumTrackTintColor='#fff'
                        thumbTintColor={'#fff'}
                        thumbStyle={{ padding: 13, borderRadius: 50, borderWidth: 3 }}
                        trackStyle={{ padding: 5, borderRadius: 8 }}
                        onSlidingComplete={value => setSlidervalue(value)}
                    />
                </View>
                <View style={[styles.slidertextview]}>
                    <Text style={styles.textcontainerbold}>${Slidervalue.toFixed(2)}</Text>
                </View>
            </View>
            <View style={styles.headercontainer}>
                <Text style={styles.header}>Predicted Impact</Text>
                <Text style={styles.textcontainerbold}>Over 7 days</Text>
            </View>
            <View style={[styles.cardViewContainer, { padding: 30, }]}>
                <FlatList
                    data={predictedData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        return (
                            <>
                                <View style={styles.postview}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={styles.textcontainer}>{item.name1}</Text>
                                        <Text style={styles.textcontainerbold}>{item.value1}</Text>
                                    </View>
                                    <View style={styles.verticleLine}></View>
                                    <View style={{ flex: 1, marginLeft: 20 }} >
                                        <Text style={styles.textcontainer}>{item.name2}</Text>
                                        <Text style={styles.textcontainerbold}>{item.value2}</Text>
                                    </View>
                                </View>
                                {predictedData.length - 1 !== index && <View style={styles.horizonalLine} />}

                            </>
                        );
                    }}
                />
            </View>
            {Platform.OS === 'ios' ?
                < View style={[styles.headercontainer, { flexDirection: 'row', zIndex: 100 }]}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.header}>Past Profit</Text>
                    </View>
                    <View style={{ elevation: 5, }}>
                        <DropdownCustom style={{ width: 120 }}
                            visible={visible}
                            onPress={() => { setVisible(!visible) }}
                            dropdownName={dropdownName}
                            onPress1={(val) => { setdropdownName(val) }}
                        />
                    </View>
                </ View>
                :
                <View style={[styles.headercontainer, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                    <View style={{}}>
                        <Text style={styles.header}>Past Profit</Text>
                    </View>
                    <View style={{ elevation: 5, zIndex: 100, }}>
                        <DropdownCustom style={{ width: 120 }}
                            visible={visible}
                            onPress={() => { setVisible(!visible) }}
                            dropdownName={dropdownName}
                            onPress1={(val) => { setdropdownName(val) }}
                        />
                    </View>
                </View>
            }
            <View style={styles.cardViewContainer}>
                <ImageText
                    title1="1843"
                    sign='$'
                    title2='5%'
                    image={Images.logo}
                    info={1}
                />
                <Chartview />
            </View>
            <View style={[styles.cardViewContainer, { marginBottom: 50 }]}>
                <ImageText
                    title1="1232"
                    sign='$'
                    title2='2%'
                    info={1}
                />
                <View style={styles.chartcontainer}>
                    <View>
                        <VictoryChart
                            theme={VictoryTheme.material}
                            padding={{ left: 100, top: 50, right: 70, bottom: 50 }}
                            domainPadding={{ x: 12 }}
                        >
                            <VictoryAxis
                                tickValues={[1, 2, 3, 4, 5, 6, 7]}
                                tickFormat={["oct 9", "oct 10", "oct 11", "oct 12", "oct 13", "oct 14", "oct 15"]}
                                tickLabelComponent={<VictoryLabel style={{ textAnchor: 'middle', }} angle={-60} />}
                                style={{
                                    axis: { stroke: "transparent" },
                                    ticks: { stroke: "transparent" },
                                    tickLabels: { fontSize: 13, fontFamily: Fonts.Roboto_Regular },
                                    grid: { strokeWidth: 0 }

                                }}
                            />
                            <VictoryAxis
                                dependentAxis
                                tickFormat={(x) => (`$${x}`)}
                                axis={{ stroke: "008d1e", strokeWidth: 1 }}
                                style={{
                                    tickLabels: { fill: '#008d1e', fontSize: 15, fontFamily: Fonts.Roboto_Regular },
                                    ticks: { stroke: "transparent" },
                                    axis: { stroke: "transparent" },
                                    grid: { stroke: "#f0f0f0", strokeWidth: 2 }
                                }}
                            />
                            <VictoryBar
                                labelComponent={<VictoryTooltip />}
                                cornerRadius={{ top: 6, bottom: 6 }}
                                data={data}
                                style={{
                                    data: { fill: '#008d1e', width: 12, height: 40 }
                                }}
                            />
                        </VictoryChart>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    verticleLine: {
        width: 2,
        backgroundColor: '#eeeeee',
    },
    horizonalLine: {
        borderBottomColor: '#eeeeee',
        borderBottomWidth: 2,
        marginHorizontal: 20
    },
    textcontainer: {
        fontSize: 20,
        color: '#5F605E',
        fontFamily: Fonts.Roboto_Regular
    },
    textcontainerbold: {
        fontSize: 20,
        fontWeight: '700',
        fontFamily: Fonts.Roboto_Regular
    },
    chartcontainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.White,
        margin: 10,
        paddingHorizontal: 10,

    },
    slidertextview: {
        backgroundColor: Colors.White,
        margin: 10,
        alignSelf: 'center',
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 50,
    },
    header: {
        fontSize: 35,
        fontWeight: '700',
    },
    headercontainer: {
        marginHorizontal: 10,
        marginVertical: 10,
        marginTop: 20,

    },
    postview: {
        flexDirection: 'row',
        margin: 15
    },
    cardViewContainer: {
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 6,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        elevation: 5,
    },
    setPriceText: {
        color: Colors.White,
        alignSelf: 'center',
        fontSize: 26,
        fontFamily: Fonts.Roboto_Bold,
    }
})
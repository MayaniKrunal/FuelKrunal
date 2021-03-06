import React, { useState } from "react";
import { StyleSheet, View, Text, Image, ScrollView, SafeAreaView, Platform } from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme, VictoryTooltip, VictoryLabel, VictoryAxis } from "victory-native";
import { Fonts, Colors, Images, Icons } from "../utils";
import DropdownCustom from "../Components/DropdownCustom";
import { ImageText } from "../Components/ImageText";
export default CompareComponent = () => {
    const [visible, setVisible] = useState(false);
    const [dropdownName, setdropdownName] = useState('Daily');
    const data = [
        { x: 1, y: 1100 },
        { x: 2, y: 1600 },
        { x: 3, y: 2100 },
        { x: 4, y: 1400 },
        { x: 5, y: 1900 },
    ];
    const colors = ['#008fcd', '#ffcf33', '#ff7625', '#002a7b', '#87c42b'];

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.maincontainer}>
                <View style={styles.drpodownview}>
                    <DropdownCustom style={{ width: 120 }}
                        visible={visible}
                        onPress={() => { setVisible(!visible) }}
                        dropdownName={dropdownName}
                        onPress1={(val) => { setdropdownName(val) }}
                    />
                    <Text style={[styles.textcontainer, { fontSize: 26 }]}>Competitor Spread</Text>
                </View>
                <ScrollView >
                    <View style={styles.subcontainer}>
                        <ImageText
                            sign='$'
                            title1="0.15"
                            text1='Today'
                            title2='2%'
                            text2='Lat Week'
                            info={1}
                        />
                        <View style={{ backgroundColor: '#fff', }}>
                            <VictoryChart
                                theme={VictoryTheme.material}
                                domainPadding={{ x: 20 }}
                                height={Platform.isPad ? 380 : 250}
                                padding={{ left: 70, top: 50, right: 70, bottom: 50 }}
                            >
                                <VictoryAxis
                                    tickValues={[1, 2, 3, 4, 5]}
                                    tickFormat={["oct 9", "oct 10", "oct 11", "oct 12", "oct 13"]}
                                    style={{
                                        axis: { stroke: "transparent" },
                                        ticks: { stroke: "transparent" },
                                        grid: { stroke: "#fff", strokeWidth: 0 }
                                    }}
                                />
                                <VictoryAxis
                                    dependentAxis
                                    tickFormat={(x) => (`${x / 10000}`)}
                                    axis={{ stroke: "008d1e", strokeWidth: 1 }}
                                    style={{
                                        tickLabels: { fill: '#008d1e', fontSize: 15 },
                                        ticks: { stroke: "transparent" },
                                        axis: { stroke: "transparent" },
                                        grid: { stroke: "#f0f0f0", }
                                    }}
                                />
                                <VictoryBar
                                    labelComponent={<VictoryTooltip />}
                                    cornerRadius={{ top: 8, bottom: 8 }}
                                    labels={({ datum }) => `${datum.y / 10000}`}
                                    barWidth={40}
                                    data={data}
                                    labelComponent={<VictoryLabel
                                        backgroundStyle={{ fill: '#E8E8E8', opacity: 1 }}
                                        backgroundPadding={5}
                                        dy={-20}
                                        textAnchor="middle"
                                        verticalAnchor="middle"
                                    />}
                                    style={{
                                        data: {
                                            width: 12, height: 40,
                                            fill: ({ index }) => colors[index],
                                        },
                                        labels: { fill: '#000', fontSize: 15 }
                                    }}
                                />
                            </VictoryChart>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    textcontainer: {
        fontSize: 25,
        fontWeight: "700",
        fontFamily: Fonts.Roboto_Regular,
    },
    maincontainer: {
        backgroundColor: '#F4F4F4',
    },
    drpodownview: {
        flexDirection: 'row',
        margin: 10,
        zIndex: 1000,
        justifyContent: 'space-between',
    },
    subcontainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        elevation: 2,
        margin: 10
    }
});
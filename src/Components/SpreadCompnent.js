import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryTooltip, VictoryLine, VictoryAxis, VictoryLabel } from "victory-native";
import { Fonts, Colors, Icons, Images } from "../utils";
import { ImageText } from "../Components/ImageText";
import { ScrollView } from "react-native-gesture-handler";
export default SpreadComponent = () => {
    const data = [
        { x: 1, y: 1000 },
        { x: 2, y: 1650 },
        { x: 3, y: 2005 },
        { x: 4, y: 1425 },
        { x: 6, y: 1900 },
        { x: 5, y: 1300 },
        { x: 7, y: 1650 },
    ];

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.mainviewcontainer} >
                <ImageText
                    sign='¢'
                    title1="15"
                    title2='3.0%'
                    logoiamge={Images.chevron}
                    info={1}
                />
                <View style={styles.container}>
                    <VictoryChart
                        theme={VictoryTheme.material}
                        padding={{ left: 70, top: 50, right: 70, bottom: 50 }}
                        domainPadding={{ x: 20, y: 10 }}
                        height={300}
                    >
                        <VictoryAxis
                            tickValues={[1, 2, 3, 4, 5, 6, 7]}
                            tickFormat={["oct 9", "oct 10", "oct 11", "oct 12", "oct 13", "oct 14", "oct 15"]}
                            tickLabelComponent={<VictoryLabel style={{ textAnchor: 'middle', }} angle={-60} />}
                            style={{
                                axis: { stroke: "transparent" },
                                ticks: { stroke: "transparent" },
                                tickLabels: { color: '#99B699', fontFamily: Fonts.Roboto_Regular },
                                grid: { stroke: "#ffffff", strokeWidth: 1 }
                            }}
                        />
                        <VictoryAxis
                            dependentAxis
                            tickFormat={(x) => (`¢${x / 100}`)}
                            axis={{ stroke: "008d1e", strokeWidth: 1 }}
                            style={{
                                tickLabels: { fill: Colors.YAxis, fontSize: 15, fontFamily: Fonts.Roboto_Regular },
                                axis: { stroke: "transparent" },
                                ticks: { stroke: "transparent" },
                                grid: { strokeWidth: 1 }
                            }}
                        />
                        <VictoryLine
                            labelComponent={<VictoryTooltip />}
                            interpolation="natural"
                            style={{
                                data: { stroke: Colors.VictoryLine, strokeWidth: 5 },
                            }}
                            data={data}
                        />
                    </VictoryChart>
                </View>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.White,
        margin: 10
    },
    mainviewcontainer: {
        backgroundColor: Colors.White,
        margin: 15,
        borderRadius: 10,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        elevation: 6,
    },

});
import React from "react";
import { StyleSheet, View, ScrollView } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryTooltip, VictoryLine, VictoryAxis, VictoryLabel } from "victory-native";
import { Fonts, Colors, Images } from "../utils";
import { ImageText } from "../Components/ImageText";
export default AverageComponent = () => {
    const data = [
        { x: 1, y: 1000 },
        { x: 2, y: 1650 },
        { x: 3, y: 1405 },
        { x: 4, y: 2000 },
        { x: 5, y: 800 },
        { x: 6, y: 990 },
        { x: 7, y: 1650 },
    ];
    return (
        <ScrollView style={{ flex: 1, }}>
            <View style={styles.maincontainer} >

                <ImageText
                    sign='$'
                    title1="2.72"
                    title2='3.0%'
                    logoiamge={Images.logo}
                    info={1}
                    style={{ marginLeft: '24%' }}
                />
                <ImageText
                    sign='$'
                    title1="2.85"
                    title2='2.8%'
                    logoiamge={Images.chevron}
                />
                <View style={styles.chartcontainer}>
                    <VictoryChart
                        theme={VictoryTheme.material}
                        padding={{ left: 70, top: 50, right: 50, bottom: 50 }}
                        domainPadding={{ x: 20 }}
                        height={300}
                    >
                        <VictoryAxis
                            tickValues={[1, 2, 3, 4, 5, 6, 7]}
                            tickFormat={["Oct 9", "Oct 10", "Oct 11", "Oct 12", "Oct 13", "Oct 14", "Oct 15"]}
                            tickLabelComponent={<VictoryLabel style={{ textAnchor: 'middle', }} angle={-60} />}
                            style={{
                                ticks: { stroke: "transparent" },
                                axis: { stroke: "transparent" },
                                tickLabels: { fontSize: 13, fill: Colors.XAxis },
                                grid: { strokeWidth: 0 }
                            }}
                        />
                        <VictoryAxis
                            dependentAxis
                            tickFormat={(x) => (`$${x / 1000}`)}
                            axis={{ stroke: Colors.White, strokeWidth: 1 }}
                            style={{
                                tickLabels: { fill: Colors.YAxis, fontSize: 15, },
                                ticks: { stroke: "transparent" },
                                axis: { stroke: "transparent" },
                                grid: { strokeWidth: 1 }
                            }}
                        />
                        <VictoryBar
                            labelComponent={<VictoryTooltip />}
                            cornerRadius={{ top: 6, bottom: 6 }}
                            data={data}
                            style={{
                                data: { fill: Colors.VictoryBar, width: 12, height: 40 }
                            }}
                        />

                        <VictoryLine
                            labelComponent={<VictoryTooltip />}
                            interpolation="natural"
                            style={{
                                data: { stroke: Colors.VictoryLine, strokeWidth: 5 },
                            }}
                            data={[
                                { x: 1, y: 800 },
                                { x: 2, y: 1120 },
                                { x: 3, y: 1305 },
                                { x: 4, y: 825 },
                                { x: 6, y: 900 },
                                { x: 5, y: 1010 },
                                { x: 7, y: 1130 },
                            ]}
                        />
                    </VictoryChart>
                </View>
            </View>
            <View style={{ height: 10 }} />
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    maincontainer: {
        backgroundColor: Colors.White,
        flex: 1,
        marginHorizontal: 15,
        borderRadius: 10,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        elevation: 6
    },
    chartcontainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.White,
        marginLeft: 10,
        paddingHorizontal: 10,
    },
});
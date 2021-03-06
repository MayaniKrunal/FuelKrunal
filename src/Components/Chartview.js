import React from "react";
import { StyleSheet, View, } from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme, VictoryTooltip, VictoryLine, VictoryAxis, VictoryLabel } from "victory-native";
import { Fonts } from "../utils";
const data = [
    { x: 1, y: 310 },
    { x: 2, y: 800 },
    { x: 3, y: 500 },
    { x: 4, y: 725 },
    { x: 5, y: 1000 },
    { x: 6, y: 800 },
    { x: 7, y: 650 },
];

export default Chartview = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }} >
            <View style={styles.container}>
                <VictoryChart
                    theme={VictoryTheme.material}
                    padding={{ left: 90, top: 50, right: 90, bottom: 50 }}
                    domainPadding={{ x: 15 }}
                    maxDomain={{ y: 1000 }}
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
                            grid: { stroke: "#f0f0f0", strokeWidth: 1, }
                        }}
                    />
                    <VictoryAxis
                        dependentAxis
                        orientation="right"
                        tickFormat={(x) => (`${x / 10}%`)}
                        style={{
                            tickLabels: { fill: '#fec53d', fontSize: 15, fontFamily: Fonts.Roboto_Regular },
                            ticks: { stroke: "transparent" },
                            axis: { stroke: "transparent" },
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

                    <VictoryLine
                        labelComponent={<VictoryTooltip />}
                        interpolation="natural"
                        style={{
                            data: { stroke: "#fec53d", strokeWidth: 5 },
                        }}
                        data={[
                            { x: 1, y: 400 },
                            { x: 2, y: 580 },
                            { x: 3, y: 490 },
                            { x: 4, y: 625 },
                            { x: 5, y: 510 },
                            { x: 6, y: 700 },
                            { x: 7, y: 830 },
                        ]}
                    />
                </VictoryChart>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        margin: 10
    }
});
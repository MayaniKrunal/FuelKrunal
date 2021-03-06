import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { VictoryChart, VictoryLine, VictoryAxis, } from "victory-native";
import { Fonts, Colors, Icons, } from "../utils";
export default CardComponent = ({ data }) => {
    return (
        <TouchableOpacity>
            <View style={styles.maincontainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Image
                            source={data.imageurl}
                            style={styles.mainimage}
                        />
                        <Text style={styles.titletext}>{data.title}</Text>
                    </View>
                    <Image
                        source={Icons.roundi}
                        style={[styles.imagecontainer, { tintColor: '#dee7df' }]}
                    />
                </View>
                <VictoryChart
                    padding={0}
                    domainPadding={{ x: 20 }}
                    height={70}
                    width={140}
                >
                    <VictoryAxis
                        style={{
                            ticks: { stroke: "transparent" },
                            axis: { stroke: "transparent" },
                            tickLabels: { fill: "transparent" }
                        }}
                    />
                    <VictoryLine
                        style={{
                            data: { stroke: Colors.VictoryLine, strokeWidth: 5 },
                        }}
                        data={data.axis}
                    />
                </VictoryChart>
                <View>
                    <View style={[styles.textview, { alignSelf: 'center' }]}>
                        <Text style={{ fontSize: 18, fontFamily: Fonts.Roboto_Black }}>$</Text>
                        <Text style={{ fontSize: 25, fontFamily: Fonts.Roboto_Black }}> {data.Price}</Text>
                    </View>
                    <View style={styles.textview}>
                        <View style={styles.imageviewcontainer}>
                            <Image source={Icons.up}
                                style={[styles.imagecontainer, { tintColor: Colors.White }]}
                            />
                        </View>
                        <Text style={{ fontFamily: Fonts.Roboto_Regular }}>  Predict 3c</Text>
                    </View>
                    <View style={[styles.textview, { marginVertical: 8 }]}>
                        <Image source={Icons.location}
                            style={styles.imagecontainer}
                        />
                        <Text style={{ color: '#89a98f' }}> {data.time} Min</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    maincontainer: {
        backgroundColor: Colors.White,
        margin: 10,
        padding: 10,
        borderRadius: 12,
        marginVertical: 20,
    },
    imagecontainer: {
        height: 18,
        width: 18,
        resizeMode: 'contain',
        borderRadius: 50,
        tintColor: '#89a98f'
    },
    imageviewcontainer: {
        height: 30,
        width: 30,
        backgroundColor: Colors.VictoryBar,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textview: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
    },
    mainimage: {
        height: 40,
        width: 40,
        resizeMode: 'contain',
        borderRadius: 50,
    },
    titletext: {
        fontFamily: Fonts.Roboto_Black,
        fontSize: 15,
        marginTop: 5
    }
})
import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Colors, Icons, Images } from "../utils";
export default Header = () => {
    return (
        <View style={styles.maincontainer}>

            <Image
                source={Images.logo}
                style={styles.logoimage}
            />
            <Image
                source={Icons.notification}
                style={styles.notificationimage}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    maincontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
    },
    logoimage: {
        height: 50,
        width: 50,
        resizeMode: 'contain',
        borderRadius: 10
    },
    notificationimage: {
        height: 40,
        width: 40,
        resizeMode: 'contain',
        tintColor: Colors.LebelColor
    }
})
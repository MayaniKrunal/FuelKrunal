import React from "react";
import { View, Dimensions, SafeAreaView, Platform } from "react-native";
import { Modalize } from 'react-native-modalize';
import CompareComponent from "./CompareComponent";
import MapImageComponent from "./MapImageComponent";

const { width, height } = Dimensions.get('window');
export default ModalizeComponent = ({ index, modalRef }) => {

    return (
        <Modalize ref={modalRef}
            rootStyle={{ top: 44 }}
            modalStyle={{}}
            modalHeight={index === 0 ? height / 1.75 : height / 1.6}
            scrollViewProps={{ showsVerticalScrollIndicator: false }}
        >
            {index === 0 ?
                <CompareComponent />
                :
                <MapImageComponent />
            }
        </Modalize>
    );
}
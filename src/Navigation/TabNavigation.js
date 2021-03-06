import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Pricing from "../Screen/Pricing";
import Sales from "../Screen/Sales";
import Customers from "../Screen/Customers";
import Macro from "../Screen/Macro";
import TabComponent from "../Components/TabComponent";

export default TabNavigator = () => {

    const Tab = createMaterialTopTabNavigator();

    return (

        <Tab.Navigator
            swipeEnabled={false}
            tabBar={props => (
                <TabComponent {...props} />
            )}
        >
            <Tab.Screen name='Pricing' component={Pricing} />
            <Tab.Screen name='Sales' component={Sales} />
            <Tab.Screen name='Customers' component={Customers} />
            <Tab.Screen name='Macro' component={Macro} />
        </Tab.Navigator>
    );
};

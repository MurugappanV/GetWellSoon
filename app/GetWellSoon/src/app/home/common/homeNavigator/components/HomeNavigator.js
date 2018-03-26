import React, { PureComponent } from "react";
import { TabNavigator } from "react-navigation";
import History from "../../../history";
import Profile from "../../../profile";
import Order from "../../../order";

const HomeNavigator = TabNavigator({
        Order: { screen: Order },
        History: { screen: History },
        Profile: { screen: Profile },
    }, {
        animationEnabled: true,
        tabBarOptions: {
            // activeTintColor: Colors.ACTIVE_ICON_COLOR,
            // inactiveTintColor: Colors.IN_ACTIVE_ICON_COLOR,
            // showIcon: true,
            showLabel: true,
            // style: basicStyles.pageHeader,
            // indicatorStyle: basicStyles.activeBackGround
        },
    }
);

export default HomeNavigator;
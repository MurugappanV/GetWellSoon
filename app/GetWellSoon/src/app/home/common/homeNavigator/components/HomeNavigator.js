import React, { PureComponent } from "react";
import { Text, Image } from 'react-native';
import { TabNavigator, TabBarBottom } from "react-navigation";
import History from "../../../history";
import Profile from "../../../profile";
import Order from "../../../order";
import Header from "../../header";
import { basicStyles } from "../../../../../common/styles/styleSheet";
import colors from "../../../../../common/constants/colors";

const HomeNavigator = TabNavigator({
        Order: { screen: Order, navigationOptions: { header: ({navigation}) => <Header navigation={navigation}/>} },
        History: { screen: History, navigationOptions: { header: ({navigation}) => <Header navigation={navigation}/>} },
        Profile: { screen: Profile, navigationOptions: { header: ({navigation}) => <Header navigation={navigation}/>} },
    }, {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                if (routeName === 'Order') {
                    return <Image style={basicStyles.tabImage} tintColor={tintColor} source={require('../../../../../../assets/images/pill.png')} />;
                } else if (routeName === 'History') {
                    return <Image style={basicStyles.tabImage} tintColor={tintColor} source={require('../../../../../../assets/images/history.png')} />;
                } else if (routeName === 'Profile') {
                    return <Image style={basicStyles.tabImage} tintColor={tintColor} source={require('../../../../../../assets/images/face.png')} />;
                }
                return <Image style={basicStyles.tabImage} tintColor={tintColor} source={require('../../../../../../assets/images/pill.png')} />;
            },
            tabBarLabel: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                return <Text style={[{fontSize: focused ? 12 : 10, color: tintColor, alignSelf: 'center'}]} >routeName</Text>;
            },
          }),
        animationEnabled: true,
        tabBarOptions: {
            showLabel: false,
            activeTintColor: colors.DARK_IMAGE_COLOR,
            inactiveTintColor: colors.LIGHT_IMAGE_COLOR,
            style: basicStyles.tabBar,
            // indicatorStyle: basicStyles.activeBackGround
        },
        tabBarPosition: 'bottom',
        tabBarComponent: TabBarBottom,
        lazy: false
    }
);

export default HomeNavigator;
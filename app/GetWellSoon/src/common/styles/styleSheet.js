import Dimensions from 'Dimensions';
import { StyleSheet , Platform} from 'react-native';
import colors from '../constants/colors';

export const fullHeight = Dimensions.get('window').height;
export const fullWidth = Dimensions.get('window').width;
export const width80pc = fullWidth * 0.5;
export const statusBarHeight = 23;
export const headerHeight = 52;

const fonts = StyleSheet.create({
    default: {
        ...Platform.select({
            ios: { 
                fontFamily: 'Arial', 
            }, 
            android: { 
                fontFamily: 'Roboto' 
            }
        })
    },
});

const sizes = StyleSheet.create({
    fullViewSize: {
        width: fullWidth,
        height: fullHeight,
    },
    fullDeviceWidth: {
        width: fullWidth
    },
    homeHeaderContainer: {
        height: statusBarHeight + headerHeight,
        width: fullWidth,
        paddingTop: statusBarHeight
    },
    headerImage: {
        height: 40,
        width: 40
    },
    tabBar: {
        height: 50,
        width: fullWidth
    },
    tabImage: {
        height: 22,
        width: 22
    },
    bigImage: {
        height: width80pc,
        width: width80pc
    }
});

export const basicCompStyles = StyleSheet.create({
    bgBaseColor: {
        backgroundColor: colors.BG_BASE_COLOR
    },
    bgBaseColorLight: {
        backgroundColor: colors.BG_BASE_COLOR_LIGHT
    },


    fullSize: {
        flex: 1
    },


    flexColumnNC: {
        flexDirection: 'column', 
        alignItems: 'center'
    },
    flexColumnCC: {
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    flexRowNC: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    aliginContentC: {
        alignContent: 'center'
    },

    defaultPadding: {
        padding: 10
    },
    defaultPaddingSmall: {
        padding: 5
    },
    defaultPaddingL: {
        paddingLeft: 10
    },
    defaultElevation: {
        elevation: 5
    }
});

export const compStyles = StyleSheet.create({
    mainHeaderTextBold: {
        fontWeight: 'bold',
        color: colors.HEADER_TEXT_COLOR,
        // textShadowColor: colors.HEADER_TEXT_SHADOW_COLOR,
        // textShadowOffset: { width: 3, height: 3 },
        // textShadowRadius: 10
    },
    mainHeaderText: {
        color: colors.HEADER_TEXT_COLOR,
        // textShadowColor: colors.HEADER_TEXT_SHADOW_COLOR,
        // textShadowOffset: { width: 3, height: 3 },
        // textShadowRadius: 10
    },
    mainHeaderTextBig:{
        fontSize: 22
    },
    mainHeaderTextSmall: {
        fontSize: 16
    },
});

export const basicStyles = {
    deviceFullView: [
        sizes.fullViewSize,
        basicCompStyles.bgBaseColor
    ],
    homeHeaderContainer: [
        sizes.homeHeaderContainer,
        basicCompStyles.bgBaseColor,
        basicCompStyles.defaultElevation
    ],
    homeHeaderInnerContainer: [
        basicCompStyles.fullSize,
        basicCompStyles.flexRowNC,
        basicCompStyles.defaultPadding
    ],
    headerTitle: [
        basicCompStyles.fullSize,
        basicCompStyles.aliginContentC,
        basicCompStyles.defaultPaddingL
    ],
    textBig: [
        compStyles.mainHeaderText,
        compStyles.mainHeaderTextBig,
        fonts.default
    ],
    textSmall: [
        compStyles.mainHeaderText,
        compStyles.mainHeaderTextSmall,
        fonts.default
    ],
    mainHeaderTextBig: [
        compStyles.mainHeaderTextBold,
        compStyles.mainHeaderTextBig,
        fonts.default
    ],
    mainHeaderTextSmall: [
        compStyles.mainHeaderTextBold,
        compStyles.mainHeaderTextSmall,
        fonts.default
    ],
    headerImage: [
        sizes.headerImage
    ],
    tabImage: [
        sizes.tabImage
    ],
    tabBar: [
        sizes.tabBar,
        basicCompStyles.bgBaseColor,
        basicCompStyles.defaultPaddingSmall,
        basicCompStyles.defaultElevation
    ],
    tabContainer: [
        basicCompStyles.bgBaseColorLight, 
        basicCompStyles.fullSize,
        basicCompStyles.flexColumnCC
    ],
    bigImage: [
        sizes.bigImage
    ]
}
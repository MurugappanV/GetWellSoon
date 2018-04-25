import Dimensions from 'Dimensions';
import { StyleSheet , Platform} from 'react-native';
import colors from '../constants/colors';

export const fullHeight = Dimensions.get('window').height;
export const fullWidth = Dimensions.get('window').width;
export const width80pc = fullWidth * 0.5;
export const width25pc = fullWidth * 0.25;
export const width40pc = fullWidth * 0.4;
export const width20pc = fullWidth * 0.2;
export const statusBarHeight = 23;
export const headerHeight = 52;
export const tabBarHeight = 50;
export const tabFullHeight = fullHeight - headerHeight - statusBarHeight - tabBarHeight;

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
        height: tabBarHeight,
        width: fullWidth
    },
    tabImage: {
        height: 22,
        width: 22
    },
    mediumImage: {
        height: 35,
        width: 35
    },
    bigImage: {
        height: width80pc,
        width: width80pc
    },
    profImage: {
        height: width40pc,
        width: width40pc
    },
    tabContainer: {
        minHeight: tabFullHeight
    },
    defaultInputHeight: {
        height: 40
    },
    defaultAreaHeight: {
        height: 120
    },
});

export const basicCompStyles = StyleSheet.create({
    bgBaseColor: {
        backgroundColor: colors.BG_BASE_COLOR
    },
    bgBaseColorLight: {
        backgroundColor: colors.BG_BASE_COLOR_LIGHT
    },
    normalTextColor: {
        color: colors.NORAML_TEXT_COLOR
    },
    brightTextColor: {
        color: colors.BRIGHT_TEXT_COLOR
    },
    orangeTextColor: {
        color: colors.ORANGE_TEXT_COLOR
    },
    darkTextColor: {
        color: colors.DARK_TEXT_COLOR
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
    flexColumnCN: {
        flexDirection: 'column', 
        justifyContent: 'center',
    },
    flexColumnSaC: {
        flexDirection: 'column', 
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    flexRowNC: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    flexRowSaN: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    aliginContentC: {
        alignContent: 'center'
    }, 
    aliginSelfC: {
        alignSelf: 'center'
    }, 
    aliginSelfS: {
        alignSelf: 'stretch'
    },
    alignTextCenter: {
        textAlign: 'center'
    },
    alignTextRight: {
        textAlign: 'right'
    },

    defaultPadding: {
        padding: 10
    },
    bigPadding: {
        padding: 30
    },
    defaultMarginTB: {
        marginTop: 10,
        marginBottom: 10
    },
    spacingMarginT: {
        marginTop: 50
    },
    smallSpacingMarginT: {
        marginTop: 30
    },
    defaultMarginSmall: {
        margin: 5
    },
    defaultPaddingSmall: {
        padding: 5
    },
    defaultPaddingL: {
        paddingLeft: 10
    },
    defaultElevation: {
        elevation: 5
    },
    seperateItemPadding: {
        paddingTop: 20
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
    mainHeaderTextBigger:{
        fontSize: 35
    },
    mainHeaderTextSmall: {
        fontSize: 16
    },
    mainHeaderTextSmaller: {
        fontSize: 12
    },
});

export const basicStyles = {
    deviceFullView: [
        sizes.fullViewSize,
        basicCompStyles.bgBaseColor
    ],
    deviceFullViewLight: [
        sizes.fullViewSize,
        basicCompStyles.bgBaseColorLight
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
    tabContainerInsideView: [
        sizes.tabContainer,
        basicCompStyles.flexColumnCC,
        basicCompStyles.defaultPadding
    ],
    headerTitle: [
        basicCompStyles.fullSize,
        basicCompStyles.aliginContentC,
        basicCompStyles.defaultPaddingL
    ],
    textBig: [
        basicCompStyles.darkTextColor,
        basicCompStyles.seperateItemPadding,
        basicCompStyles.alignTextCenter,
        compStyles.mainHeaderTextBig,
        fonts.default
    ],
    textBigSimple: [
        basicCompStyles.darkTextColor,
        compStyles.mainHeaderTextBig,
        fonts.default
    ],
    textBigger: [
        basicCompStyles.darkTextColor,
        basicCompStyles.alignTextCenter,
        compStyles.mainHeaderTextBigger,
        fonts.default
    ],
    textSmall: [
        basicCompStyles.normalTextColor,
        basicCompStyles.seperateItemPadding,
        compStyles.mainHeaderTextSmall,
        fonts.default
    ],
    textSmallDark: [
        basicCompStyles.darkTextColor,
        compStyles.mainHeaderTextSmall,
        fonts.default
    ],
    textSmallOrange: [
        basicCompStyles.orangeTextColor,
        compStyles.mainHeaderTextSmaller,
        fonts.default
    ],
    textInputSmall: [
        basicCompStyles.darkTextColor,
        compStyles.mainHeaderTextSmall,
        sizes.defaultInputHeight,
        fonts.default
    ],
    textAreaSmall: [
        basicCompStyles.darkTextColor,
        compStyles.mainHeaderTextSmall,
        sizes.defaultAreaHeight,
        fonts.default
    ],
    textSmaller: [
        basicCompStyles.normalTextColor,
        compStyles.mainHeaderTextSmaller,
        fonts.default
    ],
    textSmallerLink: [
        basicCompStyles.brightTextColor,
        compStyles.mainHeaderTextSmaller,
        fonts.default
    ],
    textSmallBright: [
        basicCompStyles.brightTextColor,
        compStyles.mainHeaderTextSmall,
        fonts.default
    ],
    textWhiteBig: [
        compStyles.mainHeaderTextBold,
        compStyles.mainHeaderTextBig,
        fonts.default
    ],
    textWhiteSmall: [
        compStyles.mainHeaderTextBold,
        compStyles.mainHeaderTextSmall,
        fonts.default
    ],
    tabBar: [
        sizes.tabBar,
        basicCompStyles.bgBaseColor,
        basicCompStyles.defaultPaddingSmall,
        basicCompStyles.defaultElevation
    ],
    scrollTabContainer: [
        basicCompStyles.bgBaseColorLight, 
        // basicCompStyles.fullSize,
        basicCompStyles.flexColumnNC,
        basicCompStyles.bigPadding,
        sizes.fullDeviceWidth
    ],
    tabContainer: [
        basicCompStyles.bgBaseColorLight, 
        basicCompStyles.fullSize,
        basicCompStyles.flexColumnCC
    ],
    bigImage: [
        sizes.bigImage
    ],
    profImage: [
        sizes.profImage
    ], 
    mediumImage: [
        sizes.mediumImage
    ],
    headerImage: [
        sizes.headerImage
    ],
    tabImage: [
        sizes.tabImage
    ],
}
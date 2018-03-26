import Dimensions from 'Dimensions';
import { StyleSheet , Platform} from 'react-native';

export const fullHeight = Dimensions.get('window').height;
export const fullWidth = Dimensions.get('window').width;

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
});

export const basicCompStyles = StyleSheet.create({
    
});

export const basicStyles = {
    deviceFullView: [
        sizes.fullViewSize
    ],
}
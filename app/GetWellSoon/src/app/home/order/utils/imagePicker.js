var ImagePicker = require('react-native-image-picker');
import { Platform } from 'react-native';
import firebase from 'react-native-firebase';

var options = {
    title: 'Select Prescription',
    customButtons: [],
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

export function pickImage() {
    ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
        
        if (response.didCancel) {
            console.log('User cancelled image picker');
        }
        else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        }
        else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
        }
        else {
            let source = { uri: response.uri };
            uploadImage(response.uri, "first").then(uri => console.log("uri -- ", uri)).catch(err => console.log("err - ", err));
            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        
            // callBack(source);
        }
    });
}

const uploadImage = (uri, imageName, mime = 'image/jpg') => {
    console.log("uri - ", uri)
    return new Promise((resolve, reject) => {
        const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
        const imageRef = firebase.storage().ref('posts').child(imageName)
        imageRef.put(uploadUri, { contentType: mime })
        .then(() => {
            return imageRef.getDownloadURL()
        })
        .then((url) => {
            resolve(url)
        })
        .catch((error) => {
            reject(error)
        })
    })
}
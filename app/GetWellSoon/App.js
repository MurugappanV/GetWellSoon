/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import firebase from 'react-native-firebase';
var ImagePicker = require('react-native-image-picker');
// import ImagePicker from 'react-native-image-crop-picker';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

var options = {
  title: 'Select Prescription',
  customButtons: [],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

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

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super()
    this.state = { avatarSource : null}
  }
  componentDidMount() {
    SplashScreen.hide()
  }
  pickImage = () => {
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
    
        this.setState({
          avatarSource: source
        });
      }
    });
    // ImagePicker.openPicker({
    //   width: 300,
    //   height: 400,
    //   cropping: true
    // }).then(image => {
    //   console.log(image);
    // });
  }

  render() {
    console.log("in render -- " + this.state.avatarSource);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <TouchableOpacity onPress={this.pickImage}>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        </TouchableOpacity>

        {!!this.state.avatarSource && <Image source={this.state.avatarSource} style={{width: 200, height : 200}} />}
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

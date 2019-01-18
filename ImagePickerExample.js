import React from 'react';
import { Button, Image, View , Dimensions} from 'react-native';
import Lightbox from 'react-native-lightbox';
import { ImagePicker } from 'expo';

const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

export default class ImagePickerExample extends React.Component {
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Pick an image from camera roll"
          onPress={this._pickImage}
        />
        {image &&
            <Lightbox >
                <Image source={{ uri: image }} style={{ width: widthDevice, height: heightDevice }} />
            </Lightbox>
          
          }
      </View>
    );
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}
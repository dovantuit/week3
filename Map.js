import React from 'react';
import {View, Text, Image} from 'react-native';
import { MapView, ImagePicker } from 'expo';
import { Marker, Callout } from 'react-native-maps';
import ImagePickerExample from './ImagePickerExample.js';


export default class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            locations: [], 
        };
    
      }

    handlePress = (bien1) =>{
        const coordinate = bien1.nativeEvent.coordinate;
        let locations = this.state.locations;
        
        locations.push(coordinate)
        this.setState({
            locations: locations
        })
        console.log(this.state)
    }

    handleCallout =(result)=>{
        
    }

  render() {
    return (
      <MapView
        style={{ 
            flex: 1,  
            width:400, 
            height:400}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onLongPress={this.handlePress}
      >
{/* loop vi tri trong location de tao marker */}
      { this.state.locations.map((location, index) => {
          return(
            <Marker coordinate= {{
                latitude: location.latitude,
                longitude: location.longitude,
                }}
                key={index}
                >
                <Callout
                    onPress={this.handleCallout}
                >
                <View style={{
                    width : 150,
                    height : 150,
                    // cho nay de chinh khung callout
                }}>
                    <Text>HELLO</Text>
                    <ImagePickerExample></ImagePickerExample>
                </View>
                </Callout>
            </Marker>
          )
        }
      ) }

      </MapView>
    );
  }
}

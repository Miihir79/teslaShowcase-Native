import React from 'react';
import {View,Text, ImageBackground} from 'react-native';
import StyledButton from '../styledButton';
import styles from './style';

const CarItem = (props) =>{

  const {name,tagline,image,taglineCTA} = props.car;
    return(
        <View style={styles.carContainer}>
        <ImageBackground source={image}
          style={styles.image}
          />
        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{tagline}
            {' '}
            <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <StyledButton
          type="primary" 
          text="custom order"
          onPress={() =>{
            console.warn("custom order was pressed")
          }}
          />
          <StyledButton 
          type="secondary" 
          text="Existing Inventory"
          onPress={()=>{
            console.warn("existing inventory was pressed")
          }}
          />
        </View>
        
      </View>
    );
};

export default CarItem;
import React from 'react';
import {View, Text, TouchableWithoutFeedback, Keyboard, AsyncStorage, Alert} from 'react-native';
import {Form, Item, Input, Label, Button} from 'native-base';

export default class EditContactScreen extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      fname : "",
      lname : '',
      phone : '',
      email : '',
      address : '',
      key : ''
    }
  }

  componentDidMount(){
    const {navigation} = this.props;
    navigation.addListener('willFocus', () => {
      var key = this.props.navigation.getParam('key','');
      this.getContact();
    })
  } 

  getContact = async key => {
    await AsyncStorage.getItem(key)
    .then(contactJsonString => {
      var contact = JSON.parse(contactJsonString);
      contact['key'] = key;
      this.setState(contact);
    }
  )
    .catch(error => {
      console.log(error);
    })
  }

  static navigationOptions = {
    title : 'Edit Contact'
  };

  render(){
    return(
      <View>
        <Text>EditContactScreen</Text>
      </View>
    );
  }
}

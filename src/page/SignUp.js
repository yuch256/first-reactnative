import React, { Component } from 'react';
import { AsyncStorage, Text, } from 'react-native';
import {
  Container,
  Content,
  Form, Item,
  Input,
  Label,
  Button,
} from 'native-base';

import Sign from '../action/Sign'
import NavigationUtil from "../navigator/NavigationUtil"

export default class SignUp extends Component {
  state = {
    usr: null,
    pwd: null,
  }

  // componentDidMount() {
  //   this._bootstrapAsync()
  // }

  // _bootstrapAsync = () => {
  //   AsyncStorage.getItem('usr')
  //     .then(value => value ?
  //       NavigationUtil.goPage({
  //         navigation: this.props.navigation
  //       }, 'Main') : null
  //     )
  // }

  render() {
    const { navigation } = this.props
    const { usr, pwd } = this.state
    return (
      <Container>
        <Content>
          <Form style={{ marginBottom: 50 }}>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input
                value={usr}
                onChangeText={usr => this.setState({ usr })}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input
                value={pwd}
                onChangeText={pwd => this.setState({ pwd })}
              />
            </Item>
          </Form>
          <Button
            block
            style={{ marginLeft: 10, marginRight: 10 }}
            onPress={() => Sign.appSignUp(navigation, usr, pwd)}
          >
            <Text>Sign Up</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
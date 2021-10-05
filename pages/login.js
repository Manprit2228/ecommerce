import React, {Component, useRef, useState} from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';


import TextField from '../components/form-fields/input';
import PasswordField from '../components/form-fields/password';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: {value: '', error: ''},
        password: {value: '', error: ''},
      },
    };
  }

  formSubmitContent = e => {
    e.preventDefault();
    const {form} = this.state;


    let isValid = true;
    for (let key in form) {
      if (form[key].error.length) {
        isValid = false + 'erro1';
      } else if (!form[key].value) {
        form[key].error = 'This field is required';
        isValid = false + 'erro2';
      }
    }

    if (isValid == true) {
        console.log(isValid);
    } else {
        console.log("error");
        this.setState(form);
    }
    
  };

  handleChange = (e, inputName) => {
    let tempForm = JSON.parse(JSON.stringify(this.state.form));
    tempForm[inputName].value = e;
    this.setState({form: tempForm});
  };

  handleValidation = (changeFor) => {
    let tempForm = JSON.parse(JSON.stringify(this.state.form));
    console.log(tempForm[changeFor].value);
    if (changeFor === 'email') {
      if (tempForm[changeFor].value == '') {
        tempForm[changeFor].error = 'This field is required.';
      } else if (regexUtils.email.test(tempForm[changeFor].value)) {
        tempForm[changeFor].error = '';
      } else {
        tempForm[changeFor].error = 'Please enter a valid email.';
      }
    } else if (changeFor === 'number') {
      if (!tempForm[changeFor].value) {
        tempForm[changeFor].error = 'This field is required.';
      } else if (regexUtils.number.test(tempForm[changeFor].value)) {
        tempForm[changeFor].error = '';
      } else {
        tempForm[changeFor].error = 'Please enter a valid Phone Number.';
      }
    } else {
      if (!tempForm[changeFor].value) {
          tempForm[changeFor].error = 'This plain field is required.';
          console.log(tempForm[changeFor]);
        } else {
            tempForm[changeFor].error = '';
      }
    }

    this.setState({form: tempForm});

  };

  render() {
    return (
      <View>
        <Text>Welcome to the kraya please login</Text>
        <TextField
          placeholder="username"
          name="name"
          errorMessage={this.state.form.name.error}
          value={this.state.form.name.value}
          handleChange={e => this.handleChange(e, 'name')}
          handleValidation={e => this.handleValidation('name')}
        />
        <PasswordField
          placeholder='password'
          name='password'
          errorMessage={this.state.form.password.error}
          value={this.state.form.password.value}
          handleChange={e => this.handleChange(e,'password')}
          handleValidation={e => this.handleValidation('password')}
        />
        <View>
          <TouchableOpacity onPress={e => this.formSubmitContent(e)}>
            <Text>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('signIn')}>
            <Text>sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Login;

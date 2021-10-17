import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import axios from 'axios';

// component calls of input fields and password field 
import TextField from '../components/form-fields/input';
import PasswordField from '../components/form-fields/password';

// sign in component for signin screen 
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        firstName: {value: '', error: ''},
        lastName: {value: '', error: ''},
        username: {value: '', error: ''},
        email: {value: '', error: ''},
        address: {value: '', error: ''},
        password: {value: '', error: ''},
      },
    };
  }

  // function for submitting the data 
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
      let url = 'http://192.168.1.11:3000/send-data';

      axios({
        'method': 'POST',
        'url' : url,
        'headers':{
          'content-type':'application/json'
        },
        'data': {
          'firstName':this.state.form.firstName.value,
          'lastName':this.state.form.lastName.value,
          'email':this.state.form.email.value,
          'address':this.state.form.address.value,
          'username':this.state.form.username.value,
          'password': this.state.form.password.value,
        }
      }).then((response) => {
        if(response.data.message == "created") {
          this.props.navigation.navigate('logIn');
        }
      })
    } else {
      console.log('error');
      this.setState(form);
    }
  };

  // handle validation on change of values in input fields 
  handleChange = (e, inputName) => {
    let tempForm = JSON.parse(JSON.stringify(this.state.form));
    tempForm[inputName].value = e;
    this.setState({form: tempForm});
  };

  // function for handling the validation of input fields 
  handleValidation = changeFor => {
    let tempForm = JSON.parse(JSON.stringify(this.state.form));
    let emailReg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (changeFor === 'email') {
      if (tempForm[changeFor].value == '') {
        tempForm[changeFor].error = 'This field is required.';
      } else if (emailReg.test(tempForm[changeFor].value)) {
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
        {/* Form for users registration  */}
        <TextField
          placeholder="firstname"
          name="firstName"
          errorMessage={this.state.form.firstName.error}
          value={this.state.form.firstName.value}
          handleChange={e => this.handleChange(e, 'firstName')}
          handleValidation={e => this.handleValidation('firstName')}
        />
        <TextField
          placeholder="lastname"
          name="lastName"
          errorMessage={this.state.form.lastName.error}
          value={this.state.form.lastName.value}
          handleChange={e => this.handleChange(e, 'lastName')}
          handleValidation={e => this.handleValidation('lastName')}
        />
        <TextField
          placeholder="email"
          name="email"
          errorMessage={this.state.form.email.error}
          value={this.state.form.email.value}
          handleChange={e => this.handleChange(e, 'email')}
          handleValidation={e => this.handleValidation('email')}
        />
        <TextField
          multiline={true}
          numberOfLines={4}
          placeholder="address"
          name="address"
          errorMessage={this.state.form.address.error}
          value={this.state.form.address.value}
          handleChange={e => this.handleChange(e, 'address')}
          handleValidation={e => this.handleValidation('address')}
        />

        <TextField
          placeholder="Username"
          name="username"
          errorMessage={this.state.form.username.error}
          value={this.state.form.username.value}
          handleChange={e => this.handleChange(e, 'username')}
          handleValidation={e => this.handleValidation('username')}
        />
        <PasswordField
          placeholder="password"
          secureTextEntry
          name="password"
          errorMessage={this.state.form.password.error}
          value={this.state.form.password.value}
          handleChange={e => this.handleChange(e, 'password')}
          handleValidation={e => this.handleValidation('password')}
        />
        <View>
          {/* button to submit data  */}
          <TouchableOpacity onPress={e => this.formSubmitContent(e)}>
            <Text>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SignIn;

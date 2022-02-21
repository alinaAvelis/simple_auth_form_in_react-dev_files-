import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

import { AuthorizationForm } from './authorizationForm'; 


export class AuthorizationFormContainer extends Component  {
    constructor (props) {
        super(props);
        this.state = {
          email: "",
          password: "",
          authorized: false,
        }
    
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }


    
    handleSubmit(event) {
        event.preventDefault();
        const { password, email} = this.state;
        const passwordMessage = document.getElementById('passMess');
        const emailMessage = document.getElementById('emailMess');
        const newData = this.props.data;

        newData.forEach(elem => { 
            const auth = password === elem.password && email === elem.email;
            this.setState({
                authorized: auth
            });

            function showMessage(elem1, elem2, text1, text2, messBlock) {

              if(elem1 !== elem2) {
                messBlock.innerHTML = text1;
              }
  
              if(elem1 === '') {
                messBlock.innerHTML = text2;
              }
            }

            showMessage(password, elem.password, 'Введен неверный пароль. Попробуйте снова.', 'Введите пароль', passwordMessage);
            showMessage(email, elem.email, 'Введен неверный e-mail. Попробуйте снова.', 'Введите e-mail', emailMessage)

        });

        if(this.state.authorized) {

            this.setState({
                email: '',
                password:''
             }); 
          }
    }


    onChangeHandler(e){  
      this.setState({  
        [e.target.name]: e.target.value   
      });
    } 

   render() {
       
       if(this.state.authorized) {
        return <Redirect to='/home'/>
        
       } else {
        return <AuthorizationForm 
                  onChangeHandler={this.onChangeHandler} 
                  handleSubmit={this.handleSubmit} 
                  data={this.props.data}
                  password={this.state.password}
                  email={this.state.email}/>;
       }
   }
}
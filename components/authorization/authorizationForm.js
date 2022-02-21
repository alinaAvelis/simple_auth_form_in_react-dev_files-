import React, {useEffect} from 'react';
import { SubmitButton } from '../submitButton/submitButton';
import { Input } from '../input/input';

import './auth.scss';

export const AuthorizationForm = (props) => {
    const { password, email} = props;
    const newData = props.data;

    useEffect(() => {
        const passwordMessage = document.getElementById('passMess');
        const emailMessage = document.getElementById('emailMess');
  
        newData.forEach(elem => {
          function hideMessage(elem1, elem2, messBlock) {
            if(elem1 === elem2) {
              messBlock.innerHTML = '';
            }
          }
  
          hideMessage(password, elem.password, passwordMessage);
          hideMessage(email, elem.email, emailMessage);
   
        });
    }, [password, email, newData])

    return (
        <>
            <form className="auth__form" onSubmit={props.handleSubmit}>
                <Input type="email" placeholder="Введите e-mail" name="email" onChangeHandler={props.onChangeHandler}/>
                <p className="form__message" id="emailMess"></p>
                <Input type="password" placeholder="Введите пароль" name="password" onChangeHandler={props.onChangeHandler}/>
                <p className="form__message" id="passMess"></p>

                <SubmitButton value="Войти" />
                            
            </form>        
        </>
        
    )
}
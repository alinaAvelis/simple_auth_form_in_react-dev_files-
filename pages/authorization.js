import React, {Component} from 'react';
import { PageTitle } from '../components/title';
import { AuthorizationFormContainer } from '../components/authorization/authorizationContainer';

export class Authorization extends Component {  
    constructor (props) {
        super(props);
        this.state = {
          data: [{
              email: 'example@gmail.com',
              password: 'koj8954'
          }]
        }
      }

      render() {
        return (
            <>
                <PageTitle title="Авторизация" />
                <AuthorizationFormContainer  data={this.state.data}/>
            </>
        )
      }
    
}
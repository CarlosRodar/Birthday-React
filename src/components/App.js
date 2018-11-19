import React, {Component} from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import AgeStats from './AgeStats';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      newDate: '',
      birthday: '1998-08-03',
      showState: false
    }
  }

  changeBirthday() {
      console.log(this.state);
      this.setState({ birthday: this.state.newDate, showState: true});
  }

  render() {
    return (
      <div className="App">
      <center>
          <Form inline>
            <h2>Input Your Birthday!</h2>
              <FormControl type="date" onChange={ event => this.setState({ newDate: event.target.value })}>
              </FormControl>
              {' '}
              <Button onClick={()=> this.changeBirthday()}>
                Submit
              </Button>
              {
                this.state.showState ?
                   <div className="fade age-stats">
                      <AgeStats date={this.state.birthday}/>
                   </div>

                :
                <div></div>
              }

          </Form>
          </center>
      </div>
    )
  }
}

export default App;

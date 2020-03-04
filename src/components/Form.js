import React from 'react';
import { Form, Radio, Segment } from 'semantic-ui-react';
import { predictHeight } from '../actions';
import { connect } from 'react-redux';


class mainForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      gender: 'male',
      height: 50,
      years: 0,
      months: 0
    };
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleHeightChange = this.handleHeightChange.bind(this);
    this.handleYearsChange = this.handleYearsChange.bind(this);
    this.handleMonthsChange = this.handleMonthsChange.bind(this);
  }
  handleGenderChange(e, data){
    this.setState({
      gender: data.value
    });
  }
  handleHeightChange(e){
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
       this.setState({height: e.target.value})
    }
  }
  handleYearsChange(e, data){
    this.setState({
      years: data.value
    });
  }
  handleMonthsChange(e, data){
    this.setState({
      months: data.value
    });
  }
  render(){
    const selectYearsOptions = [
      { key: 0, text: '0', value: 0 },
      { key: 1, text: '1', value: 1 },
      { key: 2, text: '2', value: 2 },
      { key: 3, text: '3', value: 3 },
      { key: 4, text: '4', value: 4 }
    ];
    const selectMonthsOptions = [
      { key: 0, text: '0', value: 0 },
      { key: 1, text: '1', value: 1 },
      { key: 2, text: '2', value: 2 },
      { key: 3, text: '3', value: 3 },
      { key: 4, text: '4', value: 4 },
      { key: 5, text: '5', value: 5 },
      { key: 6, text: '6', value: 6 },
      { key: 7, text: '7', value: 7 },
      { key: 8, text: '8', value: 8 },
      { key: 9, text: '9', value: 9 },
      { key: 10, text: '10', value: 10 },
      { key: 11, text: '11', value: 11 }
    ];
    return (
      <Segment>
        <Form onSubmit={()=>{this.props.predictHeight(this.state)}}>
          <Form.Group>
            <label>Gender:</label>
            <Form.Field
              control={Radio}
              label="Male"
              value="male"
              checked={this.state.gender === 'male'}
              onChange={this.handleGenderChange}
            />
            <Form.Field
              control={Radio}
              label="Female"
              value="female"
              checked={this.state.gender === 'female'}
              onChange={this.handleGenderChange}
            />
          </Form.Group>
          <Form.Group>
            <label>Current age:</label>
            <Form.Select label="Years" options={selectYearsOptions} onChange={this.handleYearsChange} value={this.state.years} />
            <Form.Select label="Months" options={selectMonthsOptions} onChange={this.handleMonthsChange} value={this.state.months} />
          </Form.Group>
          <Form.Group>
            <label>Current height:</label>
            <Form.Input label="Height(cm)" value={this.state.height} onChange={this.handleHeightChange} />
          </Form.Group>
          <Form.Button>
            Submit
          </Form.Button>
        </Form>
      </Segment>
    );
  }
}

export default connect(null, { predictHeight: predictHeight })(mainForm);

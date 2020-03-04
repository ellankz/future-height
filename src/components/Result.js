import React from 'react';
import { connect } from 'react-redux';
import { List } from 'semantic-ui-react';

class Result extends React.Component {
  renderResult(){
    return this.props.heightPredictions.map((line, ind)=>{
      return (
        <List.Item key={ind}>
          <List.Icon name="paw" size="large" verticalAlign="middle" />
          <List.Content>
            <List.Header as="a">{line.predictHeight}</List.Header>
            <List.Description as="a">{line.age.years} years {line.age.months} months</List.Description>
          </List.Content>
        </List.Item>
      );
    });
  }
  render(){
    return (
      <div>
        <List divided relaxed>
          {this.renderResult()}
        </List>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    heightPredictions: state.heightPredictions
  };
}

export default connect(mapStateToProps)(Result);

import React, { Component } from 'react';
import { Picker} from 'native-base';

export default class HeaderCompoent extends Component {
    constructor(props) {
    super(props);
    this.state ={
      selected:  0
    };
  }
  
  onValueChange(value) {
    this.setState({
      selected: value
    });
    this.props.emptyNewsList([])
    this.props.updateSource(value, 1)
  }
  
  renderPickerItem(){
    return this.props.source.map((source, index) => {
      return(
        <Picker.Item label={source.name} value={source.id} style={{color: '#fff',alignSelf: 'center'}}/>
      )
    })
  }
  
  render() {
    if(this.props.source != undefined)
    return (
        <Picker
          note
          mode="dropdown"
          style={{ width: '100%',backgroundColor: CONFIG.themeColor,color: '#fff'}}
          selectedValue={this.state.selected}
          onValueChange={this.onValueChange.bind(this)}
        >
          {this.renderPickerItem()}
        </Picker>
      );
    else
      return null
  }
}
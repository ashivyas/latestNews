import React, { Component } from "react";
import { Picker } from "native-base";

export default class HeaderCompoent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0
    };
  }

  onValueChange(value) {
    this.setState({
      selected: value
    });
    this.props.emptyNewsList([]);
    this.props.updateSource(value, 1);
  }

  renderPickerItem() {
    return this.props.source.map((source, index) => {
      return (
        <Picker.Item
          label={source.name}
          key={source.id}
          value={source.id}
          style={styles.pickerMainStyle}
        />
      );
    });
  }

  render() {
    if (this.props.source != undefined)
      return (
        <Picker
          note
          mode="dropdown"
          style={styles.pickerStyle}
          selectedValue={this.state.selected}
          onValueChange={this.onValueChange.bind(this)}
        >
          {this.renderPickerItem()}
        </Picker>
      );
    else return null;
  }
}

let styles = {
  pickerStyle: {
    width: "100%",
    backgroundColor: "#f00",
    color: "#fff",
    fontFamily: "gsr"
  },
  pickerMainStyle: {
    color: "#fff",
    alignSelf: "center",
    fontFamily: "gsr"
  }
};

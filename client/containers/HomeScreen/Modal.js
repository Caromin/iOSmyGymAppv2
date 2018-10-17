import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ListItem, List } from "react-native-elements";

import global from "../../styles/styles";

class HomeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      specificList: []
    };
    this.updateState = this.updateState.bind(this);
  }

  componentWillMount() {
    this.updateState();
  }

  updateState = () => {
    let pendingArr = [];
    const createArr = new Promise(resolve => {
      this.props.completeList.forEach(index => {
        index.list.forEach(innerArr => {
          if (innerArr.muscleGroup === this.props.selectedBodyPart) {
            pendingArr.push(innerArr.title);
          }
        });
      });
      resolve();
    });
    createArr.then(() => {
      this.setState({ specificList: pendingArr });
    });
  };

  render() {
    const list = this.state.specificList.map((obj, index) => (
      <ListItem
        key={index}
        roundAvatar
        title={obj}
        onPress={() => {
          null;
        }}
        hideChevron
      />
    ));
    return (
      <View style={{ flex: 1 }}>
        <ScrollView alwaysBounceVertical={false}>
          <List containerStyle={global.defaultListMargin}>{list}</List>
        </ScrollView>
      </View>
    );
  }
}

HomeModal.propTypes = {
  completeList: PropTypes.array
};

const mapStateToProps = state => ({
  completeList: state.isActiveReducer.weeklyCompletedList
});

export default connect(mapStateToProps)(HomeModal);

import React, { Component } from "react";
import { View, Text } from "react-native";
import { ListItem } from "react-native-elements";
import uuidv1 from "uuid/v1";
import Swipeout from "react-native-swipeout";
import SortableListView from "react-native-sortable-listview";

import global from "../../styles/styles";

class RowComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const swipeoutBtns = obj => {
      return [
        {
          text: "Delete",
          backgroundColor: "#d9534f",
          color: "#000",
          underlayColor: "rgba(217, 83, 79, 0.8)",
          onPress: () => {
            remove(obj, this.props.workoutId);
          }
        }
      ];
    };

    const { data, remove } = this.props;
    return (
      <Swipeout key={uuidv1()} autoClose={true} right={swipeoutBtns(data)}>
        <ListItem
          {...this.props.sortHandlers}
          roundAvatar
          avatar={data.avatarURL}
          title={data.title}
          subtitle={data.difficulty}
          subtitleStyle={global.defaultListItem}
          onPress={() => {}}
        />
      </Swipeout>
    );
  }
}

class ExerciseList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { list, workoutId, remove, reorderList } = this.props;
    const cloneObj = Object.assign({}, list);
    let order = Object.keys(cloneObj);

    return (
      <View style={global.defaultScrollView}>
        {list.length === 0 ? (
          <View style={global.defaultEmptyPage}>
            <Text>Start Adding Exercises!</Text>
          </View>
        ) : (
          <SortableListView
            alwaysBounceVertical={false}
            style={{ flex: 1 }}
            data={cloneObj}
            order={order}
            onRowMoved={e => {
              reorderList(e, workoutId);
              // save where, i want to move it without deleting, then remove the original spot
              // console.log(order.splice(e.to, 0, order.splice(e.from, 1)[0]));
            }}
            renderRow={row => (
              <RowComponent workoutId={workoutId} data={row} remove={remove} />
            )}
          />
        )}
      </View>
    );
  }
}

export default ExerciseList;

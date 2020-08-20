import React from "react";
import { FlatList, StyleSheet, Text, TouchableHighlight } from "react-native";
import { connect } from "react-redux";
import { ListItem, Body, View, Right } from "native-base";
import { Fontisto } from "@expo/vector-icons";
import { nanoid } from "nanoid";
import { addHouse, deleteHouse } from "../store/actions/action";

class AppScreen extends React.Component {
  handleDelete = (id) => {
    const { onDelete } = this.props;
    onDelete && onDelete(id);
  };

  handleAdd = () => {
    const { onAdd } = this.props;
    const id = nanoid();
    onAdd && onAdd(id);
    this.props.navigation.navigate("Add", { id: id });
  };

  renderItem = ({ item }) => (
    <ListItem>
      <Body style={{ flexDirection: "row" }}>
        <Text style={{ width: 40 }}>{item.number}</Text>
        <Text style={{ width: 80 }}>{item.street}</Text>
        <Text style={{ width: 40 }}>{item.floors}</Text>
        <Text style={{ width: 40 }}>{item.area}</Text>
        <Text style={{ width: 40 }}>{item.dateBuild}</Text>
      </Body>
      <Right style={{ flexDirection: "row" }}>
        <TouchableHighlight
          onPress={() => this.props.navigation.navigate("Add", { id: item.id })}
        >
          <Fontisto name="player-settings" size={24} color="black" />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.handleDelete(item.id)}>
          <Fontisto name="close-a" size={24} color="red" />
        </TouchableHighlight>
      </Right>
    </ListItem>
  );

  keyExtractor = (item, index) => index.toString();

  render() {
    const { housesData } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={housesData}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleAdd}
          underlayColor="#f2f3f3"
        >
          <Text>Add house</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f3f3",
  },
  button: {
    backgroundColor: "grey",
    borderColor: "black",
    borderWidth: 1,
    minHeight: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});

function mapStateToProps(state) {
  return {
    housesData: state.housesData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: (id) => dispatch(addHouse(id)),
    onDelete: (id) => dispatch(deleteHouse(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppScreen);

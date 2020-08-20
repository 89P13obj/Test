import React from "react";
import { View, StyleSheet, Button, TextInput } from "react-native";
import { connect } from "react-redux";
import { editHouse } from "../store/actions/action";
import { Label } from "native-base";

class AddHouseScreen extends React.Component {
  handleEdit = (id, data) => {
    const { onEdit } = this.props;
    onEdit && onEdit(id, data);
    this.props.navigation.goBack();
  };

  render() {
    const { house } = this.props;
    const id = this.props.route.params.id;
    let data = { ...house };
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.row}>
            <Label>Number house</Label>
            <TextInput
              style={styles.input}
              defaultValue={data.number}
              onChangeText={(text) => {
                data.number = text;
              }}
            />
          </View>
          <View style={styles.row}>
            <Label>Street</Label>
            <TextInput
              style={styles.input}
              defaultValue={data.street}
              onChangeText={(text) => {
                data.street = text;
              }}
            />
          </View>
          <View style={styles.row}>
            <Label>Floors</Label>
            <TextInput
              style={styles.input}
              defaultValue={data.floors}
              onChangeText={(text) => {
                data.floors = text;
              }}
            />
          </View>
          <View style={styles.row}>
            <Label>Area</Label>
            <TextInput
              style={styles.input}
              defaultValue={data.area}
              onChangeText={(text) => {
                data.area = text;
              }}
            />
          </View>
          <View style={styles.row}>
            <Label>Build date</Label>
            <TextInput
              style={styles.input}
              defaultValue={data.dateBuild}
              onChangeText={(text) => {
                data.dateBuild = text;
              }}
            />
          </View>
        </View>

        <Button onPress={() => this.handleEdit(id, data)} title="Save" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  row: { alignItems: "center", flexDirection: "row", flex: 1, margin: 15 },
  input: { height: 18, borderBottomWidth: 2, width: "100%" },
});

function mapStateToProps(state, props) {
  return {
    house: state.housesData.find((item) => item.id === props.route.params.id),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onEdit: (id, data) => dispatch(editHouse(id, data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddHouseScreen);

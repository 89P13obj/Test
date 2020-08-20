import * as types from "./actionType";

export function addHouse(id) {
  return {
    type: types.ADD,
    payload: {
      id,
    },
  };
}

export function editHouse(id,newHouse) {
  return {
    type: types.EDIT,
    payload: {
      id,
      newHouse,
    },
  };
}

export function deleteHouse(id,newHouse) {
  return {
    type: types.DELETE,
    payload: {
      id,
    },
  };
}

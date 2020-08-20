import * as types from "../actions/actionType";
import {initialState} from './initialValue'


export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.ADD: {
      return {
        housesData: [...state.housesData,
                      {
                        id:payload.id,
                        number:'',
                        street:'',
                        floors:'',
                        area:'',
                        dateBuild:''
                      }
                    ],
      };
    }  
    case types.EDIT: {
      return {
        housesData: state.housesData.map((item) => item.id === payload.id ? payload.newHouse : item)};
    }  
    case types.DELETE: {
      return {
        housesData: state.housesData.filter((item) => item.id !=payload.id)}; 
    }  
    default:
      return state;
  }
}

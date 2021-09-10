import ADDTACHE from "../constant/ADDTACHE";
const initialeList = { List: [] };

const AddTacheReducer = (state = initialeList, action) => {
  switch (action.type) {
    case ADDTACHE: {
      return { List: [...state.List, action.payload] };
    }
    case "DELTACHE": {
      const listFiltre = state.List.filter(
        (e) => e.identifient != action.payload
      );
      return { ...state, List: [...listFiltre] };
    }
  }
  return state;
};

export default AddTacheReducer;

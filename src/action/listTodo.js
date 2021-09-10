import ADDTACHE from "../constant/ADDTACHE";
const AddList = (newTache) => ({
  type: ADDTACHE,
  payload: newTache,
});

const delList = (identifient) => ({
  type: "DELTACHE",
  payload: identifient,
});

export default { AddList, delList };

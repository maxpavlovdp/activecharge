import { AppDispatch } from "../store";
import axios from "axios";
import { FetchSlice } from "./FetchSlice";

const urlOn = `${process.env.REACT_APP_LINK_SERVE}device/start`;
const urlDeviceStatus = `${process.env.REACT_APP_LINK_SERVE}device/getDeviceStatus`;
const urlChargingStatus = `${process.env.REACT_APP_LINK_SERVE}device/getChargingStatus`;


export const fetchChargingData = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(FetchSlice.actions.chargingDataFetching());
    let stationNumber = localStorage.getItem('stationNumber');
    const response = await axios.get(urlOn + "?station=" + stationNumber);
    dispatch(FetchSlice.actions.chargingDataFetchingSuccess(response.data));
    console.log(response.data);
  } catch (e: any) {
    dispatch(FetchSlice.actions.chargingDataFetchingError(e.message));
    console.log(e.message);
  }
};


export const getDeviceStatus = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(FetchSlice.actions.deviceStatusFetching());
    let stationNumber = localStorage.getItem('stationNumber');
    const response = await axios.get(urlDeviceStatus + "?station=" + stationNumber);
    dispatch(FetchSlice.actions.deviceStatusFetchingSuccess(response.data));
    console.log(response.data);
  } catch (e: any) {
    dispatch(FetchSlice.actions.deviceStatusFetchingError(e.message));
    console.log(e.message);
  }
};

export const getChargingStatus = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(FetchSlice.actions.chargingStatusFetching());
    let stationNumber = localStorage.getItem('stationNumber');
    const response = await axios.get(urlChargingStatus + "?station=" + stationNumber);
    dispatch(
      FetchSlice.actions.chargingStatusFetchingSuccess(response.data)
    );
    console.log("chargedKwt: " + response.data);
  } catch (e: any) {
    dispatch(FetchSlice.actions.chargingStatusFetchingError(e.message));
    console.log(e.message);
  }
};

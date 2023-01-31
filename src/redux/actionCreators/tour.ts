import { createAction } from "@reduxjs/toolkit";
import { GET_TOURS, GET_TOURS_SUCCESS, GET_TOUR_DETAIL } from "./types";

const getTourDetail = createAction<any>(GET_TOUR_DETAIL)
const getTours = createAction(GET_TOURS)
const getToursSuccess = createAction<any>(GET_TOURS_SUCCESS)

export { getTours, getTourDetail, getToursSuccess }
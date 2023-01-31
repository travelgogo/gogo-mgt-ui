import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { getTourDetail, getTours, getToursSuccess } from "redux/actionCreators/tour";

interface TourItem {
    id:number;
    no: number;
    code: string;
    name: string;
    startDate: string;
    price: string;
    startingGate: string,
    seatRemaining: number,
    status: string
}

const initialState: any = {
    tour: null,
    tours: [],
    isFetchingTour: false
};

const tourReducer = createReducer(initialState,
    (builder) => {
        builder
            .addCase(getTours, (state, action) => {
                const data: TourItem[] = [
                    {
                        id: 1,
                        no: 1,
                        code: 'GXR126',
                        name: 'Rovaniemi - Runua Wildlife Park - Saariselka',
                        price: '599.25',
                        startDate: '2022-12-10',
                        seatRemaining: 10,
                        startingGate: 'Ho Chi Minh City',
                        status: 'Opening'
                    },
                    {
                        id: 1,
                        no: 1,
                        code: 'GXR126',
                        name: 'Rovaniemi - Runua Wildlife Park - Saariselka',
                        price: '599.25',
                        startDate: '2022-12-10',
                        seatRemaining: 10,
                        startingGate: 'Ho Chi Minh City',
                        status: 'Opening'
                    }
                ]
                    return {
                        ...state,
                        //isFetchingTour: true,
                    }
                })
            .addCase(getToursSuccess, (state, action) => {
                return {
                    ...state,
                    //isFetchingTour: true,
                    tours: action.payload
                }
            })
            // .addCase(getTourDetail, (state, action) => {
            //     return {
            //         ...state,
            //         tour: action.payload
            //     }
            // })
    })

export default tourReducer;
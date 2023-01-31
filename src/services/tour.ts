import { GET_TOUR_DETAIL, GET_TOURS } from "./apis";
import { baseApi, ax } from "./base";

export function getTourDetailService(tourId: string) {
    return { id: 1, name: 'du lich mien tay' }
    //return await baseApi.get(GET_TOUR_DETAIL.replace('{{tourId}}', tourId))
}
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
export async function getToursService() {
    return await baseApi.get(GET_TOURS);
}
import { StringMap } from "@angular/compiler/src/compiler_facade_interface";

export interface Contract{
    id: number;
    contract_date: Date;
    organization: Number;
    agent: Number;
    client: Number;
    start_date_of_trip: Date;
    end_date_of_trip: Date;
    preliminary_agreement: Number;
}

export interface Trip_member{
    id: number;
    contract: number;
    client: number;
}

export interface Route{
    id: number;
    contract: number;
    hotel_reservation: number;
}

export interface Hotel_reservation{
    id:number;
    hotel:number;
    room_type: String;
    nutrition: String;
    start_date: Date;
    end_date: Date;
}
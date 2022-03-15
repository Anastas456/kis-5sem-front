export interface Agreement{
    id: number;
    date_of_agreement: Date;
    number_of_trip_members: Number;
    start_date_of_trip: Date;
    end_date_of_trip: Date;
    organization: Number;
    employee: Number;
    country_of_visit: Number;
    client: Number;
}

export interface Country{
    id: Number;
    country_name: String;
}

export interface City{
    id: Number;
    country: Number;
    city_name: String;
}

export interface Visiting_city{
    id: Number;
    preliminary_agreement: Number;
    city: Number;
}
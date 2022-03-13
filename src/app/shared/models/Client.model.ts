export interface Client{
    id?: Number;
    status: String;
    surname: String;
    name: String;
    patronymic: String;
    sex: String;
    date_of_birth: Date;
    place_of_birth: String;
}

export interface Rus_passport{
    id?: Number;
    passport_series: Number;
    passport_number: Number;
    date_of_issue: Date;
    expiration_date: Date;
    issuing_authority: String;
    client: Number;
}
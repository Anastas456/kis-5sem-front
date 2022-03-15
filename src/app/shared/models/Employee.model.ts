export interface Employee{
    id?:Number;
    surname: String;
    name: String;
    patronymic: String;
    position: String;
    date_of_birth: Date;
    photo: any;
    login: String;
    password: String;
    organization: Number;
}

export interface Organization{
    id: Number;
    organization_name: String;
}
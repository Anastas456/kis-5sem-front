export interface Payment{
    id: number;
    payment_date: Date;
    organization: number;
    contract : number;
    amount_in_rubles: number;
    currency: number;
}
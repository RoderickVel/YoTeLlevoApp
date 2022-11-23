export interface RespuestaUbicacion {
    status: string;
    totalResults: number;
    data: Data[];
}

    export interface Data{
        administrative_area: string
        confidence: number
        continent: string
        country: string
        country_code: string
        county: string
        distance: number
        label: string
        latitude: number
        locality: string
        longitude: number
        name: string
        neighbourhood: string
        number: string
        postal_code: number
        region: string
        region_code: string
        street: string
        type: string
    }
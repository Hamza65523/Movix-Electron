export type Headers= {
    Authorization: string;
}

export type Params ={
    [key: string]: any;
}

export type ApiResponse= {
    [key: string]: any;
}

export type FetchDataFromApi = (url: string, params?: Params) => Promise<any>;

export interface IRest {
    method: string,
    url: string,
    handler: unknown,
}

export enum HttpMethods {
    POST    = 'post',
    GET     = 'get',
    PUT     = 'put',
    PATCH   = 'patch',
    DELETE  = 'delete',
}
export const errorHandler = (err, req, res, next ) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch(statusCode){
        case 400: res.json({ tittle : 'Bad Request', message: err.message, stackTrace: err.stack });
                  break;
        case 401: res.json({ tittle : 'UnAuthorized', message: err.message, stackTrace: err.stack });
                  break;
        case 403: res.json({ tittle : 'Forbidden', message: err.message, stackTrace: err.stack });
                  break;
        case 404: res.json({ tittle : 'Not Found', message: err.message, stackTrace: err.stack });
                  break;
        case 500: res.json({ tittle : 'Internal Server Error', message: err.message, stackTrace: err.stack });
                  break;
        default: res.json({ tittle : 'unknown error', message: err.message, stackTrace: err.stack });
                  break;
    }
    
}
import { API_REQUEST } from '../constants/constants'

apiMiddleware.$inject = ['$http']

export function apiMiddleware ($http) {
    return store => next => action => {
        if (!action[API_REQUEST]) return next(action)

        const { meta } = action
        const { config, types } = action[API_REQUEST]
        const [ requestType, successType, errorType] = types

        next({type: requestType})

        $http(config)
            .then(response => {
                next({
                    type: successType,
                    payload: response.data,
                    meta
                })
            })
            .catch(response => {
                next({
                    type: errorType,
                    error: true,
                    payload: response.data,
                    meta
                })
            })
    }
}

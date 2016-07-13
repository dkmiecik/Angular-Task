import uiRouter from 'angular-ui-router'
import ngRedux from 'ng-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

// Core
import { apiMiddleware } from './utils'
import * as repoActions from './actions/repo'
// Store
import rootReducer from './reducers/repo'
// Router
import { routerConfig } from './router'
// Views
import { AppComponent, InfoComponent, RepoComponent } from './components'
// Styles
import './styles/style.scss'

let app = angular.module('app', [
    ngRedux,
    uiRouter
])

    .factory('apiMiddleware', apiMiddleware)
    .value('repoActions', repoActions)

    .component('app', AppComponent)
    .component('info', InfoComponent)
    .component('repo', RepoComponent)

    .config(routerConfig)
    .config(['$ngReduxProvider', $ngReduxProvider => {
        $ngReduxProvider.createStoreWith(rootReducer, [thunk, createLogger()])
    }])


angular.element(document).ready(() => {
    angular.bootstrap(document, [app.name], {strictDi: true})
})

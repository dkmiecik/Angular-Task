routerConfig.$inject = [
    '$stateProvider',
    '$urlRouterProvider'
]

export function routerConfig ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state({
            abstract: true,
            name: 'app',
            views: {
                '': {
                    template: '<app></app>'
                }
            }
        })
        .state({
            name: 'app.info',
            url: '/',
            views: {
                'main@app': {
                    template: '<info></info>'
                }
            }
        })
        .state({
            name: 'app.repo',
            url: '/repo/:repoId',
            views: {
                'main@app': {
                    template: '<repo></repo>'
                }
            }
        })
    $urlRouterProvider.otherwise('/')
}

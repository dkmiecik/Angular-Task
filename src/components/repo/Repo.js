import { Component } from '../../utils'
import * as repos from '../../constants/repos'
import template from './repo.html'


@Component({
    controllerAs: 'repo',
    template
})

export class RepoComponent {
    static $inject = [
        '$ngRedux',
        '$scope',
        '$stateParams',
        'repoActions'
    ]

    constructor ($ngRedux, $scope, $stateParams, repoActions) {
        const disconnect = $ngRedux.connect(state => ({
            repo: state.repo
        }), repoActions)((state, actions) => {
            this.actions = actions
        })

        $scope.$on('$destroy', disconnect)

        let rep = $stateParams.repoId.slice(1)
        let repoDetails = this.getRepoOwner(rep)
        this.actions.fetchRepoDetails(repoDetails.owner, rep)
        this.repoName = repoDetails.name

        $ngRedux.subscribe(() => {
            this.repoStatus = $ngRedux.getState().repo.get('status')
        })
    }

    getRepoOwner (repoId) {
        for (let i in repos) {
            if (repos[i].repo === repoId) {
                return { 'owner': repos[i].owner, 'name': repos[i].name }
            }
        }
    }

}

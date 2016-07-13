import { Component } from '../../utils'
import template from './menu-list.html'
import * as repos from '../../constants/repos'

@Component({
    controllerAs: 'app',
    template
})

export class AppComponent {

    constructor () {
        this.listItems = repos
    }
}

import { Component } from '../../utils'


@Component({
    controllerAs: 'info',
    template: `
        <form class="infoContent" name="infoForm">
            <h1>Założenia projektu</h1>
            <ul>
                <li class="passed">Aplikacja wyświetla stan ostatniego buildu Twoich pięciu ulubionych
                        publicznych projektów na Githubie
                </li>
                <li class="failed">Aplikacja korzysta z API Travis CI (<a
                        href="https://github.com/travis-ci/travis-ci/issues/5649">Wyjaśnienie</a>)
                </li>
                <li class="passed">UI dowolne – wymagane jedynie wizualne rozróżnienie buildów udanych i
                        nieudanych (np. kolorami zielony/czerwony)
                </li>
                <li class="passed">Aplikacja uwzględnia, że w przyszłości możemy chcieć wyświetlać więcej niż 5
                        projektów
                </li>
            </ul>
        </form>
  `
})

export class InfoComponent {}

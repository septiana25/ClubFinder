import './club-item.js';

class ClubList extends HTMLElement {
    set clubs(clubs) {
        this._clubs = clubs;
        this.render();
    }

    render(){
        this.innerHTML = '';
        this._clubs.forEach(club1 => {
            const clubItemElemnt = document.createElement('club-item');
            clubItemElemnt.club = club1;
            this.appendChild(clubItemElemnt);
        });
    }

    renderError(error) {
        this.innerHTML = '';
        this.innerHTML += `<h2 class="placeholder"> ${error} </h2>`;
    }
}

customElements.define('club-list', ClubList);
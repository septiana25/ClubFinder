import './club-item.js';

class ClubList extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    set clubs(clubs) {
        this._clubs = clubs;
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = '';
        this._clubs.forEach(club1 => {
            const clubItemElemnt = document.createElement('club-item');
            clubItemElemnt.club = club1;
            this.shadowDOM.appendChild(clubItemElemnt);
        });
        //console.log(this._clubs);
    }

    renderError(error) {
        this.shadowDOM.innerHTML += `
        <style>
            .placeholder {
                font-weight: lighter;
                color: rgba(0, 0, 0, 0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
        </style>`;
        this.shadowDOM.innerHTML = `<div class="placeholder">${error}</div>`;
    }
}

customElements.define('club-list', ClubList);
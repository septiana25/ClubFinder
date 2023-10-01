import '../component/club-list.js'
import '../component/search-bar.js';
import DataSource from "../data/data-source.js";

const main = _ => {
  const searchElement = document.querySelector('search-bar');
  const clubListElement = document.querySelector('club-list');

  const onButtonSearchClicked =  async _ => {
    console.log(searchElement.value1);

    try {
      const result = await DataSource.searchClub(searchElement.value1);
      renderResult(result)
    } catch (error) {
      fallbackResult(error);
    }
  };

  const renderResult = results => {
    clubListElement.clubs = results;
  };

  const fallbackResult = message => {
    clubListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
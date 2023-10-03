
class DataSource {
  static async searchClub(keyword) {
    /* 
      const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()) || club.description.toUpperCase().includes(keyword.toUpperCase()));
*/

    const response =  await fetch(`https://sports-api.dicoding.dev/teams/search?t=${keyword}`);
    const responseJson = await response.json();
    try {
      if (responseJson.teams.length) {
        return Promise.resolve(responseJson.teams);
      } else {
        return Promise.reject(`${keyword} is not found`);
      }
    } catch (error) { 
      return Promise.reject('Check your internet connection');
    }
  };
};

export default DataSource;
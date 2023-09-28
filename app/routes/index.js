import Route from '@ember/routing/route';

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

export default class IndexRoute extends Route {
  async model() {
    return await fetch('/api/rentals.json')
      .then((response) => response.json())
      .then((json) => {
        json.data.forEach((rental) => {
          if (COMMUNITY_CATEGORIES.includes(rental.attributes.category)) {
            rental.attributes.type = 'Community';
          } else {
            rental.attributes.type = 'Standalone';
          }
          rental.attributes.id = rental.id;
        });
        return json.data;
      });
  }
}

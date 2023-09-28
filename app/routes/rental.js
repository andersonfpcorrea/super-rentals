import Route from '@ember/routing/route';

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

export default class RentalRoute extends Route {
  async model(params) {
    return await fetch(`/api/rentals/${params.rental_id}.json`)
      .then((res) => res.json())
      .then((j) => {
        j.data.attributes.id = j.data.id;
        if (COMMUNITY_CATEGORIES.includes(j.data.attributes.category)) {
          j.data.attributes.type = 'Community';
        } else {
          j.data.attributes.type = 'Standalone';
        }
        return j.data.attributes;
      });
  }
}

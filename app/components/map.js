import Component from '@glimmer/component';
import ENV from 'super-rentals/config/environment';

const MAPQUEST_API = 'https://www.mapquestapi.com/staticmap/v5/map?';

export default class MapComponent extends Component {
  get src() {
    let { lng, lat, width, height, zoom } = this.args;
    let center = `center=${lat},${lng}`;
    let z = `zoom=${zoom}`;
    let size = `size=${width},${height}@2x`;
    let key = `key=${this.token}`;
    return `${MAPQUEST_API}${key}&${center}&${z}&${size}`;
  }

  get token() {
    return encodeURIComponent(ENV.MAPQUEST_ACCESS_TOKEN);
  }
}

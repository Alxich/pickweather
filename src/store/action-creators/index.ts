import * as WeatherActionCreators from './weather';
import * as NewsActionCreators from './news';

export default {
    ...WeatherActionCreators,
    ...NewsActionCreators
}
import { LocationHours } from './location-hours.model';

export class Location {
    name: String;
    location_type: String;
    address: String;
    time_zone: String;
    hours: LocationHours[];
}

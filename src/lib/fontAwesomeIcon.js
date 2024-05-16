import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faLocationDot,
    faHouse,
    faCompass
} from '@fortawesome/free-solid-svg-icons';

export default function setupFontAwesomeIcons() {
    library.add(
        faLocationDot, 
        faHouse,
        faCompass
    );
}
    
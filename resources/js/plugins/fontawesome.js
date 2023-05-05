// Icon
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faDribbble,
    faFacebookF,
    faGithub,
    faInstagram,
    faLinkedin,
    faTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export async function loadFontAwesome(app) {
    app.component("font-awesome-icon", FontAwesomeIcon);
    library.add(
        faFacebookF,
        faInstagram,
        faYoutube,
        faLinkedin,
        faTwitter,
        faDribbble,
        faGithub
    );
}

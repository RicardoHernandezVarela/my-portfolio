import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

/* Import Firebase keys */
import * as KEYS from '../keys';

const config = {
    apiKey: KEYS.apiKey,
    authDomain: KEYS.authDomain,
    databaseURL: KEYS.databaseURL,
    projectId: KEYS.projectId,
    storageBucket: KEYS.storageBucket,
    messagingSenderId: KEYS.messagingSenderId,
    appId: KEYS.appId
};

class Firebase {
    constructor(){
        app.initializeApp(config);

        // DB
        this.db = app.database();
    }

    /* DataBase API */

    /* Get site data */
    getSiteData = () => this.db.ref('siteData');

    /* Get all teaching resources */
    getTeachingResources = () => this.db.ref('teachingResources');

    /* Get specific value */
    // user = uid => this.db.ref(`users/${uid}`);
}

export default Firebase;
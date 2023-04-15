import { WebPlugin } from '@capacitor/core';
// import type { OktaAuthOptions } from '@okta/okta-auth-js';
import { OktaAuth } from '@okta/okta-auth-js';
export class OktaIdxWeb extends WebPlugin {
    async fetchTokens(username, password, config) {
        // try {
        const authClient = new OktaAuth({
            issuer: config.issuer,
            clientId: config.clientId,
            redirectUri: config.redirectUri,
            scopes: config.scopes
        });
        return authClient.signInWithCredentials({ username, password });
        // .then(transaction => {
        //   if (transaction.status === 'SUCCESS') {
        //     authClient.session.setCookieAndRedirect(transaction.sessionToken); // Sets a cookie on redirect
        //   } else {
        //     throw 'We cannot handle the ' + transaction.status + ' status';
        //   }
        // })
        // .catch(function (err) {
        //   console.error(err);
        // });
        // } catch (error) {
        //   console.error(error);
        // }
    }
    async authenticate() {
        console.log("Test Okta IDX");
    }
}
//# sourceMappingURL=web.js.map
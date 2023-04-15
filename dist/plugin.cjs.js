'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');
var oktaAuthJs = require('@okta/okta-auth-js');

const OktaIdx = core.registerPlugin('OktaIdx', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.OktaIdxWeb()),
});

class OktaIdxWeb extends core.WebPlugin {
    async fetchTokens(username, password, config) {
        // try {
        const authClient = new oktaAuthJs.OktaAuth({
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

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    OktaIdxWeb: OktaIdxWeb
});

exports.OktaIdx = OktaIdx;
//# sourceMappingURL=plugin.cjs.js.map

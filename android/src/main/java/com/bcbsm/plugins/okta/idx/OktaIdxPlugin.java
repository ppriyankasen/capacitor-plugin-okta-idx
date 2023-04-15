package com.bcbsm.plugins.okta.idx;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.okta.idx.sdk.api.client.IDXAuthenticationWrapper;
import com.okta.idx.sdk.api.client.ProceedContext;
import com.okta.idx.sdk.api.response.AuthenticationResponse;
import com.okta.idx.sdk.api.model.AuthenticationOptions;

import java.util.Set;

@CapacitorPlugin(name = "OktaIdx")
public class OktaIdxPlugin extends Plugin {

    private OktaIdx implementation = new OktaIdx();

    @PluginMethod
    public void suthenticate(String username, String password, String issuer, String clientId,
                             Set<String> scopes, String redirectUri) {
        IDXAuthenticationWrapper idxAuthenticationWrapper = new IDXAuthenticationWrapper(issuer, clientId, null, scopes, redirectUri);
        AuthenticationResponse beginResponse = idxAuthenticationWrapper.begin();
        AuthenticationResponse authenticationResponse = idxAuthenticationWrapper
                .authenticate(new AuthenticationOptions(username, password.toCharArray()), beginResponse.getProceedContext());


    }
}

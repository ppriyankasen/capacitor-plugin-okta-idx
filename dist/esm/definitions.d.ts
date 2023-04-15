import { Plugin } from '@capacitor/core';
export interface OktaIdxPlugin extends Plugin {
    fetchTokens(username: string, password: string, config: any): Promise<any>;
    authenticate(): void;
}

import { WebPlugin } from '@capacitor/core';
import type { OktaIdxPlugin } from './definitions';
export declare class OktaIdxWeb extends WebPlugin implements OktaIdxPlugin {
    fetchTokens(username: string, password: string, config: any): Promise<any>;
    authenticate(): Promise<void>;
}

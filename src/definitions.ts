// import type { OktaAuthOptions } from '@okta/okta-auth-js';
import { Plugin } from '@capacitor/core';

export interface OktaIdxPlugin extends Plugin {
  // echo(options: { value: string }): Promise<{ value: string }>;

  fetchTokens(username: string, password: string, config: any): Promise<any> ;

  authenticate(): void;
}

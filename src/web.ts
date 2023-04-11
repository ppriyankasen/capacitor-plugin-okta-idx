import { WebPlugin } from '@capacitor/core';

import type { OktaIdxPlugin } from './definitions';

export class OktaIdxWeb extends WebPlugin implements OktaIdxPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

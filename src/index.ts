import { registerPlugin } from '@capacitor/core';

import type { OktaIdxPlugin } from './definitions';

const OktaIdx = registerPlugin<OktaIdxPlugin>('OktaIdx', {
  web: () => import('./web').then(m => new m.OktaIdxWeb()),
});

export * from './definitions';
export { OktaIdx };

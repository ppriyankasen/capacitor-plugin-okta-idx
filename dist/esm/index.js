import { registerPlugin } from '@capacitor/core';
const OktaIdx = registerPlugin('OktaIdx', {
    web: () => import('./web').then(m => new m.OktaIdxWeb()),
});
export * from './definitions';
export { OktaIdx };
//# sourceMappingURL=index.js.map
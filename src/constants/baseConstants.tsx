declare var window: Record<string, Record<string, string>>;
export const IDENTITY_SERVER_ENDPOINT_URL = window._env
  ? `${window._env.REACT_APP_IDENTITY_SERVER_URL}`
  : 'https://.com';

export const CDN_URL = 'https:.com';
export const CDN_IMAGES_URL = `${CDN_URL}/images/{fileName}`;
export const ADYEN_LOGO_CARD_URL = '';
export const FEATURE_CODE = 'SS.UpdatePersonalDetail';
export const SCOPES = 'openid profile payment-data product-data';
export const DOMAIN_URL =
  window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
export const REDIRECT_URL = '/callback';
export const SILENT_REDIRECT_URL = '/silent_renew.html';

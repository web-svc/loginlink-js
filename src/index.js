let config = {};

export function init({ clientId, redirectUri }) {
  config.clientId = clientId;
  config.redirectUri = redirectUri || window.location.href;
}

export function login(customState) {
  const state = customState || generateRandomState();
  const authUrl = buildAuthUrl(config.clientId, config.redirectUri, state);
  window.location.href = authUrl;
}

export function getAuthCodeFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return {
    code: params.get("code"),
    state: params.get("state"),
    error: params.get("error"),
    error_description: params.get("error_description")
  };
}

// Helpers
function generateRandomState(length = 6) {
  const digits = '0123456789';
  return Array.from({ length }, () => digits[Math.floor(Math.random() * digits.length)]).join('');
}

function buildAuthUrl(clientId, redirectUri, state) {
  const query = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: 'code',
    scope = 'email,name,webguid'; // ✅ comma-separated scope
    state
  }).toString();

  return `https://loginlink.websvc.in/authorize?${query}`;
}

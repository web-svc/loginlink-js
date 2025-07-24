# loginlink-js

A simple OAuth 2.0 client SDK for [Login Link by WebSvc](https://loginlink.websvc.in).

## Installation

```bash
npm install loginlink-js


import { init, login, getAuthCodeFromUrl } from 'loginlink-js';

init({
  clientId: 'your-client-id',
  redirectUri: 'https://your-app.com/oauth/callback'
});

document.querySelector('#login').onclick = () => {
  login(); // will redirect to Login Link
};

// On callback page
const { code, state } = getAuthCodeFromUrl();

export const prerender = false;

import type { APIRoute } from 'astro';

const CLIENT_ID = (import.meta.env.GITHUB_CLIENT_ID || 'Ov23liawWB1fS1mYdOvM').trim();
const REDIRECT_URI = 'https://graphenumastro.vercel.app/api/auth/callback';

export const GET: APIRoute = async ({ url }) => {
  const scope = url.searchParams.get('scope') || 'repo,user';

  const authUrl = new URL('https://github.com/login/oauth/authorize');
  authUrl.searchParams.set('client_id', CLIENT_ID);
  authUrl.searchParams.set('redirect_uri', REDIRECT_URI);
  authUrl.searchParams.set('scope', scope);
  authUrl.searchParams.set('state', crypto.randomUUID());

  return Response.redirect(authUrl.toString(), 302);
};

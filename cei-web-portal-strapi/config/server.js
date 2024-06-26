module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 80),
  url: env('URL', 'https://cei-web-portal-strapi-latest.onrender.com'),
  URL: env('URL', 'https://cei-web-portal-strapi-latest.onrender.com'),
  app: {
    keys: env.array('APP_KEYS'),
  },
  admin: {
    url: env('ADMIN_URL', '/admin'),
    serveAdminPanel: env.bool('SERVE_ADMIN_PANEL', true),
  },
});

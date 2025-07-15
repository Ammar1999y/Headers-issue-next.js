const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`;

module.exports = {
  async headers() {
    const securityHeaders = [
      {
        key: "##################",
        value: "##################",
      },
      {
        key: "Content-Security-Policy",
        value: cspHeader.replace(/\n/g, ""),
      },
    ];

    return [
      {
        source: "/_next/static/:path*",
        headers: securityHeaders,
      },
      {
        source: "/_next/static/(.*)",
        headers: securityHeaders,
      },
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
    localeDetection: false,
  },
};

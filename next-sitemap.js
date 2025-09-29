/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://alalmaniazentrum.com',  // Remplace par ton domaine réel
  generateRobotsTxt: true,            // Génère aussi robots.txt
  sitemapSize: 5000,                   // Nombre maximum d'URLs par sitemap
  outDir: './public',                  // Génère dans public
  changefreq: 'weekly',                // Fréquence de mise à jour pour les pages
  priority: 0.7,                       // Priorité par défaut
  transform: async (config, path) => {
    return {
      loc: path, // URL relative
      changefreq: 'weekly',
      priority: path === '/' ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};

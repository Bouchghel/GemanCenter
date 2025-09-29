/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://alalmaniazentrum.com/',  // Remplace par ton domaine
  generateRobotsTxt: true,           // Génère automatiquement robots.txt
  outDir: './public',                  // important : mettre public
  sitemapSize: 7000,
  changefreq: 'daily',               // Fréquence de mise à jour
  priority: 0.7,
};

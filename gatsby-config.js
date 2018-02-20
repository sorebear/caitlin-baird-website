module.exports = {
   siteMetadata: {
      title: 'Caitlin Baird - Speaker, Trainer, Coach',
   },
   plugins: [
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-sass`,
      {
         resolve: `gatsby-plugin-typography`,
         options: {
            pathToConfigModule: `src/utils/typography.js`
         }
      }
   ]
};

module.exports = {
    plugins: [
        'gatsby-plugin-netlify-cms',
        {
          resolve: `gatsby-plugin-netlify-identity`,
          options: {
            url: `https://kawaii-awful-testimonials.netlify.app/`
          }
        }
    ]
}

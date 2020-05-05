# Creative Tech Blog

Gatsby Theme for Creative Tech Blog powered by headless WordPress JAM stack.

## WordPress Setup

1. Make sure to install the two WP plugins in the plugin folder _wp-gatsby-0.2.2.zip_ and _wp-graphql-0.6.1.zip_
2. Best you install and activate the default WordPress Twenty Twenty theme
3. Make sure you have Menus with the following slugs:

   - `primary` - Thats the top menu
   - `extended` - That is the menu that opens on the right side as drawer
   - `social-links-menu` - For the Social menu in the footer and in the expanded drawer

     - For the social Icons you need to adjust `SocialMenu.js`. There is a `SocialIcon` function that parses svgs depending on the Link label
4. Copy .env.example file to .env and change Environment variables to location to your WordPress instance

## Acknowledgements
- [gatsby-starter-wordpress-twenty-twenty](https://github.com/henrikwirth/gatsby-starter-wordpress-twenty-twenty)
- [gatsby-source-wordpress-experimental](https://github.com/TylerBarnes/gatsby/tree/feat/source-wordpress-v4/packages/gatsby-source-wordpress-experimental)
- [WPGatsby - WordPress Plugin](https://github.com/TylerBarnes/gatsby/tree/feat/source-wordpress-v4/packages/wp-gatsby)
- [Twenty Twenty - WordPress Theme](https://de.wordpress.org/themes/twentytwenty/)

## Author
- [@LouieChristie](https://github.com/louiechristie)

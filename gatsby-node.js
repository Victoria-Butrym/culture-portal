const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const directorsPageTemplate = path.resolve('src/templates/directorsPage.jsx');

  return graphql(`
    {
      allMarkdownRemark(
        filter: {frontmatter: {type: {eq: "director"}}}
        limit: 1000
        ) {
        edges {
          node {
            frontmatter {
              path
              imagepath
              gallery
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: directorsPageTemplate,
        context: {
          imagepath: node.frontmatter.imagepath,
          gallery: `Authors\\${node.frontmatter.gallery}\\gallery`,
          pathEn: `${node.frontmatter.path.substr(0, 11)}en${node.frontmatter.path.substr(13)}`,
          pathBe: `${node.frontmatter.path.substr(0, 11)}be${node.frontmatter.path.substr(13)}`,
          pathRu: `${node.frontmatter.path.substr(0, 11)}ru${node.frontmatter.path.substr(13)}`,
        }, // additional data can be passed via context
      });
    });
  });
};

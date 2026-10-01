// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// }

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query CaseStudy {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: "/markdown-pages/case-studies/" + node.frontmatter.slug,
      component: path.resolve("./src/templates/casestudy.js"),
      context: { slug: node.frontmatter.slug },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query ServicesDetails {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: "/markdown-pages/services/" + node.frontmatter.slug,
      component: path.resolve("./src/templates/services.js"),
      context: { slug: node.frontmatter.slug },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query service {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: "/markdown-pages/services/" + node.frontmatter.slug,
      component: path.resolve("./src/templates/services.js"),
      context: { slug: node.frontmatter.slug },
    })
  })
}

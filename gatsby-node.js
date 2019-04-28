const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blogPostContentful.js`)
  return graphql(`
    {
      allContentfulBlog {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      throw res.errors
    }
    //Create blog post pages
    const posts = res.data.allContentfulBlog.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.slug,
        component: blogPostTemplate,
        context: {
          slug: post.node.slug,
          previous,
          next,
        },
      })
    })
  })
}

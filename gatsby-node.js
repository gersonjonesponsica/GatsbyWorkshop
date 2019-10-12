const path = require(`path`)

const makeRequest = (graphql, request) =>
	new Promise((resolve, reject) => {
		// Query for nodes to use in creating pages.
		resolve(
			graphql(request).then(result => {
				if (result.errors) {
					reject(result.errors)
				}
				return result
			})
		)
	})

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions

	const getMarkdownBlogs = makeRequest(
		graphql,
		`query {
		  allMarkdownRemark{
		    edges {
		      node {
		        id
		        frontmatter{
		          path
		        }
		      }
		    }
		  }
		}
 `
	).then(result => {

        console
		result.data.allMarkdownRemark.edges.forEach(data => {
			createPage({
				path: "blog/"+data.node.frontmatter.path,
				component: path.resolve(`./src/templates/inner-blog.js`),
				context: {
					id: data.node.id,
				},
			})
		})
	})

	return Promise.all([getMarkdownBlogs])
}

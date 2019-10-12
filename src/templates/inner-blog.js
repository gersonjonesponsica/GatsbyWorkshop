import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"

const InnerBlog = ({ data }) => (
	<Layout>
		<section id="main">
			<div className="inner">
				<header className="major special">
					<h1>{data.markdownRemark.frontmatter.title}</h1>
					<p>{data.markdownRemark.frontmatter.shortdescription}</p>
				</header>
				{/* <Link to="/" className="image fit">
					<img src={Pic11} alt="" />
				</Link> */}
				<p
					key={`body`}
					id="___gatsby"
					dangerouslySetInnerHTML={{
						__html: data.markdownRemark.html,
					}}
				/>
			</div>
		</section>
	</Layout>
)

export default InnerBlog

export const query = graphql`
	query markdownRemark($id: String!) {
		markdownRemark(id: { eq: $id }) {
			id
			frontmatter {
				title
				path
				shortdescription
			}
			html
		}
	}
`
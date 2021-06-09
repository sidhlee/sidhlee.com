/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

// https://www.digitalocean.com/community/tutorials/how-to-set-up-a-gatsby-project-with-typescript
interface SEOProps {
  description?: string
  lang?: string
  meta?: Array<{ name: string; content: string }>
  title?: string
  url?: string
  twitterUsername?: string
  image?: string
}

// https://stackoverflow.com/questions/62624774/why-cant-gatsby-facebook-find-my-ogimage
function Seo({
  description = "",
  lang = "en",
  meta = [],
  title = "",
  url = "",
  twitterUsername = "",
  image = "",
}: SEOProps) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            url
            twitterUsername
            image
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const siteImage = image || site.siteMetadata.image
  const siteUsername = twitterUsername || site.siteMetadata.twitterUsername
  const siteUrl = url || site.siteMetadata.url

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title || defaultTitle}
      // titleTemplate={title ? `%s | ${defaultTitle}` : defaultTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: siteImage,
        },
        {
          property: `og:url`,
          content: siteUrl,
        },
        {
          name: `twitter:card`,
          content: "summary_large_image",
        },
        {
          name: `twitter:image`,
          content: siteUrl + siteImage,
        },
        {
          name: `twitter:site`,
          content: "@sidhlee",
        },
        {
          name: `twitter:creator`,
          content: siteUsername,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo

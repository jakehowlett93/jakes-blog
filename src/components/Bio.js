import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
            <div style={{flexDirection: 'column'}}>
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                style={{
                  marginRight: rhythm(1 / 2),
                  marginBottom: 0,
                  borderRadius: `100%`,
                }}
              />
              <a href={`https://github.com/${social.github}`} style={{boxShadow: 'none'}}>
                <Image 
                fixed={data.githubIcon.childImageSharp.fixed}
                title="GitHub: jakehowlett93"
                alt="GitHub Icon"
                />
              </a>
              <a href={`https://www.linkedin.com/in/${social.linkedin}`} style={{boxShadow: 'none', paddingLeft: rhythm(3/8)}}>
                <Image 
                fixed={data.linkedinIcon.childImageSharp.fixed}
                title="LinkedIn"
                alt="LinkedIn Icon"
                />
              </a>
              <a href={`https://twitter.com/${social.twitter}`} style={{boxShadow: 'none'}}>
                <Image 
                fixed={data.twitterIcon.childImageSharp.fixed}
                title="Twitter"
                alt="Twitter Icon"
                />
              </a>
            </div>
            <p style={{paddingtop: 0}}>
              A blog covering various topics related to programming. I'm currently looking for a job in the London area
              but I'm willing to relocate for the right opportunity.&nbsp;
              <a href={'https://jakehowlett93.github.io/portfolio-website/#/'} style={{color: '#80011F'}} >
                Check out my portfolio.
              </a>
              {` `}
              
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 70, height: 70) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    githubIcon: file(absolutePath: { regex: "/github-icon.png/" }) {
      childImageSharp {
        fixed(width: 28, height: 28) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    linkedinIcon: file(absolutePath: { regex: "/linkedin-icon.png/" }) {
      childImageSharp {
        fixed(width: 28, height: 28) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    twitterIcon: file(absolutePath: { regex: "/twitter-icon.png/" }) {
      childImageSharp {
        fixed(width: 28, height: 28) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter,
          github,
          linkedin
        }
      }
    }
  }
`

export default Bio

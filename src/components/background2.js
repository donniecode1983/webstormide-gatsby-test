import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import {graphql, StaticQuery} from 'gatsby'

const BackgroundSection = ({className}) => (
    <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "image.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
                 render={data => {
                     // Set ImageData.
                     const imageData = data.desktop.childImageSharp;
                     return (
                         <BackgroundImage Tag="section"
                                          className={className}
                                          fluid={imageData}
                                          backgroundColor={'blue'}
                         >
                             <h1>Hello gatsby-background-image</h1>
                         </BackgroundImage>
                     )
                 }
                 }
    />
);

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-repeat: repeat-y;
`;

export default StyledBackgroundSection;
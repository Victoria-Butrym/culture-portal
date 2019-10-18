import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/seo';
import Layout from '../components/layout';
import TimelineElement from '../components/Timeline/timeline';
import ListOfWorks from '../components/ListOfWorks/listOfWorks';
import Gallery from '../components/Gallery/gallery';
import YoutubeModalWindow from '../components/YoutubeModalWindow/YoutubeModalWindow';
import Map from '../components/Map/map';
import '../components/layout.css';
import './directorsPage.css';

const windowGlobal = typeof window !== 'undefined' && window;

if (windowGlobal.localStorage) {
  windowGlobal.localStorage.setItem('lang', 'en');
}

export default function Template({ data }) {
  const { gallery } = data;
  const titleImage = data.titleImage.childImageSharp.fluid;
  const [lang, setLang] = React.useState({
    value: windowGlobal.localStorage
      ? windowGlobal.localStorage.getItem('lang') : 'en',
  });
  function handleChoice(event) {
    setLang({ value: event.target.value });
    windowGlobal.localStorage.setItem('lang', event.target.value);
  }
  let transData;
  switch (lang.value) {
    case 'en':
      transData = {
        director: data.directorEn,
        header: data.headerEn,
      };
      break;
    case 'be':
      transData = {
        director: data.directorBe,
        header: data.headerBe,
      };
      break;
    case 'ru':
      transData = {
        director: data.directorRu,
        header: data.headerRu,
      };
      break;
    default:
      transData = {
        director: data.directorEn,
        header: data.headerEn,
      };
  }
  const { director } = transData;
  const { frontmatter } = director;
  const listStyles = {
    position: 'absolute',
    top: '50px',
    left: '0px',
  };
  return (
    <Layout
      siteTitle={transData.header.frontmatter.siteTitle}
      footerTitle={transData.header.frontmatter.footerTitle}
      github={transData.header.frontmatter.github}
      listTitle={transData.header.frontmatter.listTitle}
    >
      <SEO title={frontmatter.title} />
      <select style={listStyles} value={lang.value} onChange={handleChoice}>
        <option value="en">en</option>
        <option value="be">be</option>
        <option value="ru">ru</option>
      </select>
      <div className="directors__container">
        <h1>{frontmatter.title}</h1>
        <div className="directors__image">
          <Img fluid={titleImage} alt="Gatsby Docs are awesome" />
        </div>
        <div>
          <p className="directors__years">{frontmatter.directorsLifeYears}</p>
          <p className="directors__info">{frontmatter.directorsInfo}</p>
          <div className="timeline_listOfWorks" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <TimelineElement timeline={frontmatter.timeline} />
            <ListOfWorks
              listOfWorks={frontmatter.listOfWorks}
              filmography={frontmatter.filmography}
            />
          </div>
          <Gallery edges={gallery.edges} />
          <YoutubeModalWindow youtube={frontmatter.youtube} />
          <Map geolocation={frontmatter.geolocation} />
        </div>
      </div>
    </Layout>
  );
}

// , $imagepath: String!
export const pageQuery = graphql`
  query($path: String!, $imagepath: String!, $gallery: String!, $pathEn: String!, $pathRu: String!, $pathBe: String!) {
    director: markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        directorsLifeYears
        directorsInfo
        timeline {
          date
          description
        }
        listOfWorks {
          id
          year
          film
        }
        youtube
        filmography
        geolocation {
          id
          latitude
          longitude
          description
        }
      }
    }
    directorEn: markdownRemark(frontmatter: { path: { eq: $pathEn } }) {
      frontmatter {
        title
        directorsLifeYears
        directorsInfo
        timeline {
          date
          description
        }
        listOfWorks {
          id
          year
          film
        }
        youtube
        filmography
        geolocation {
          id
          latitude
          longitude
          description
        }
      }
    }
    directorBe: markdownRemark(frontmatter: { path: { eq: $pathBe } }) {
      frontmatter {
        title
        directorsLifeYears
        directorsInfo
        timeline {
          date
          description
        }
        listOfWorks {
          id
          year
          film
        }
        youtube
        filmography
        geolocation {
          id
          latitude
          longitude
          description
        }
      }
    }
    directorRu: markdownRemark(frontmatter: { path: { eq: $pathRu } }) {
      frontmatter {
        title
        directorsLifeYears
        directorsInfo
        timeline {
          date
          description
        }
        listOfWorks {
          id
          year
          film
        }
        youtube
        filmography
        geolocation {
          id
          latitude
          longitude
          description
        }
      }
    }
    headerEn: markdownRemark (frontmatter: {title: {eq: "homepage"}, lang: { eq: "en" }}) {
      frontmatter {
        siteTitle
        footerTitle
        github
        listTitle
      }
    }
    headerBe: markdownRemark (frontmatter: {title: {eq: "homepage"}, lang: { eq: "be" }}) {
      frontmatter {
        siteTitle
        footerTitle
        github
        listTitle
      }
    }
    headerRu: markdownRemark (frontmatter: {title: {eq: "homepage"}, lang: { eq: "ru" }}) {
      frontmatter {
        siteTitle
        footerTitle
        github
        listTitle
      }
    }
    gallery: allFile(filter: {relativeDirectory: {eq: $gallery }}) {
      edges {
        node {
          publicURL
          name
        }
      }
    }
    titleImage: file(relativePath: { eq: $imagepath }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

Template.propTypes = {
  data: PropTypes.shape({
    directorEn: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        directorsLifeYears: PropTypes.string,
        directorsInfo: PropTypes.string,
        timeline: arrayOf(PropTypes.object),
        listOfWorks: arrayOf(PropTypes.object),
        youtube: PropTypes.string,
        geolocation: arrayOf(PropTypes.object),
      }),
    }),
    directorBe: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        directorsLifeYears: PropTypes.string,
        directorsInfo: PropTypes.string,
        timeline: arrayOf(PropTypes.object),
        listOfWorks: arrayOf(PropTypes.object),
        youtube: PropTypes.string,
        geolocation: arrayOf(PropTypes.object),
      }),
    }),
    directorRu: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        directorsLifeYears: PropTypes.string,
        directorsInfo: PropTypes.string,
        timeline: arrayOf(PropTypes.object),
        listOfWorks: arrayOf(PropTypes.object),
        youtube: PropTypes.string,
        geolocation: arrayOf(PropTypes.object),
      }),
    }),
    headerBe: PropTypes.shape({
      frontmatter: PropTypes.shape({
        siteTitle: PropTypes.string,
        footerTitle: PropTypes.string,
        github: PropTypes.string,
        listTitle: PropTypes.string,
      }),
    }),
    headerEn: PropTypes.shape({
      frontmatter: PropTypes.shape({
        siteTitle: PropTypes.string,
        footerTitle: PropTypes.string,
        github: PropTypes.string,
        listTitle: PropTypes.string,
      }),
    }),
    headerRu: PropTypes.shape({
      frontmatter: PropTypes.shape({
        siteTitle: PropTypes.string,
        footerTitle: PropTypes.string,
        github: PropTypes.string,
        listTitle: PropTypes.string,
      }),
    }),
    titleImage: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object,
      }),
    }),
    gallery: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object),
    }),
  }),
};

Template.defaultProps = {
  data: '',
};

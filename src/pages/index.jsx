import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import Main from '../components/Exposition/exposition';
import SEO from '../components/seo';
import Info from '../components/Info/info';
import DayAuthor from '../components/DayAuthor/dayAuthor';
import Developers from '../components/Developers/developers';

const windowGlobal = typeof window !== 'undefined' && window;

if (windowGlobal.localStorage) {
  windowGlobal.localStorage.setItem('lang', 'en');
}

const IndexPage = () => {
  const query = useStaticQuery(graphql`
    query SiteMainTitleQueryBe {
      dayDirectorRu: markdownRemark(
        frontmatter: { title: { eq: "Владимир Владимирович Корш-Саблин" } }
      ) {
        frontmatter {
          title
          directorsLifeYears
          directorsInfo
          titleText
          imagepath
        }
      }
      dayDirectorBe: markdownRemark(
        frontmatter: { title: { eq: "Уладзімір Уладзіміравіч Корш-Саблін" } }
      ) {
        frontmatter {
          title
          directorsLifeYears
          directorsInfo
          titleText
          imagepath
        }
      }
      dayDirectorEn: markdownRemark(
        frontmatter: { title: { eq: "Vladimir Vladimirovich Korsh-Sablin" } }
      ) {
        frontmatter {
          title
          directorsLifeYears
          directorsInfo
          titleText
          imagepath
        }
      }
      infoBe: markdownRemark(
        frontmatter: { title: { eq: "info" }, lang: { eq: "be" } }
      ) {
        frontmatter {
          mainTitle
          text
          dayDirectorTitle
          infoTitle
          descLine1
          descLine2
          descLine3
          descLine4
          descLine5
          descLine6
          descLine7
        }
      }
      homepageBe: markdownRemark(
        frontmatter: { title: { eq: "homepage" }, lang: { eq: "be" } }
      ) {
        frontmatter {
          button
          developers
          seoTitle
          siteTitle
          footerTitle
          github
          listTitle
        }
      }
      infoRu: markdownRemark(
        frontmatter: { title: { eq: "info" }, lang: { eq: "ru" } }
      ) {
        frontmatter {
          mainTitle
          text
          dayDirectorTitle
          infoTitle
          descLine1
          descLine2
          descLine3
          descLine4
          descLine5
          descLine6
          descLine7
        }
      }
      homepageRu: markdownRemark(
        frontmatter: { title: { eq: "homepage" }, lang: { eq: "ru" } }
      ) {
        frontmatter {
          button
          developers
          seoTitle
          siteTitle
          footerTitle
          github
          listTitle
        }
      }
      infoEn: markdownRemark(
        frontmatter: { title: { eq: "info" }, lang: { eq: "en" } }
      ) {
        frontmatter {
          mainTitle
          text
          dayDirectorTitle
          infoTitle
          infoTitle
          descLine1
          descLine2
          descLine3
          descLine4
          descLine5
          descLine6
          descLine7
        }
      }
      homepageEn: markdownRemark(
        frontmatter: { title: { eq: "homepage" }, lang: { eq: "en" } }
      ) {
        frontmatter {
          button
          developers
          seoTitle
          siteTitle
          footerTitle
          github
          listTitle
        }
      }
      cardsEn: allMarkdownRemark(
        sort: { fields: [frontmatter___number] }
        filter: { frontmatter: { title: { eq: "card" } } }
      ) {
        edges {
          node {
            frontmatter {
              github
              name
              number
              path
              photo
              title
            }
          }
        }
      }
    }
  `);
  const [lang, setLang] = React.useState({
    value: windowGlobal.localStorage
      ? windowGlobal.localStorage.getItem('lang') : 'en',
  });
  function handleChoice(event) {
    setLang({ value: event.target.value });
    windowGlobal.localStorage.setItem('lang', event.target.value);
  }
  let data;
  switch (lang.value) {
    case 'en':
      data = {
        homepage: query.homepageEn,
        info: query.infoEn,
        cards: query.cardsEn,
        dayDirector: query.dayDirectorEn,
      };
      break;
    case 'ru':
      data = {
        homepage: query.homepageRu,
        info: query.infoRu,
        cards: query.cardsEn,
        dayDirector: query.dayDirectorRu,
      };
      break;
    case 'be':
      data = {
        homepage: query.homepageBe,
        info: query.infoBe,
        cards: query.cardsEn,
        dayDirector: query.dayDirectorBe,
      };
      break;
    default:
      data = {
        homepage: query.homepageEn,
        info: query.infoEn,
        cards: query.cardsEn,
        dayDirector: query.dayDirectorEn,
      };
  }

  const listStyles = {
    position: 'absolute',
    top: '50px',
    left: '0px',
  };

  return (
    <Layout
      siteTitle={data.homepage.frontmatter.siteTitle}
      footerTitle={data.homepage.frontmatter.footerTitle}
      github={data.homepage.frontmatter.github}
      listTitle={data.homepage.frontmatter.listTitle}
    >
      <SEO title={data.homepage.frontmatter.seoTitle} />
      <select style={listStyles} value={lang.value} onChange={handleChoice}>
        <option value="en">en</option>
        <option value="be">be</option>
        <option value="ru">ru</option>
      </select>
      <Main
        mainTitle={data.info.frontmatter.mainTitle}
        buttonText={data.homepage.frontmatter.button}
        descLine1={data.info.frontmatter.descLine1}
        descLine2={data.info.frontmatter.descLine2}
        descLine3={data.info.frontmatter.descLine3}
        descLine4={data.info.frontmatter.descLine4}
        descLine5={data.info.frontmatter.descLine5}
        descLine6={data.info.frontmatter.descLine6}
        descLine7={data.info.frontmatter.descLine7}
      />
      <Info
        infoText={data.info.frontmatter.text}
        infoTitle={data.info.frontmatter.infoTitle}
      />
      <DayAuthor
        dayAuthorTitle={data.info.frontmatter.dayDirectorTitle}
        dayAuthorName={data.dayDirector.frontmatter.title}
        dayAuthorYearsLife={data.dayDirector.frontmatter.directorsLifeYears}
        dayAuthorInfo={data.dayDirector.frontmatter.titleText}
        buttonText={data.homepage.frontmatter.button}
      />
      <Developers
        edges={data.cards.edges}
        developersTitle={data.homepage.frontmatter.developers}
      />
    </Layout>
  );
};

export default IndexPage;

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Search from '../components/Search/search';

const windowGlobal = typeof window !== 'undefined' && window;
if (windowGlobal.localStorage) {
  windowGlobal.localStorage.setItem('lang', 'en');
}

const authorsInfoEn = [
  {
    id: 1,
    name: 'Uladzimir Korsh-Sablin',
    link: '/directors/en/KorshSablin',
    city: 'Minsk',
  },
  {
    id: 2,
    name: 'Mikhas Ptashuk',
    link: '/directors/en/Ptashuk',
    city: 'Brest',
  },
  {
    id: 3,
    name: 'Yury Cviatkou',
    link: '/directors/en/Tcvetkov',
    city: 'Pskov',
  },
  {
    id: 4,
    name: 'Viktar Turau',
    link: '/directors/en/Turov',
    city: 'Mogilev',
  },
  {
    id: 5,
    name: 'Valery Rubinchyk',
    link: '/directors/en/Rubinchik',
    city: 'Brest',
  },
  {
    id: 6,
    name: 'Yury Khashchavatski',
    link: '/directors/en/Khashchavatski',
    city: 'Odessa',
  },
];

const authorsInfoRu = [
  {
    id: 1,
    name: 'Владимир Корш-Саблин',
    link: '/directors/ru/KorshSablin',
    city: 'Минск',
  },
  {
    id: 2,
    name: 'Михаил Пташук',
    link: '/directors/ru/Ptashuk',
    city: 'Брест',
  },
  {
    id: 3,
    name: 'Юрий Цветков',
    link: '/directors/ru/Tcvetkov',
    city: 'Псков',
  },
  {
    id: 4,
    name: 'Виктор Туров',
    link: '/directors/ru/Turov',
    city: 'Могилев',
  },
  {
    id: 5,
    name: 'Валерий Рубинчик',
    link: '/directors/ru/Rubinchik',
    city: 'Брест',
  },
  {
    id: 6,
    name: 'Юрий Хащеватский',
    link: '/directors/ru/Khashchavatski',
    city: 'Одесса',
  },
];

const authorsInfoBe = [
  {
    id: 1,
    name: 'Уладзімір Корш-Саблін',
    link: '/directors/be/KorshSablin',
    city: 'Менск',
  },
  {
    id: 2,
    name: 'Міхаіл Пташук',
    link: '/directors/be/Ptashuk',
    city: 'Бярэсце',
  },
  {
    id: 3,
    name: 'Юрый Цвяткоў',
    link: '/directors/be/Tcvetkov',
    city: 'Пскоў',
  },
  {
    id: 4,
    name: 'Віктар Тураў',
    link: '/directors/be/Turov',
    city: 'Магілёў',
  },
  {
    id: 5,
    name: 'Валерый Рубінчык',
    link: '/directors/be/Rubinchik',
    city: 'Бярэсце',
  },
  {
    id: 6,
    name: 'Юрый Хашчавацкі',
    link: '/directors/be/Khashchavatski',
    city: 'Адэса',
  },
];

const SecondPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      en: markdownRemark (frontmatter: {title: {eq: "homepage"}, lang: { eq: "en" }}) {
        frontmatter {
          siteTitle
          footerTitle
          github
          listTitle
        }
      }
      be: markdownRemark (frontmatter: {title: {eq: "homepage"}, lang: { eq: "be" }}) {
        frontmatter {
          siteTitle
          footerTitle
          github
          listTitle
        }
      }
      ru: markdownRemark (frontmatter: {title: {eq: "homepage"}, lang: { eq: "ru" }}) {
        frontmatter {
          siteTitle
          footerTitle
          github
          listTitle
        }
      }
    }
  `);
  const [lang, setLang] = React.useState({
    value: windowGlobal.localStorage
      ? windowGlobal.localStorage.getItem('lang') : null,
  });
  function handleChoice(event) {
    setLang({ value: event.target.value });
    windowGlobal.localStorage.setItem('lang', event.target.value);
  }
  let authorsInfo;
  let headerInfo;
  switch (lang.value) {
    case 'en':
      authorsInfo = authorsInfoEn;
      headerInfo = {
        homepage: data.en,
      };
      break;
    case 'be':
      authorsInfo = authorsInfoBe;
      headerInfo = {
        homepage: data.be,
      };
      break;
    case 'ru':
      authorsInfo = authorsInfoRu;
      headerInfo = {
        homepage: data.ru,
      };
      break;
    default:
      authorsInfo = authorsInfoEn;
      headerInfo = {
        homepage: data.en,
      };
  }
  const listStyles = {
    position: 'absolute',
    top: '50px',
    left: '0px',
  };
  return (
    <Layout
      siteTitle={headerInfo.homepage.frontmatter.siteTitle}
      footerTitle={headerInfo.homepage.frontmatter.footerTitle}
      github={headerInfo.homepage.frontmatter.github}
      listLitle={headerInfo.homepage.frontmatter.listTitle}
    >
      <select style={listStyles} value={lang.value} onChange={handleChoice}>
        <option value="en">en</option>
        <option value="be">be</option>
        <option value="ru">ru</option>
      </select>
      <SEO title={headerInfo.homepage.frontmatter.listTitle} />
      <Search authors={authorsInfo} />
    </Layout>
  );
};

export default SecondPage;

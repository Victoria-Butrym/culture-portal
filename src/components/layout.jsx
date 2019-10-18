import React from 'react';
import PropTypes from 'prop-types';
// import { useStaticQuery, graphql } from 'gatsby';
import Header from './Header/header';
import Footer from './Footer/footer';
import './layout.css';

const Layout = ({
  children, siteTitle, footerTitle, github, listTitle,
}) => (
  <>
    <Header
      siteTitle={siteTitle}
      listTitle={listTitle}
    />
    <main>
      {children}
    </main>
    <Footer
      footerTitle={footerTitle}
      githubLink={github}
    />
  </>
);

Layout.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  footerTitle: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  listTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;

import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Gallery from '../components/Gallery/gallery';
import TimelineElement from '../components/Timeline/timeline';
import YoutubeElement from '../components/Youtube/youtube';
import authors from '../components/authors';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <TimelineElement author={authors.KorshSablin} />
    <YoutubeElement author={authors.KorshSablin} />
    <Gallery />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;

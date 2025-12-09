import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function NotFound() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`Page Not Found | ${siteConfig.title}`} description="Page not found">
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <h1 className="hero__title">Page Not Found</h1>
            <p>We couldn't find the page you were looking for.</p>
            <p>
              <Link to="/">Go to the homepage</Link> or use the navigation to find what you're looking for.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import styles from './index.module.css';

export default function Home(): React.JSX.Element {
  return (
    <Layout title="Home" description="Codacy Docs homepage">
      <main className={styles.homepage}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <h1 className={styles.heroTitle}>Codacy Docs</h1>
            <p className={styles.heroSubtitle}>This is a placeholder to say how amazing we are.</p>
            
            <div className={styles.searchBox}>
              <input 
                type="text" 
                className={styles.searchInput}
                placeholder="Search topics, coverage, security..."
              />
              <button className={styles.searchButton}>Search</button>
            </div>
          </div>
        </section>

        {/* Feature Cards Section */}
        <section className={styles.featureCardsContainer}>
          <article className={styles.featureCard}>
            <div className={styles.featureCardHeader}>
              <div className={styles.featureIcon}>🚀</div>
              <h2>Get started</h2>
            </div>
            <p>Codacy is an automated code quality and coverage platform that analyzes your source code and identifies issues as you go.</p>
            <div className={styles.featureCardContent}>
              {/* Placeholder for embedded content */}
              <div className={styles.featureCardPlaceholder}>
                <p>Configuring poc-codacy</p>
              </div>
            </div>
          </article>

          <article className={styles.featureCard}>
            <div className={styles.featureCardHeader}>
              <div className={styles.featureIcon}>📁</div>
              <h2>Manage organizations</h2>
            </div>
            <p>Codacy let you automatically import your Git provider organizations, repositories and team members into Codacy with a few clicks.</p>
            <div className={styles.featureCardContent}>
              {/* Placeholder for embedded content */}
              <div className={styles.featureCardPlaceholder}>
                <p>Organizations</p>
              </div>
            </div>
          </article>
        </section>

        {/* Codacy AI Section */}
        <section className={styles.codacyAiSection}>
          <div className={styles.codacyAiContent}>
            <img src="/img/icons/sparkles.svg" alt="Codacy AI" className={styles.codacyAiIcon} width={36} height={36} />
            <h2>Codacy AI</h2>
          </div>
          <Link to="/docs/codacy-ai/" className={styles.viewDocsLink}>
            View documentation →
          </Link>
        </section>

        {/* Most Popular Topics */}
        <section className={styles.topicsSection}>
          <h2 className={styles.sectionTitle}>Most popular topics</h2>
          
          <div className={styles.topicsGrid}>
            <article className={styles.topicCard}>
              <div className={styles.topicCardHeader}>
                <h3>Adding coverage to your repository</h3>
                <span className={styles.topicArrow}>→</span>
              </div>
              <p>Set up your repositories to show code coverage reports directly on Codacy.</p>
            </article>

            <article className={styles.topicCard}>
              <div className={styles.topicCardHeader}>
                <h3>Understanding issues</h3>
                <span className={styles.topicArrow}>→</span>
              </div>
              <p>Learn how Codacy report issues, how to triage them, and what to do next.</p>
            </article>

            <article className={styles.topicCard}>
              <div className={styles.topicCardHeader}>
                <h3>Managing people in organizations</h3>
                <span className={styles.topicArrow}>→</span>
              </div>
              <p>Invite your teammates to join Codacy to analyze their commits on private repositories.</p>
            </article>

            <article className={styles.topicCard}>
              <div className={styles.topicCardHeader}>
                <h3>Using the Codacy API</h3>
                <span className={styles.topicArrow}>→</span>
              </div>
              <p>Retrieve and analyze data from Codacy and perform configuration changes programmatically.</p>
            </article>
          </div>
        </section>

        {/* Help and Support Section */}
        <section className={styles.supportSection}>
          <h2 className={styles.sectionTitle}>Help and support</h2>
          
          <div className={styles.supportGrid}>
            <article className={styles.supportCard}>
              <div className={styles.supportCardHeader}>
                <span className={styles.supportIcon}>🔍</span>
                <h3>Did you find everything you need?</h3>
              </div>
              <p>Help us improve your experience. Let us know whether this page answered your questions, so we can make our documentation clearer and more useful for you.</p>
              <div className={styles.supportCardActions}>
                <button className={styles.supportButtonYes}>Yes</button>
                <button className={styles.supportButtonNo}>No</button>
              </div>
            </article>

            <article className={styles.supportCard}>
              <div className={styles.supportCardHeader}>
                <span className={styles.supportIcon}>💬</span>
                <h3>Support</h3>
              </div>
              <p>Our support team is here to assist you with any questions about using Codacy effectively in your workflow.</p>
              <Link to="#" className={styles.supportCardLink}>Contact us →</Link>
            </article>

            <article className={styles.supportCard}>
              <div className={styles.supportCardHeader}>
                <span className={styles.supportIcon}>❓</span>
                <h3>FAQs</h3>
              </div>
              <p>Browse our frequently asked questions to find clear explanations and best practices for getting the most out of Codacy. No support ticket required.</p>
              <Link to="/docs/faq/" className={styles.supportCardLink}>View FAQs →</Link>
            </article>
          </div>
        </section>
      </main>
    </Layout>
  );
}

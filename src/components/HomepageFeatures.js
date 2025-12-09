import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Humanoid Robotics',
    Svg: require('../../static/img/robot1.svg').default,
    description: (
      <>
        Explore the fundamentals of humanoid robotics, including mechanical design,
        locomotion, and control systems that enable human-like movement and interaction.
      </>
    ),
  },
  {
    title: 'Physical AI',
    Svg: require('../../static/img/ai1.svg').default,
    description: (
      <>
        Discover how artificial intelligence integrates with physical systems to
        create robots that can perceive, learn, and adapt to real-world environments.
      </>
    ),
  },
  {
    title: 'Safe Interaction',
    Svg: require('../../static/img/safety1.svg').default,
    description: (
      <>
        Learn about safety considerations and ethical implications in human-robot
        interaction, ensuring responsible development and deployment of robotic systems.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
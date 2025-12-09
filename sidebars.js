/**
 * Creating an sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Human Robotics & Physical AI Book',
      items: [
        'intro',
        'chapter1-fundamentals-humanoid-robotics',
        'chapter2-physical-ai-concepts',
        'chapter3-sensor-integration',
        'chapter4-control-locomotion',
        'chapter5-ml-applications',
        'chapter6-human-robot-interaction',
        'chapter7-safety-ethics',
        'chapter8-conclusion'
      ],
    },
  ],
};

module.exports = sidebars;
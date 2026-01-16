import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  qpcSidebar: [
    {
      type: 'doc',
      id: 'welcome',
      label: 'Welcome',
    },

    {
      type: 'category',
      label: 'Collaborative Support',
      collapsible: true,
      collapsed: false,
      items: [
        'collaborative-support',
        'expertise',
        'workflow',
        'data-analysis',
        'instrumentation',
        'get-started',
      ],
    },

        {
      type: 'doc',
      id: 'publications',
      label: 'Publications',
    },

    {
      type: 'doc',
      id: 'team',
      label: 'Our Team',
    },

    {
      type: 'doc',
      id: 'contact',
      label: 'Contact',
    },

    {
      type: 'doc',
      id: 'faqs',
      label: 'FAQs',
    },
  ],
};

export default sidebars;

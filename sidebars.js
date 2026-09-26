// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {docsSidebar: [
  'intro',
  {type: 'category', label: 'Get started', collapsed: false, items: ['getting-started/installation', 'getting-started/first-task']},
  {type: 'category', label: 'Core concepts', collapsed: false, items: ['concepts/planning-pipeline', 'concepts/task-planning']},
  'architecture', 'examples', 'project-status',
]};
export default sidebars;

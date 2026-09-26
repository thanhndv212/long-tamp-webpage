// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {docsSidebar: [
  'intro',
  {type: 'category', label: 'Get started', collapsed: false, items: ['getting-started/installation', 'getting-started/first-task']},
  {type: 'category', label: 'Architecture', collapsed: false, items: [
    'architecture', 'concepts/planning-pipeline', 'concepts/constraint-graphs',
    'concepts/task-planning', 'concepts/recovery-observability', 'concepts/visualization',
  ]},
  {type: 'category', label: 'Examples', collapsed: false, items: [
    'examples', 'examples/screw-assembly', 'examples/twin-lift-ball',
    'examples/ikea-table', 'examples/behaviortree-host',
  ]},
  'benchmarks', 'engineering-history', 'project-status',
]};
export default sidebars;

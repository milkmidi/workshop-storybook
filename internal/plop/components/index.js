const { componentExists } = require('../utils');

module.exports = {
  description: 'Add an unconnected component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: (value) => {
        if ((/.+/).test(value)) {
          return componentExists(value) ? 'A component or container with this name already exists' : true;
        }
        return 'The name is required';
      },
    },
  ],
  actions: (data) => {
    const actions = [
      {
        type: 'add',
        path: '../../src/components/{{properCase name}}/index.ts',
        templateFile: 'components/index.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/components/{{properCase name}}/{{properCase name}}.tsx',
        templateFile: 'components/stateless.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/components/{{properCase name}}/{{properCase name}}.stories.tsx',
        templateFile: 'components/stories.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/components/{{properCase name}}/{{properCase name}}.test.tsx',
        templateFile: 'components/test.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/components/{{properCase name}}/{{properCase name}}.scss',
        templateFile: 'components/style.scss.hbs',
        abortOnFail: true,
      },
    ];
    return actions;
  },
};

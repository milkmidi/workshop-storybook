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
    {
      type: 'list',
      name: 'style',
      message: 'What style system?',
      default: 'scss',
      choices: ['scss', 'emotion'],
    },
  ],
  actions: (data) => {
    const commonActions = [
      {
        type: 'add',
        path: '../../src/components/{{properCase name}}/index.ts',
        templateFile: 'components/index.hbs',
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
    ];
    const scssActions = [
      {
        type: 'add',
        path: '../../src/components/{{properCase name}}/{{properCase name}}.tsx',
        templateFile: 'components/component.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/components/{{properCase name}}/{{properCase name}}.scss',
        templateFile: 'components/style.hbs',
        abortOnFail: true,
      },
    ];
    const emotionAction = [
      {
        type: 'add',
        path: '../../src/components/{{properCase name}}/{{properCase name}}.tsx',
        templateFile: 'components/component-emotion.hbs',
        abortOnFail: true,
      },
    ];
    const actions = [
      ...commonActions,
      ...(data.style === 'scss' ? scssActions : emotionAction),
    ];
    return actions;
  },
};

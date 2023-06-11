export default function (plop) {

  plop.setGenerator('atom', {
    description: 'Generate a new atom',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter the atom name (PascalCase)',
        validate: function (value) {
          if (/.+/.test(value)) {
            return true;
          }
          return 'name is required';
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/Atoms/{{properCase name}}/{{properCase name}}.tsx',
        templateFile: 'src/templates/component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/Atoms/{{properCase name}}/index.ts',
        templateFile: 'src/templates/exportIndex.ts.hbs',
      },
      {
        type: 'append',
        path: 'src/components/Atoms/index.ts',
        templateFile: 'src/templates/exportIndex.ts.hbs',
      },
      {
        type: 'append',
        path: 'src/components/index.ts',
        templateFile: 'src/templates/atomsExportIndex.ts.hbs',
      },
    ],
  });
  
  plop.setGenerator('molecule', {
    description: 'Generate a new molecule',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter the molecule name (PascalCase)',
        validate: function (value) {
          if (/.+/.test(value)) {
            return true;
          }
          return 'name is required';
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/Molecules/{{properCase name}}/{{properCase name}}.tsx',
        templateFile: 'src/templates/component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/Molecules/{{properCase name}}/index.ts',
        templateFile: 'src/templates/exportIndex.ts.hbs',
      },
      {
        type: 'append',
        path: 'src/components/Molecules/index.ts',
        templateFile: 'src/templates/exportIndex.ts.hbs',
      },
      {
        type: 'append',
        path: 'src/components/index.ts',
        templateFile: 'src/templates/moleculesExportIndex.ts.hbs',
      },
    ],
  }); 
}
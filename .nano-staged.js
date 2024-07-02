export default {
  'src/**/*.{ts,tsx}': () => ['tsc -p tsconfig.json  --noEmit'],
  '*.{ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.css': ['stylelint --fix', 'prettier --write'],
  '!(*.{ts,tsx,css})': ['prettier --write --ignore-unknown'],
};

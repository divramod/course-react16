# ESLINT
- https://github.com/yannickcr/eslint-plugin-react/issues/447#issuecomment-184617282
```javascript
{
  "parserOptions": {
      "ecmaVersion": 7,
      "sourceType": "module",
      "ecmaFeatures": {
          "jsx": true,
      }
  },
  "plugins": [
    "react",
    "react-native"
  ],
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "rules": {
    "comma-dangle" : 0,
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
  },
  "settings": {
    "react": {
      "pragma": "React",
      "version": "0.14.8"
    }
  },
}
```

```sh
npm install --save-dev eslint eslint-plugin-react
```

# eslint-plugin-react-hooks

1. Instal:
```bash
eslint-plugin-react-hooks -D
```
2. Add the following configuration into the 'eslintrc.js' file:
```javascript
{
  plugins: [
    'react-hooks'
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
}
```

## Sources:
Rockseat GoStack - Module React Hooks - Configuring structure
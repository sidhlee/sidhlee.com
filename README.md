# sidhlee.com

My portfolio website built with Gatsby + TS

## Note

### ts-error: 'React' refers to a UMD global, but the current file is a module

We need to tell TS that we're using jsx since there's no explicit import anymore. Specify "react-jsx" for `compilerOptions.jsx`inside `tsconfig.json`

```json
// tsconfig.json
{
  "compilerOptions": {
    ...
    "jsx": "react-jsx"
    ...
  },
}
```

### Why my color picker not working on styled-components

You need to set the file extension as .tsx (not .ts)

## References

- [React 17 new JSX Transform: ReferenceError: React is not defined](https://github.com/gatsbyjs/gatsby/issues/28657)

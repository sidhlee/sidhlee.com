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

### Warning: Received `true` for a non-boolean attribute when using Styled Components

This warning happens because props meant to be used for styled components are getting passed to the DOM.
Use [transient props](https://styled-components.com/docs/api#transient-props) to solve prevent this.

```js
const Comp = styled.div`
  color: ${props => props.$draggable || "black"};
`
// $draggable isn't rendered to the DOM like draggable is.
render(
  <Comp $draggable="red" draggable="true">
    Drag me!
  </Comp>
)
```

### Generating types for graphql query

You can easily generate types for your graphql queries with [GraphQL Code Generator](https://www.graphql-code-generator.com/docs/integrations/gatsby)

1. Install dependencies

   `/package.json`

   ```json
     "devDependencies": {
       "@graphql-codegen/cli": "^1.21.5",
       "@graphql-codegen/typescript": "^1.22.1",
       "@graphql-codegen/typescript-operations": "^1.18.0",
   ```

   `/codegen.yml`

2. Add config

   ```yml
   schema: http://localhost:8000/___graphql
   documents:
     - ./src/**/*.{ts,tsx}
     - ./node_modules/gatsby-transformer-sharp/!(node_modules)/**/*.js
     - ./node_modules/gatsby-transformer-remark/!(node_modules)/**/*.js
   generates:
     ./src/graphqlTypes.ts:
       plugins:
         - typescript
         - typescript-operations
   ```

3. Run
   `package.json`

   ```json
   "scripts": {
       "generate": "graphql-codegen",

   ```

   ```bash
   npm run generate
   ```

### Gatsby filesystem don't handle files with the same name

Having the same image name (icon.png) inside all markdown files did not work.
I had to rename all the image files with non-repeating name.

## gatsby-plugin-scroll-reveal breaks your Netlify deployment

So stay away from it (until further notice)

## References

- [React 17 new JSX Transform: ReferenceError: React is not defined](https://github.com/gatsbyjs/gatsby/issues/28657)
- [Migrating from gatsby-image to gatsby-plugin-image](https://www.gatsbyjs.com/docs/reference/release-notes/image-migration-guide)
- [Don’t use frontmatter to seperate your markdown files in GatsbyJS - Use the file system](https://georgenance.com/dont-use-frontmatter-markdown-files-gatsby)

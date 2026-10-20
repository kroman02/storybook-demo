# Storybook Demo

A tiny React component library (Button, Badge, Input, Card) documented with Storybook and deployed to Netlify.

## Run locally

```bash
npm install
npm run storybook        # http://localhost:6006
```

## Build

```bash
npm run build-storybook  # outputs to storybook-static/
```

## Deploy (Netlify)

`netlify.toml` already sets the build command and publish dir, so connecting the GitHub repo in Netlify is all that's needed.

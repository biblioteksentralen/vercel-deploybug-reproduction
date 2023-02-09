# Minimal reproduction of deploybug on vercel

## Reproduce

Run `vercel build`. You probably need to link it to a new vercel-project.

## Bug description

The route /apidoc/[version].tsx fails on vercel when building.

```
[    ] info  - Generating static pages (0/4)
Error occurred prerendering page "/apidoc/[version]". Read more: https://nextjs.org/docs/messages/prerender-error
Error: Minified React error #31; visit https://reactjs.org/docs/error-decoder.html?invariant=31&args[]=%5Bobject%20Promise%5D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
```

If you rename the file `/pages/apidoc/[version].tsx` to something like `/pages/doc/[version].tsx`, the build passes.

Seems like this is related to the "@sentry/nextjs"-package. Maybe Automatic Instrumentation in Sentry wraps this route as if it was an api since it starts with "api"?
 
# FrontEnd Interview

First of all congratulations!
We're glad to inform you that you have been selected for the next recruiting step!

You can find the instructions below.
Please do not hesitate to contact us if something is not clear enough.

You **don't have a time limit**, however the delivery time will be somehow kept into consideration.

## Assignment

Build a web app that displays a list of jokes using the given API endpoint.

It should be built with **Next.js**, **Typescript** and **Tailwindcss**

### Project Structure

This repository is a monorepo built with [`turborepo`][turborepo].
It contains 2 projects:

- `@aquacloud/internal` which is used internally to fetch and paginate the search endpoint of the chuck-norris api.
- `apps/next-app` which is the app that you will build

#### Requirements

You have to build a page to display the data returned from the `/api/jokes` endpoint inside the next-app.
Please do not edit the endpoint or the code inside `packages/internal`.

A few key points:

- The UI must handle pagination somehow (infinite-scroll or manual pagination)
- You can build your utilities
- You must use [`pnpm`][pnpm] to manage dependencies, feel free to reconfigure the monorepo (according to the turbo docs) if you want to use yarn.

#### Your code must have the following scripts:

- `lint` - to run eslint
- `test` - to run unit tests
- `start` - to start the app
- `build` - to build the app

### Definition of done

- All the scripts are working without errors
- The web app is working without errors
- Unit tests are passing
- Usage of modern hooks is mandatory (no class components)

### Bonus Points

- Your code follows a mobile first approach
- The utils are documented according to the [`TSDoc`][tsdoc] standard
- You can choose to implement pagination or infinite scroll
- Code Coverage
- E2E tests via playwright or cypress
- Github Actions to run in the CI
- Stale while revalidate approach for data-loaders
- Your app supports dark mode

### Score

The score will depend on the following evaluation critera (not sorted in any particular way):

- Architecture
- Comments / Documentation
- Code Quality
- Knowledge of React and its best practices
- Performance
- Testing

#### About our stack @ Aquacloud:

I want to give you some context of our internal structure:

- We use a custom `axios` instance to handle api calls and tokens rotation
- We have a custom next middleware to check authentication

- Vitest - Testing
- Playwright - E2E Tests
- `@testing-library` - UI tests
- `fp-ts` / `io-ts` + `axios` - API SDK and data contracts.

[tsdoc]: https://tsdoc.org
[turborepo]: https://turbo.build/repo

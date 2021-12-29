# React on Hanami (Bootstrap 5)

Welcome to the React on Hanami (with Bootstrap 5 CSS) Template!

I made this template so that you can quickly get started with developing an app on Hanami.

## Background Info

This template uses Esbuild to compile Javascript and JSX files and output the bundled JS and CSS to /public/assets folder. It also uses Foreman to run both the Shotgun development server (which allows code reloading, see [here](https://guides.hanamirb.org/v1.3/projects/code-reloading/)) and the Esbuild script that will watch for any changes in the JS / JSX files and then recompile accordingly.

Unfortunately, a 'hot reloading' feature like with Webpack does not work in this setup (as far as I can tell) - this means that while the server is running, you have to reload the page to see changes you made after Esbuild recompiles the JS/JSX files.

Versions:

- Bootstrap: ^5.1.3,
- Esbuild: ^0.14.9,
- React: ^17.0.2,
- React-dom: ^17.0.2

I hope this will help you get started with Hanami . Let me know if anything is wrong / does not work!

## Get started with the template

When you clone this repo, run the following commands:

```
% bundle install
```

and

```
% yarn
```

To enter the development server (default on: http://localhost:3000/ - you can change it in Procfile.dev), run:

```
% foreman start
```

To shut down the server - Ctrl + C.

## Setup (Hanami)

How to run tests:

```
% bundle exec rake
```

How to run the development console:

```
% bundle exec hanami console
```

How to run the development server:

```
% bundle exec hanami server
```

How to prepare (create and migrate) DB for `development` and `test` environments:

```
% bundle exec hanami db prepare

% HANAMI_ENV=test bundle exec hanami db prepare
```

Explore Hanami [guides](https://guides.hanamirb.org/), [API docs](http://docs.hanamirb.org/1.3.5/), or jump in [chat](http://chat.hanamirb.org) for help. Enjoy! 🌸

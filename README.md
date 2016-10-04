# Under Construction

# KSS Foundation [![NPM version](https://img.shields.io/npm/v/kss-foundation.svg)](https://www.npmjs.org/package/kss-foundation)

> [KSS Foundation](https://github.com/kalamuna/kss-foundation) is a [Knyle Style Sheet](http://warpspire.com/kss/) style guide for [Foundation](foundation.zurb.com).

[![Build Status](https://travis-ci.org/kalamuna/kss-foundation.svg?branch=master)](https://travis-ci.org/kalamuna/kss-foundation) [![Dependency Status](https://david-dm.org/kalamuna/kss-foundation.svg)](https://david-dm.org/kalamuna/kss-foundation) [![devDependency Status](https://david-dm.org/kalamuna/kss-foundation/dev-status.svg)](https://david-dm.org/kalamuna/kss-foundation#info=devDependencies)

## Dependencies

* [kss-node](https://github.com/kss-node/kss-node) `>=3`

## Usage

1. Install [KSS-Node](http://kss-node.github.io/kss-node/) by using the following command:

  ``` bash
  npm install kss@3 -g
  ```

2. Render the site using the following command:

  ``` bash
  kss-node node_modules/kss-foundation/styleguide out
  ```

  * `node_modules/kss-foundation/styleguide` is the directory to which KSS Styleguide to use
  * `out` represents where the rendered styleguide should be output

## Development

Use the following command to serve and watch the development environment:

    npm start

### Testing

    npm test

### Deployment

    npm run deploy

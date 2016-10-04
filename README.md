# Under Construction

# KSS USWDS [![NPM version](https://img.shields.io/npm/v/kss-uswds.svg)](https://www.npmjs.org/package/kss-uswds)

> [KSS USWDS](https://github.com/kalamuna/kss-uswds) is a [Knyle Style Sheet](http://warpspire.com/kss/) style guide for [USWDS](https://github.com/18F/web-design-standards).

[![Build Status](https://travis-ci.org/kalamuna/kss-uswds.svg?branch=master)](https://travis-ci.org/kalamuna/kss-uswds) [![Dependency Status](https://david-dm.org/kalamuna/kss-uswds.svg)](https://david-dm.org/kalamuna/kss-uswds) [![devDependency Status](https://david-dm.org/kalamuna/kss-uswds/dev-status.svg)](https://david-dm.org/kalamuna/kss-uswds#info=devDependencies)

## Dependencies

* [kss-node](https://github.com/kss-node/kss-node) `>=3`

## Usage

1. Install [KSS-Node](http://kss-node.github.io/kss-node/) by using the following command:

  ``` bash
  npm install kss@3 -g
  ```

2. Render the site using the following command:

  ``` bash
  kss-node node_modules/kss-uswds/styleguide out
  ```

  * `node_modules/kss-uswds/styleguide` is the directory to which KSS Styleguide to use
  * `out` represents where the rendered styleguide should be output

## Development

Use the following command to serve and watch the development environment:

    npm start

### Testing

    npm test

### Deployment

    npm run deploy

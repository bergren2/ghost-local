# ghost-local
Set up a local Ghost development environment for theme development and other tweaks.

## Environment Prereqs

- nvm
  - `$ brew install nvm`
- Node v0.10.x
  - `$ nvm install`
- Gulp
  - `$ npm install --global gulp`

## Initial Project Setup

Once you've cloned down the directory and installed the correct versions of
Node and Gulp, run the following:

    $ npm install
    $ gulp
    $ cd ghost
    $ npm install

## Development

While in the `ghost` directory, fire up

    $ npm start

and then check out the site at [localhost:2368](http://localhost:2368)

## Upgrading Ghost versions

To upgrade Ghost, just change the version used in `gulpfile.js` and rerun `gulp`.
If you need additional help, the best place to start is [Ghost's own
documentation](http://support.ghost.org/how-to-upgrade/).

## License

See LICENSE for details.

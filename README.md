# ghost-local
Set up a local Ghost environment for theme development and other tweaks.

## Environment Prereqs

- [nodenv](https://github.com/wfarr/nodenv)
  - `$ brew install nodenv`
- Node
  - `$ nodenv install`

## Initial Project Setup

Once you've cloned down the directory and installed the correct versions of
Node and Gulp, run the following:

    $ npm install
    $ gulp

The default Gulp task is `update-ghost`, which will take care of downloading the
version specified in `gulpfile.js` and installing the dependencies.

## Development

Fire up

    $ npm start

and then check out the site at [localhost:2368](http://localhost:2368).

## Upgrading Ghost versions

To upgrade Ghost, just change the version used in `gulpfile.js` and rerun `gulp`.
If you run into trouble, try running `gulp update-ghost-hard` to clear out the
`node_modules` directory. If you need additional help, the best place to start is
[Ghost's own documentation](http://support.ghost.org/how-to-upgrade/).

## Troubleshooting

If Node complains about using the wrong version for installing Ghost, make sure
you run `nvm install` so that the correct version of Node is both installed and
used.

## License

See LICENSE for details.

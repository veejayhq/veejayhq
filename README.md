## Veejayhq.net static site generator

This is the generator for http://veejayhq.net

## Installation

This site is generated using `node.js`, but no actual knowledge is required:
Just edit/add files in the [content](./content) directory.

These files are written in [markdown](https://help.github.com/articles/markdown-basics/) 
with a little bit of [frontmatter](https://www.npmjs.com/package/front-matter) at the top to specify things like a title.


1. Clone the repository

```
    git clone git@github.com:veejayhq/veejayhq.git
```

2. Install a node.js version and dependencies

The node.js version that comes with your distro is propably too old. 
[nvm](https://github.com/creationix/nvm) is the way to go:

```
    curl https://raw.githubusercontent.com/creationix/nvm/v0.24.0/install.sh | bash
    cd veejayhq
    npm install
```

4. Generate the site

After editing files in `content` render the site as following:

```
    cd veejayhq
    npm run build
```

The new HTML is now in public. To publish to [veejayhq.net](http://veejayhq.net) run:

```
    cd veejayhq
    npm run publish
```

You may want to preview your work locally  by starting the small built-in webserver:

```
    cd veejayhq
    npm start
```

Don't forget to commit your changes using git!

## Publishing the site

This repository contains the _generator_, to actually publish the site, another repository
is used to render the content into. Publishing the new site is just pushing it to GH.

## Contributing

Contributions are very welcome, especially the following:

* improve documentation ( edit the markdown files for this! )
* remove deprecated documentation ( remove files )
* improve layout and templates ( see `templates`) for this.

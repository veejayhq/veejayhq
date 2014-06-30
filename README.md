## Veejayhq.net static site generator

This is the generator for http://veejayhq.net

## Usage

1. Clone the repository

    git clone git@github.com:veejayhq/veejayhq.git

2. Install dependencies

    cd veejayhq
    npm install

3. Generate the site

    ./cmd.js build content public

4. Serve content

    ./cmd.js serve public

## Publishing the site

This repository contains the _generator_, to actually publish the site, another repository
is used to render the content into. Publishing the new site is just pushing it to GH.

    TARGET_DIR=veejayhq.github.io
    git clone git@github.com:veejayhq/veejayhq.github.io.git ${TARGET_DIR}
    ./cmd.js build content ${TARGET_DIR}
    cd ${TARGET_DIR}
    git add -u
    git commit
    git push

I've summarized these commands in the [build-site.sh](./build-site.sh) script.

## Conversion from wordpress

The site has been converted from wordpress. All content should be there.
However, if something's missing, there is an xml export with the original content that
can be imported again.

## Contributing

Contributions are very welcome, especially the following:

* improve documentation ( edit the markdown files for this! )
* remove deprecated documentation ( remove files )
* improve layout and templates ( see `templates`) for this.

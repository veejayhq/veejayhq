## Veejayhq.net static site generator

This is the generator for veejayhq.net

Currently this is a straight-forward dump of the wordpress website.
All content should be there, some of it has been mangled due to conversion.

This is a work in progress: we're not there yet.

A preview of the site is now live at: http://veejayhq.github.io/

### TODO

* import assets (images uploaded to veejayhq.net)
* cleanup documentation (out of date files should be removed)
* imporove styling & add widgets

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

## Contributing

Contributions are very welcome, especially the following:

* improve documentation ( edit the markdown files for this! )
* remove deprecated documentation ( remove files )
* improve layout and templates ( see `templates`) for this.

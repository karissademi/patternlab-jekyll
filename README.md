# patternlab-jekyll
A port of [Pattern Lab](http://patternlab.io) to [Jekyll](https://jekyllrb.com/)

## How to use
Run `jekyll serve`

Your project will be available at `http://127.0.0.1:8888/patternlab-jekyll/`

New patterns can be added under any of the following collections:
* 00-atoms
* 00-molecules
* 00-organisms

New patterns require front matter `title` and optional `description`.

## Creating releases
1. Update release variable in `_config.yml`
2. Create release folder under `dist/`
3. Copy compiled css file to location in `dist/`
4. Create release on GitHub

## Why Jekyll?
* Ability to host on GitHub Pages

## Caveats
There are some significant changes to the way files get generated that take a step away from Pattern Lab's approach.

## You can help!
There are definitely areas where this project could be improved. Please contribute as you see fit.

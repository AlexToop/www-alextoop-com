# www-alextoop-com

## Table of contents

- [About](#about)
- [Prerequisites](#prerequisites)
- [Setting up infrastructure](#setting-up-infrastructure)
- [Installation](#installation)
- [Running](#running)

## About
This is my portfolio site with AWS Amplify CD written with CDK.

## Prerequisites 
* node 
* npm

## Setting up infrastructure
Navigate to the cdk folder and following instructions in that [readme](/cdk/README.md)

## Installation
Once you've checked out this repository, run the following from the root directory:
```
npm ci
```

## Running
Run the following from the root directory:
```
npm run dev
```

## Building

```bash
# generate static project
$ npm run generate
```

## Adding a new blog post
This process is currently being refined but this is the current:

1. Write the article in markdown `src/static/markdown/`

2. Add an entry in the `src/assets/articles.model.js`

2. Copy and add another blog page in `src/pages/blogs/`

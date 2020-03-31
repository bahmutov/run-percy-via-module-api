# run-percy-via-module-api
> An experiment in running Percy agent via NPM module api instead of CLI

To run, need `PERCY_TOKEN`

```
$ PERCY_TOKEN node .
```

You should see output from Percy and Cypress

```
[percy] created build #112: https://percy.io/cypress-io/jsnation-example/builds/4732333
...
stopping Percy agent
[percy] stopping percy...
[percy] waiting for 1 snapshots to complete...
[percy] done.
[percy] finalized build #112: https://percy.io/cypress-io/jsnation-example/builds/4732333
```

Example build [https://percy.io/cypress-io/jsnation-example/builds/4732333](https://percy.io/cypress-io/jsnation-example/builds/4732333) where you should see an example page.

Find the script in [index.js](index.js)

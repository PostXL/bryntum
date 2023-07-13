# web

This repository contains reproduction of the issue we have with Bryntum Scheduler Pro. Try uncommenting the line in the `GantChart` component to see the size of the error page drastically increase and eventually crash the app.

### Setting Up Bryntum Registry

```sh
pnpm config set "@bryntum:registry=https://npm.bryntum.com"
pnpm login --registry=https://npm.bryntum.com

pnpm i
```

```
Username: matic..postxl.com
Password: trial
Email: (this IS public) matic@postxl.com
```

```sh
pnpm i @bryntum/schedulerpro@npm:@bryntum/schedulerpro-trial @bryntum/schedulerpro-react
```

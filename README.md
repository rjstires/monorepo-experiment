# Monorepo Experiment
The purpose of this repo is a proof of concept and general experiment with a monorepo containing
main libraries including UI client applications.

## Usage

### Install Lerna.
You must have [Learn](https://lernajs.io/) installed globally. Clone and navigate into the repository.
```
npm install --global lerna
```

### Clone the repo.
Clone this repo and navigate into the root directory.
```
git clone https://github.com/rjstires/monorepo-experiment.git
cd monorepo-experiment
```

### Bootstrap
Next we need to bootstrap the application with Lerna. This will install dependencies in the root and children packages and link local dependencies automatically.
```
lerna bootstrap
```
### Build and Watch
Currently only "client-a" is built out, but the process is the same for either. `npm run start` is an alias for `lerna run start --parallel`. This simply runs `npm start` in each package (if it exists), and doesn't wait for anyone to finish (many watchers).
```
npm run start
```

### Serve
This is a stop-gap right now. You'd want to use webpack-dev-server here I'm sure. For now we're just using serve to host the bundled files.
```
npm run serve:a
```

## Notes
- I've added root level tslint, editorconfig, and .gitignore. All the packages inherit these so it's a great way to keep the development experience consistent.
- I used lint-staged to run linting and testing when you attempt to commit. So far it's worked great.
- Tests are stubbed to fail, so you can't actually commit without --no-verify.
- It might not be apparent, but client-a is not reading the source of the libraries, but the compiled code in their `dist/` folders. This is controlled by the "main" property in the libraries package.json file.


## Roadmap
1. Testing
2. Publishing
3. Extracting shared configuration files (.babelrc, webpack configs, etc.,)s
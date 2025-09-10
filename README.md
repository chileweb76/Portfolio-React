# Personal Portfolio of Christopher Hile

React portfolio site built with Create React App, Bootstrap and Sass. The project displays projects, images, and includes a resume download and a small API call for dynamic content.

## Repository structure
- `src/` — React source code (components, pages, assets)
- `public/` — static HTML and assets served at runtime
- `build/` — production build output (generated)

## Prerequisites
- Node.js 16+ (LTS recommended)
- npm (or yarn / pnpm if preferred)

## Install
From the repository root:

```bash
npm install
```

## Development
Start the dev server with hot reload:

```bash
npm start
```

Open http://localhost:3000

## Build
Create a production build:

```bash
npm run build
```

## Tests
Run the test suite (CRA wiring):

```bash
npm test
```

## Troubleshooting
- ERR_INVALID_PACKAGE_CONFIG: If a package.json in `node_modules` is corrupt, remove `node_modules` and reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
```

- `src refspec main does not match any`: This means your local branch has no commits or the branch name doesn't exist. To create an initial commit and push:

```bash
git add .
git commit -m "chore: initial commit"
git remote add origin https://github.com/chileweb76/Portfolio-React.git
git branch -M main
git push -u origin main
```

If the remote already has history you want to keep, fetch first and then create a local branch tracking remote:

```bash
git fetch origin
git checkout -b main origin/main
```

## Notes
- Resume PDF: `src/download/HileChristopherResume.pdf`
- Images: `src/img/`


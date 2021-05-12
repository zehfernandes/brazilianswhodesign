# Hawaiians in Tech

The website is built using Google Spreedsheet, [Next.js](https://nextjs.org/) and deployed at [Vercel](https://vercel.com/).

## Forking this project

The code was forked from another open source project and will remain open source. These instructions should help you running on your local machine to get started.

### Link your spreedsheet

1. Duplicate [this spreedhsheet template](https://docs.google.com/spreadsheets/d/12LLA-NoHin0zQfmpEblgMjd260bmriLMowBAH1QDOhI/edit)
2. Go to File > Publish to the Web > Publish
3. Copy the id between /spreadsheets/ and /edit in the url:
   > [https://docs.google.com/spreadsheets/d/**1W7cOTU2nUfT-3N88Aa09ZtZYv_KhtYkbCtpdm_9FeT4**/edit](https://docs.google.com/spreadsheets/d/1W7cOTU2nUfT-3N88Aa09ZtZYv_KhtYkbCtpdm_9FeT4/edit)
4. Paste the ID in the file [`pages/api/technologists.js`](https://github.com/hawaiians/hawaiiansintech/blob/main/pages/api/technologists.js)

### Install the dependencies

Making sure you're in the correct project folder and install the dependencies:

```
yarn install
```

### Run the project locally

To start the development server run:

```
yarn dev
```

In your browser, open `localhost:3000`.

### Deploy at vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https%3A%2F%2Fgithub.com%2Fzehfernandes%2Fbrazilianswhodesign)

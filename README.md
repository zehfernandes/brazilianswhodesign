# Brazilians Who Design

![](https://www.dropbox.com/s/x5udk39ad57ayp5/brazilianswhodesignthumb.png?raw=1)

The website is built using Google Spreedsheet, [Next.js](https://nextjs.org/) and deployed at [Vercel](https://vercel.com/).

## Forking this project

We encourage you to create your directory featured a list of any professionals you think is relevant. The code is open source, and these instructions will help you running on your local machine to get started.

### Link your spreedsheet

1. Duplicate [this spreedhsheet template](https://docs.google.com/spreadsheets/d/12LLA-NoHin0zQfmpEblgMjd260bmriLMowBAH1QDOhI/edit)
2. Follow [this guide](https://leerob.io/snippets/google-sheets#usage) to allow access to your Google account
3. Create a .env file and fill the informations below
```
GOOGLE_PRIVATE_KEY=""
GOOGLE_CLIENT_EMAIL=""
```
4. Copy the id between /spreadsheets/ and /edit in the url: 
	> [https://docs.google.com/spreadsheets/d/__12LLA-NoHin0zQfmpEblgMjd260bmriLMowBAH1QDOhI__/edit](https://docs.google.com/spreadsheets/d/12LLA-NoHin0zQfmpEblgMjd260bmriLMowBAH1QDOhI/edit)
5. Paste the ID in the file [`pages/api/designers.js`](https://github.com/zehfernandes/brazilianswhodesign/blob/main/pages/api/designers.js)

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



# Shopping Cart

A basic shopping cart app using TypeScript, and React with Redux Toolkit and React Router.

I learned a lot in this project. I had the opportunity to explore Redux Toolkit. More like 
I wanted to because I could just use Context API if I just wanted to avoid prop drilling.

[Live Preview](https://shopping-cart-two-ruddy.vercel.app/)

I know using something like Redux Toolkit on an app as small as this is overkill, but I think there's
nothing wrong with that. It was fun learning how to use it and I'm sure this knowledge would be useful 
when working on bigger projects.

I started off with the [Getting Started](https://redux-toolkit.js.org/introduction/getting-started) 
guide provided by Redux Toolkit documentation. 
And eventually, I ended up following the 
[Fundamentals](https://redux.js.org/tutorials/fundamentals/part-1-overview) and 
[Essentials](https://redux.js.org/tutorials/essentials/part-1-overview-concepts) tutorials and I am 
so glad I did. They have made an amazing tutorial on their website. It is so easy to follow, and so
well explained with example-apps and actual use-case.  

I also had the opportunity to explore JSDocs and I tried my best to document the code. I still don't know
whether I should use it or not, but it really helps in understanding the codebase. It'll take some time before
I get used to it though.

## Features

- View a list of products fetched from the Fake Store API.
- Add products to the cart with adjustable quantity.
- Remove products from the cart.
- View the total price of items in the cart.
- Simulate a checkout process by placing order.

## Tech Stack

- TypeScript
- React
- Redux Toolkit
- React Router
- Vite

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/blue0206/shopping-cart.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Building for Production

```bash
npm run build
```

This will generate a production-ready build in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
shopping-cart/
├── src/
│   ├── app/           # Redux Store and Typed Hooks
│   ├── assets/        # Assets (images, fonts)
│   ├── components/    # React components
│   ├── features/      # Redux features and their slices
│   ├── hooks/         # Custom React hooks
│   ├── styles/        # CSS styles
│   ├── types/         # TypeScript type definitions
│   ├── App.tsx        # Main application component
│   └── main.tsx       # Application entry point
│   └── routes.ts      # Routes configuration
└── index.html         # HTML template
```

## Acknowledgments

- Built as part of The Odin Project curriculum.

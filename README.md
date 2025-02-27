# Shopping Cart

A basic shopping cart app using TypeScript, and React with Redux Toolkit and React Router.

I learned a lot in this project. I had the opportunity to explore Redux Toolkit and how
it simplifies state management without needing to lifting-up the state.

I'll share some of the things I learned along the way here:

## What led me to learn and use Redux Toolkit?

So far, I have been working on projects that didn't require a considerable amount of sharing
of state. However, when I started building this app which has multiple routes, I needed to share
state between different components on sibling routes.
I had two ways to deal with this:
1. Make use of Outlet Context.
2. Create another parent wrapper component and lift the state up.
Both of these options required significant amount of refactoring and it was not ideal, especially
since I had already styled most components while playing around with CSS and not realizing it.

This is where I realized that it would be a good time to learn about Redux Toolkit since it can
provide global state management across all components without (annoyingly) having to lift the state 
up!
However, I was aware that it had a learning curve to it. But I decided to give it a try!

## What did I learn?

I started off with the [Getting Started](https://redux-toolkit.js.org/introduction/getting-started) 
guide provided by Redux Toolkit documentation. 
And eventually, I ended up following the 
[Fundamentals](https://redux.js.org/tutorials/fundamentals/part-1-overview) and 
[Essentials](https://redux.js.org/tutorials/essentials/part-1-overview-concepts) tutorials and I am 
so glad I did. They have made an amazing tutorial on their website. It is so easy to follow, and so
well explained with projects and actual use-case!

The Fundamentals tutorial consisted of old Redux patterns which are no longer used and have mostly
been simplified. But it helped me understand what's really happening behind the scenes. I followed
through the tutorials but didn't go into too much detail into async thunks and stuff (last part). 
The reason is that the project I'm working on won't apply any of it and I'd end up practicing nothing.
So I've saved it for a future project, and I'll learn it as the need arises! But that bit is barely
the extra (but still major and important) features of Redux Toolkit when you want something more than 
just global state management.

After finishing with the Fundamentals, I finally moved on to the Essentials tutorial which is the
real deal. I found out that they have simplified so many things as compared to what they showed in
Fundamentals. And it all made sense especially because I had already gone through the Fundamentals
tutorial. 
The Essentials tutorial used TypeScript which was good for me since I knew TypeScript but needed
more practice with it. There was not much to learn in this one except the new methods which were
introduced to simplify the old patterns and how TypeScript is used while setting up the store. 

I learned about slices which are nothing but the old Redux reducer conditional logics which used
to be executed with a `switch (action.payload)` statement. Now we simply write our logic inside the
slice itself and export the slice action creators. This makes it easier to manage state changes,
especially when there are multiple actions involved.

The `createReducer` and `createSlice` methods are both very useful and the best part is that even
if you end up making mutable state changes, it's still safe and doesn't have any side-effects as
it uses Immer under the hood (I also learned that what it does behind the scenes is create a wrapper
around the updated state and returns it, hence making sure the state is immutable). Though this
feature only exists on these two methods.

As soon as I was done with consuming the required amount of knowledge, I went ahead and built the
app. I set things up as per the docs, and created my own features and their slices. Also created
typed hooks for `useSelector` and `useDispatch`. I wrapped the Provider (from redux) around the
Router Provider and that was pretty much it. It was smooth sailing after that. It was a great experience
and I feel like I now know enough to start building apps with Redux Toolkit. My knowledge of Redux is still
limited but I think I got the hang of it.

## Exploring JSDocs

I also had the opportunity to explore JSDocs and I tried my best to document the code. I still don't know
whether I should use it or not, but it really helps in understanding the codebase. It'll take some time before
I get used to it though.
I will keep exploring it though, and use it wherever possible.

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

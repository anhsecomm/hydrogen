import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import tailwind from './styles/tailwind-build.css';
import styles from './styles/app.css';
import favicon from '../public/favicon.svg';
import {Layout} from './components/Layout';
import {Seo} from '@shopify/hydrogen';
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "./components/Feature";
import Grid from "./components/Grid";
import Page from "./components/Page";
import Teaser from "./components/Teaser";
export const links = () => {
  return [
    {rel: 'stylesheet', href: tailwind},
    {rel: 'stylesheet', href: styles},
    {
      rel: 'preconnect',
      href: 'https://cdn.shopify.com',
    },
    {
      rel: 'preconnect',
      href: 'https://shop.app',
    },
    {rel: 'icon', type: 'image/svg+xml', href: favicon},
  ];
};

export async function loader({context}) {
  const layout = await context.storefront.query(LAYOUT_QUERY);
  return {layout};
}

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
};
storyblokInit({
  accessToken: "uEjaCZrq7paw2j5XrVeTywtt",
  use: [apiPlugin],
  components,
});

export default function App() {
  const data = useLoaderData();

  const {name} = data.layout.shop;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Seo />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout title={name}>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

const LAYOUT_QUERY = `#graphql
  query layout {
    shop {
      name
      description
    }
  }
`;

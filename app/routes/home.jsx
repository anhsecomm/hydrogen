import { json } from '@shopify/remix-oxygen';
import { useLoaderData } from "@remix-run/react";

import Layout from "../components/Layout";
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

export const loader = async ({context}) => {
  // the slug of the story
  let slug = "home";

  let params = {
    version: "draft", // or 'published'
  };
  const {products} = await context.storefront.query(PRODUCTS_QUERY);
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, params);

  return json({story: data?.story,
    allProducts: products.nodes});
};

export default function Page() {
  let {story} = useLoaderData();

  story = useStoryblokState(story);

  return (
    <StoryblokComponent blok={story.content} />
  );
}

const PRODUCTS_QUERY = `#graphql
  query  {
    products(first: 100) {
    nodes {
      title
      handle
      id
      variants(first:1) {
        nodes {
          id
          image {
          id
          url
          altText
          width
          height
        }
          price {
            currencyCode
            amount
          }
          compareAtPrice {
            currencyCode
            amount
          }
        }
      }
    }
  }
  }
`;
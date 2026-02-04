// src/lib/woocommerce.js
import { GraphQLClient, gql } from 'graphql-request';

const client = new GraphQLClient(import.meta.env.WORDPRESS_API_URL);

export async function getProducts() {
    const query = gql`
    query GetProducts {
      products(first: 10) {
        nodes {
          id
          name
          slug
          description
          image {
            sourceUrl
          }
          ... on SimpleProduct {
            price
          }
        }
      }
    }
  `;
    return await client.request(query);
}
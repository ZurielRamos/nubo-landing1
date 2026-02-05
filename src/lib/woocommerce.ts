// src/lib/wp.js
import { GraphQLClient } from "graphql-request";

// Reemplaza esto con la URL real de tu sitio
const WP_API = "https://nubolab.strategee.us/graphql";

export const wpClient = new GraphQLClient(WP_API);

export const ALL_PRODUCTS_QUERY = `
  query GetAllProducts {
    products(first: 20) {
      nodes {
        id
        name
        slug
        image {
          sourceUrl
        }
        galleryImages(first: 3) {
          nodes {
            sourceUrl
          }
        }
        ... on SimpleProduct {
          price
          stockStatus
        }
        ... on VariableProduct {
          price
          stockStatus
        }
      }
    }
  }
`;
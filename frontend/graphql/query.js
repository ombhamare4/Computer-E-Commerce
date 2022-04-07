import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query getProducts {
    products {
      _id
      name
      price {
        originalPrice
        discountPrice
      }
      available
      image
      company
      category
      description
      reviews {
        rating
        comment
      }
      createdAt
    }
  }
`;

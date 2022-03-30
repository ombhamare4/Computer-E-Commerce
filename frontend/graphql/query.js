import { gql } from "@apollo/client";

export const USER_BY_ID = gql`
  query userById($userId: String!) {
    userById(userId: $userId) {
      _id
      email

      cart {
        product {
          _id
          name
          image
          price {
            discountPrice
            originalPrice
          }
        }
      }
    }
  }
`;
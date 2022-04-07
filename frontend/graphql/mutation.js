import { gql } from "@apollo/client";

export const CREATE_ORDER = gql`
  mutation createOrder(
    $userId: String!
    $firstName: String!
    $lastName: String!
    $add1: String!
    $street: String
    $landmark: String
    $city: String!
    $state: String!
    $phoneNo: String!
    $pincode: Int!
  ) {
    createOrder(
      orderInput: {
        userId: $userId
        name: { firstName: $firstName, lastName: $lastName }
        address: {
          add1: $add1
          street: $street
          landmark: $landmark
          city: $city
          state: $state
          phoneNo: $phoneNo
          pincode: $pincode
        }
      }
    ) {
      user {
        name {
          firstName
        }
        email
      }
      _id
      name {
        firstName
        lastName
      }
      orderProducts {
        product {
          _id
          name
        }
      }
    }
  }
`;

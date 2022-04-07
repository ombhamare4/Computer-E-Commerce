import Layout from "../../../components/Layout/Layout";
import CartData from "../../../components/Cart/CartData";
import { gql } from "@apollo/client";
import client from "../../../api/appolo-client";

const Cart = ({ userData }) => {
  return (
    <Layout>
      <CartData cartData={userData.cart} />
    </Layout>
  );
};

export default Cart;

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query user {
        users {
          _id
        }
      }
    `,
  });

  return {
    paths: data.users.map((user) => ({
      params: {
        userId: user._id,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const userId = context.params.userId;
  const { data, loading } = await client.query({
    query:USER_BY_ID,
    variables: { userId },
  });

  return {
    props: {
      userId: userId,
      userData: data.userById,
      loading: loading,
    },
  };
}

// export const getServerSideProps = async ({ params }) => {
//   return {
//     props: {
//       productId: params.productId,
//     },
//   };
// };

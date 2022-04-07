import { useRouter } from "next/router";

import ProductDetails from "../../../../components/ProductDetails/ProductDetail";
import Layout from "../../../../components/Layout/Layout";
import { gql } from "@apollo/client";
import client from "../../../../api/appolo-client";
import Loading from "../../../../components/Loading/Loading";



const products = ({ productId, productData, loading }) => {
  const router = useRouter();
  console.log("This is Router: "+router);
  if (loading) return <Loading />;
  return (
    <Layout>
      <ProductDetails productData={productData}/>
    </Layout>
  );
};

export default products;

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query products {
        products {
          _id
          name
          category
        }
      }
    `,
  });

  return {
    paths: data.products.map((product) => ({
      params: {
        productId: product._id,
        category: product.category,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
    console.log("Contex here: "+ context.params.productId);
  const productId = context.params.category.productId;
  const { data, loading } = await client.query({
    query: gql`
      query Product($productId: String!) {
        productByID(productId: $productId) {
          _id
          name
          image
          price {
            originalPrice
            discountPrice
          }
          company
          category
          description
          weight
          available
          reviews {
            rating
            comment
          }
          createdAt
          updatedAt
        }
      }
    `,
    variables: { productId },
  });

  return {
    props: {
      productId: productId,
      productData: data.productByID,
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

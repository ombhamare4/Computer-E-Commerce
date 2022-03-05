import { useRouter } from "next/router";
import Head from "next/head";

import Layout from "../../components/Layout/Layout";
import AllCollectionsDetails from "../../components/AllCollectionsDetails/AllCollectionsDetails";
import client from "../../api/appolo-client";
import { gql, useQuery } from "@apollo/client";

const AllCollectionPage = ({ productsData , loading }) => {
  if(loading){
    console.log("Loading Here"+loading);
  }
  const router = useRouter();
  const collectionName = router.query.collectionId;
  // console.log(productsData);

  return (
    <Layout>
      <Head>
        <title>{collectionName}</title>
        <meta name="description" content="All Collections" />
      </Head>

      <AllCollectionsDetails productsData={productsData} />
    </Layout>
  );
};

export default AllCollectionPage;

// const GetProducts = gql`
//   query products {
//     products {
//       _id
//       name
//       price {
//         originalPrice
//         discountPrice
//       }
//     }
//   }
// `;

export async function getStaticProps() {
  const { data , loading } = await client.query({
    query: gql`
      query products {
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
    `,
  });
  return {
    props: {
      productsData: data.products,
      loading: loading
    },
  };
}

import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "../../../components/Layout/Layout";
import { gql } from "@apollo/client";
import client from "../../../api/appolo-client";
import ProductList from "../../../components/ProductsTest/ProductList";
const CategoryPage = ({ productCategory, productData }) => {
  const router = useRouter();
  const [changeView, setChangedView] = useState(true);

  const gridViewHandler = () => {
    setChangedView(true);
  };

  const listViewHandler = () => {
    setChangedView(false);
  };

  return (
    <Layout>
      <div className="bg-white p-10">
        <ProductList
          products={productData.productByCollection}
          changeView={changeView}
        />
      </div>
    </Layout>
  );
};

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
  const productCategory = context.params.category;
  const { data, loading } = await client.query({
    query: gql`
      query Product($productCategory: String!) {
        productByCollection(collectionName: $productCategory) {
          _id
          name
          image
          category
          price {
            originalPrice
            discountPrice
          }
        }
      }
    `,
    variables: { productCategory },
  });
  return {
    props: {
      productCategory: productCategory,
      productData: data,
      loading: loading,
    },
  };
}

export default CategoryPage;

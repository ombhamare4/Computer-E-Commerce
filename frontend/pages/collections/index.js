import { useRouter } from "next/router";
import Head from "next/head";

import Layout from "../../components/Layout/Layout";
import AllCollectionsDetails from "../../components/AllCollectionsDetails/AllCollectionsDetails";

const AllCollectionPage = () => {
  const router = useRouter();
  const collectionName = router.query.collectionId;

  return (
    <Layout>
      <Head>
        <title>{collectionName}</title>
        <meta name="description" content="All Collections" />
      </Head>

      <AllCollectionsDetails collectionName={collectionName} />

    </Layout>
  );
};

export default AllCollectionPage;

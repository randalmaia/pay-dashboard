import Head from "next/head";
import { GetServerSideProps } from "next";
import Layout from "../components/Layout";
import Dashboard from "../components/Dashboard";
import DashboardQuery from "../graphql/query/dashboard";
import client from "../graphql/client";

interface HomeProps {
  data: DashboardData;
}

const Home = ({ data }: HomeProps) => {
  return (
    <div>
      <Head>
        <title>Pay - The awesome dashboard!</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Layout user={data.user}>
        <Dashboard
          card={data.card}
          transactions={data.transactions}
          payments={data.payments}
          saving={data.saving}
        />
      </Layout>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query<DashboardData>({
    query: DashboardQuery,
  });

  return {
    props: {
      data,
    },
  };
};

export default Home;

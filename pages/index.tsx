import Head from "next/head";
import Layout from "../components/Layout";
import Dashboard from "../components/Dashboard";

const Home = () => (
  <div>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
        rel="stylesheet"
      />
    </Head>

    <Layout>
      <Dashboard />
    </Layout>
  </div>
);

export default Home;

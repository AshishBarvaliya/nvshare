import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>nvshare</title>
        <meta
          name="description"
          content="Share your project secerets sucurely and easily"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        nvshare
      </main>
    </>
  );
}

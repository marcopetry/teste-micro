import dynamic from 'next/dynamic';
const Nav = dynamic(
  () => {
    const mod = import('home/nav');
    return mod;
  },
  { ssr: false },
);

function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  );
}

export default MyApp;

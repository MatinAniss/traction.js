import { type AppType } from "next/app";
import Traction from "@traction.js/nextjs";

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <>
      <Traction />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;

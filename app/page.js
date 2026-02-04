import Image from "next/image";
import Header from "./component/Header";
import Body from "./component/Body";
import LenisProvider from "./LenisProvider";
import Loader from "./component/Loader";

export default function Home() {
  return (
    <>
      <LenisProvider>
        <Loader/>
      <Header />
      <Body />
    </LenisProvider>
    </>
  );
}

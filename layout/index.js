import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Content from "@/components/content";

export default function Layout({ children, metaTitle, metaDescription}) {
 return (
  <div>
   <Head>
    <title>{`Learn Next-JS - ${metaTitle}`}</title>
    <meta
     name="description"
     content={metaDescription || "Generated by create next app"}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
   </Head>
   <Header/>
   {children }
   <Footer/>
  </div>
 );
}
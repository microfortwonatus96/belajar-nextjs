import Content from "@/components/content";
import Layout from "@/layout";
import { useEffect } from "react";

export default function Main() {

useEffect(() => {
    fetch("api/hello")
    .then((res) => res.json())
    .then((res) => console.log("response =>", res))
    .catch((err) => console.log("error =>", err))
}, [])
 return (
  <Layout metaTitle="home">
  <p>Home</p>
  </Layout>
 );
}
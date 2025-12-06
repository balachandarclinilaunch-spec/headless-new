// export default async function Home() {
//   const res = await fetch("http://localhost/wordpress/wp-json/wp/v2/posts/24", {
//     cache: "no-store"
//   });

//   const post = await res.json();

//   return (
//     <>
    
//     <div style={{ padding: 20, fontSize: 24 }}>
//       <h1>{post.title.rendered}</h1>
//       {post.content.rendered.replace(/<\/?[^>]+(>|$)/g, "")}
      
//     </div>
//     </>
//   );
// }



// import Hero from "./components/Home";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

// export default async function Home() {
//   const res = await fetch(
//     "http://localhost/wordpress/wp-json/wp/v2/pages/51?acf_format=standard&fields=id,title,acf",
//     { next: { revalidate: 60 } },
//     { cache: "no-store" }
//   );
//   const page = await res.json();
// const acf = page.acf;
//   // const data = page[0]; // ACF fields


//   return (
//     <main>
//       <Header />
//       <Hero data={acf} />
//       <Footer />
//     </main>
//   );
// }


import Hero from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default async function Home() {
  const res = await fetch(
    "https://nextwordpress.wininlifeacademy.in/wp-json/wp/v2/pages/9?acf_format=standard&fields=id,title,acf",
    { next: { revalidate: 60 } },
    { cache: "no-store" }
  );
  const page = await res.json();
const acf = page.acf;
  // const data = page[0]; // ACF fields


  return (
    <main>
      <Header />
      <Hero data={acf} />
      <Footer />
    </main>
  );
}

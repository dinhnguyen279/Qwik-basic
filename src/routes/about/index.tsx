import { component$, useStyles$ } from "@builder.io/qwik";
import { type DocumentHead, routeLoader$, Link } from "@builder.io/qwik-city";
import aboutStyle from "./about.css?inline";
interface BlogData {
  id: number;
  title: string;
  body: string;
}

export const useOnGetData = routeLoader$(async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data: BlogData[] = await res.json();
  return data.splice(0, 20);
});

export default component$(() => {
  const dataBlogs = useOnGetData();
  useStyles$(aboutStyle);
  return (
    <>
      <h1 style={{ color: "#f3f3f3" }}>Blogs Qwik</h1>
      <div class="blogs">
        {dataBlogs.value.map((val, idx) => (
          <div key={idx} class="blogs-item">
            <span>{val.id}</span>
            <h2>Title: {val.title.slice(0, 20)}...</h2>
            <p>{val.body.slice(0, 100)}...</p>
            <Link href={`/blog/` + val.id}>See More...</Link>
          </div>
        ))}
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "About",
  meta: [
    {
      name: "description",
      content: "Welcome to About page Qwik basis",
    },
  ],
};

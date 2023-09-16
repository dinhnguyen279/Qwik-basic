import { component$, useStyles$ } from "@builder.io/qwik";
import { type DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import blogDetailStyle from "./blog.css?inline";
interface BlogData {
  id: number;
  title: string;
  body: string;
}

export const useGetDetail = routeLoader$(async ({ params, redirect }) => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + params.id
  );
  if (!res.ok) {
    throw redirect(302, "/");
  }
  const data: BlogData = await res.json();
  return data;
});

export default component$(() => {
  const detailBlog = useGetDetail();
  useStyles$(blogDetailStyle);
  return (
    <>
      <h1>Detail Blog {detailBlog.value.id}</h1>
      <div class="blogs-detail">
        <div class="blog-item__detail">
          <h2>Title: {detailBlog.value.title}</h2>
          <p>{detailBlog.value.body}</p>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Detail Blog",
  meta: [
    {
      name: "description",
      content: "Detail Blog",
    },
  ],
};

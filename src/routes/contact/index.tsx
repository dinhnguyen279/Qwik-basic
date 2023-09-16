import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <div>contact</div>;
});

export const head: DocumentHead = {
  title: "Contact",
  meta: [
    {
      name: "description",
      content: "Welcome to Contact page Qwik basis",
    },
  ],
};

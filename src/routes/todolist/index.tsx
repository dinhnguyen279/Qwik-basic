import { component$ } from "@builder.io/qwik";
import {
  type DocumentHead,
  routeLoader$,
  routeAction$,
  zod$,
  z,
  Form,
} from "@builder.io/qwik-city";

interface ListItem {
  text: string;
}

export const list: ListItem[] = [
  {
    text: "hello",
  },
  {
    text: "Các",
  },
  {
    text: "Bạn",
  },
  {
    text: "Nhó",
  },
];

export const useListLoader = routeLoader$(() => {
  return list;
});

export const useAddToListAction = routeAction$(
  (item) => {
    list.push(item);
    return {
      success: true,
    };
  },
  zod$({
    text: z.string().trim().min(1),
  })
);

export default component$(() => {
  const list = useListLoader();
  const action = useAddToListAction();

  return (
    <>
      <div class="container">
        <h1 class="text-white">
          <span class="text-red-500">TODO</span> List
        </h1>
      </div>

      <div class="container">
        {list.value.length === 0 ? (
          <span class="">No items found</span>
        ) : (
          <ul class="flex flex-col justify-center items-center gap-y-4 my-4">
            {list.value.map((item, index) => (
              <li
                key={`items-${index}`}
                class="rounded-xl px-4 py-2 md:w-1/2 w-full bg-white text-black"
              >
                {index}: {item.text}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div class="container">
        <Form action={action} spaReset>
          <input
            placeholder="Hello World"
            type="text"
            name="text"
            required
            class="py-2 px-4 outline-none rounded-xl"
          />
          <button
            type="submit"
            class="m-2 py-2 px-4 bg-white rounded-xl text-black hover:bg-gray-500 hover:text-white transition-all duration-300 ease-linear"
          >
            Add item
          </button>
        </Form>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Qwik Todo List",
};

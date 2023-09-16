import { component$, useSignal, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Modal from "~/components/modal/modal";
import thunder from "../media/thunder.png";
export default component$(() => {
  const stateModal = useSignal(false);
  const closeModal = $(() => {
    stateModal.value = false;
  });
  return (
    <>
      <div class="home">
        <div class="home-content">
          <h1>Qwik basis</h1>
          <img src={thunder} alt="thunder" width={280} height={280} />
          <button onClick$={() => (stateModal.value = true)}>Open modal</button>
          {stateModal.value && (
            <Modal openModal={stateModal.value} size="sm" close={closeModal}>
              <div q:slot="content" class="content-modal">
                <h2>Modal header</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugit magni eum iste porro facere sit quibusdam laborum
                  asperiores doloremque, tempora a! Delectus similique rerum
                  pariatur incidunt sunt culpa possimus repellendus.
                </p>
              </div>
              <div q:slot="footer">Modal header</div>
            </Modal>
          )}
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Home",
  meta: [
    {
      name: "description",
      content: "Welcome to home page Qwik basis",
    },
  ],
};

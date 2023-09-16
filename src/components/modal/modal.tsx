import { Slot, component$, useStylesScoped$ } from "@builder.io/qwik";
import modalStyle from "./modal.css?inline";
interface ModalProps {
  size: "sm" | "lg";
  openModal?: boolean;
  close: () => void;
}
export default component$((props: ModalProps) => {
  useStylesScoped$(modalStyle);

  return (
    <div class={`modal ${props.size}`}>
      <div class="modal-content">
        <div class="close" onClick$={props.close}>
          Close
        </div>
        <main class="main-content">
          <Slot name="content" />
        </main>
        <footer>
          <Slot name="footer" />
        </footer>
      </div>
    </div>
  );
});

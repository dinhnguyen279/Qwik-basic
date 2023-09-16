import { component$, useSignal } from "@builder.io/qwik";
import { QwikLogo } from "../icons/qwik";
import styles from "./header.module.css";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  const navbar = useSignal(true);
  return (
    <header class={styles.header}>
      <div class={[styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/" title="qwik">
            <QwikLogo height={50} width={143} />
          </a>
        </div>
        <div
          class={styles.hamburger}
          onClick$={() => (navbar.value = !navbar.value)}
        >
          <span
            class={[
              styles.hamburger_item,
              navbar.value ? "" : styles.fistHumburger,
            ]}
          ></span>
          <span
            class={[
              styles.hamburger_item,
              navbar.value ? "" : styles.secondHumburger,
            ]}
          ></span>
          <span
            class={[
              styles.hamburger_item,
              navbar.value ? "" : styles.thirdHumburger,
            ]}
          ></span>
        </div>
        <ul
          class={`${
            styles.listNavbar
          } transition-all duration-300 ease-linear ${
            navbar.value ? "translate-x-[-100%]" : "translate-x-0"
          }`}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/todolist">Todolist</Link>
          </li>
        </ul>
      </div>
    </header>
  );
});

import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import styles from "./styles.css?inline";

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: "7th May 2023",
  };
});

export default component$(() => {
  useStyles$(styles);
  return (
    <>
      {/* <Header /> */}
      <main>
        <Slot />
      </main>
      {/* <Footer /> */}
    </>
  );
});

import {
  Slot,
  component$,
  useContext,
  useContextProvider,
  useSignal,
  useTask$,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { foodContextId } from "~/context-id";
import { FoodSelector } from "./FoodSelector";

export default component$(() => {
  const stringSignal = useSignal("");
  const colorSignal = useSignal("white");

  useContextProvider(foodContextId, { colorSignal, stringSignal });
  useTask$(({ track }) => {
    track(() => stringSignal.value);
    if (stringSignal.value.indexOf("moni") !== -1) {
      colorSignal.value = "red";
    } else {
      colorSignal.value = "white";
    }
  });
  return (
    <div>
      <input
        class="text-black"
        type="text"
        value={stringSignal.value}
        onInput$={(e) => {
          stringSignal.value = (e.target as HTMLInputElement).value;
        }}
      />
      <button
        onClick$={() => {
          stringSignal.value = "";
        }}
      >
        RESET
      </button>
      <br />
      {stringSignal.value.length > 0 ? <Comp>input val = </Comp> : null}

      <FoodSelector />
    </div>
  );
});

export const Comp = component$(() => {
  const signals = useContext(foodContextId);
  return (
    <div>
      <Slot />
      <h3>
        <span style={"color:" + signals.colorSignal.value}>
          {signals.stringSignal.value}
        </span>
      </h3>
    </div>
  );
});

export const head: DocumentHead = {
  title: "My Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};

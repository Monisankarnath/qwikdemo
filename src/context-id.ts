import type { Signal } from "@builder.io/qwik";
import { createContextId } from "@builder.io/qwik";

export interface FoodContextProps {
  colorSignal: Signal<string>;
  stringSignal: Signal<string>;
}

export const foodContextId = createContextId<FoodContextProps>("foodContext");

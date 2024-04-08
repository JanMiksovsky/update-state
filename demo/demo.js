import updateState from "../src/updateState.js";
import { message } from "./components.js";

// The page state object. We set the initial state in the "load" event below.
let state = {};

// Create a setState function that updates state and calls our render function.
const setState = updateState(state, render);

// Reflect state changes on the page by calling DOM APIs directly.
function render(changed) {
  if (changed.count) {
    // The count changed; update the visible counters.
    counter.textContent = state.count;
    counterMessage.innerHTML = message(state.count);
  }
}

// Wait for the page and all its resources to load.
window.addEventListener("load", async () => {
  // Once the page is loaded we can access those elements with `id` attributes
  // directly as global variables. Wire up event handlers for interactive
  // elements. Event handlers only update state, not the page elements.
  buttonDecrement.addEventListener("click", () => {
    setState({ count: state.count - 1 });
  });
  buttonIncrement.addEventListener("click", () => {
    setState({ count: state.count + 1 });
  });

  // Set the initial state of the page to trigger the first render. The
  // `updateState` function will detect that the count changed, and will return
  // a `changed` dictionary with `count: true`, so the `render` function will
  // know to update the counter.
  setState({ count: 0 });
});

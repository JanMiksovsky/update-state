import updateState from "../src/updateState.js";
import { message } from "./components.js";

// The page state; initial all fields to null.
let state = {
  count: null,
};

function render(state, changed) {
  if (changed.count) {
    // The count changed; update the visible counter.
    counter.textContent = state.count;
    counterMessage.innerHTML = message(state.count);
  }
}

// Apply changes to state and re-render the page.
function setState(changes) {
  const { newState, changed } = updateState(state, changes);
  state = newState;
  render(state, changed);
}

// Wait for the page and all its resources to load.
window.addEventListener("load", async () => {
  // Wire up event handlers for interactive elements. Once the page is loaded,
  // we can access elements with `id` attributes directly as global variables.
  buttonDecrement.addEventListener("click", () => {
    setState({
      count: state.count - 1,
    });
  });
  buttonIncrement.addEventListener("click", () => {
    setState({
      count: state.count + 1,
    });
  });

  // Set the initial state of the page.
  setState({
    count: 0,
  });
});

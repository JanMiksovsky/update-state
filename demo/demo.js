import updateState from "../src/updateState.js";
import { message } from "./components.js";

// The page state; initial all fields to null.
let state = {
  count: null,
};

// When the state changes, reflect those changes in the page elements by calling
// DOM APIs directly.
function render(state, changed) {
  if (changed.count) {
    // The count changed; update the visible counter.
    counter.textContent = state.count;
    counterMessage.innerHTML = message(state.count);
  }
}

// This function is called by any event handler that wants to update the page.
// The event handlers never update the page elements directly.
function setState(changes) {
  const { newState, changed } = updateState(state, changes);
  state = newState;
  render(state, changed);
}

// Wait for the page and all its resources to load.
window.addEventListener("load", async () => {
  // Wire up event handlers for interactive elements. Once the page is loaded,
  // we can access elements with `id` attributes directly as global variables.
  // These event handlers only update state, not the page elements.
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

  // Set the initial state of the page to trigger the first render. The
  // `updateState` function will compare these values against the initial state
  // of the page, which is all nulls. It will detect that the count changed, and
  // will return a `changed` dictionary with `count: true`, so the `render`
  // function will know to update the counter.
  setState({
    count: 0,
  });
});

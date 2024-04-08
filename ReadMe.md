This project shows a minimalist state engine for responding to user events and other changes in state. For simple applications, this can provide most of the benefit of a complex reactive framework (e.g., React) in a tiny fraction of the conceptual and programmatic overhead.

The page state is represented as a plain JavaScript object that is updated via a `setState` call. `setState`
is a function created for you. You generate it by giving it a reference to your state object and a render function:

```js
let state = {};
const setState = updateState(state, render);
```

You can call `setState` to populate the initial state:

```js
setState({ count: 0 });
```

The `render` function will be given a `changed` dictionary indicating which state members have changed. Since only `count` has changed, `changed.count` will be `true`. This lets `render` know what DOM elements need to be updated:

```js
function render(changed) {
  if (changed.count) {
    // The count changed; update the visible counters.
    counter.textContent = state.count;
  }
}
```

You can call `setState` in event handlers to reflect changes in state:

```js
buttonIncrement.addEventListener("click", () => {
  setState({ count: state.count + 1 });
});
```

This project shows a minimalist state engine for responding to user events and other changes in state. For simple applications, this can provide most of the benefit of a complex reactive framework (e.g., React) in a tiny fraction of the conceptual and programmatic overhead.

The page state is represented as a plain JavaScript object like so:

```js
let state = {
  count: 0,
  message: "Hello, world.",
};
```

You can call updateState with the old state and desired changes to get back the new state and a dictionary of flags indicating what changed:

```js
const changes = { count: 1 };
const { newState, changed } = updateState(state, changes);
```

Here, `changed` is `{ count: true }` and `newState` is:

```js
{
  count: 1,
  message: "Hello, world."
}
```

After updating the state, you can use the `changed` dictionary to determine what to update directly on the page.

```js
if (changed.count) {
  counter.textContent = count;
}
```

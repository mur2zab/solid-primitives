# @solid-primitives/mouse

## 2.0.2

### Patch Changes

- 7ac41ed: Update to solid-js version 1.5
- Updated dependencies [7ac41ed]
  - @solid-primitives/event-listener@2.2.2
  - @solid-primitives/rootless@1.1.3
  - @solid-primitives/utils@3.0.2

## 2.0.1

### Patch Changes

- e7870cb: Update deps.

## Changelog up to version 2.0.0

1.0.0

Release as a Stage-2 primitive.

1.0.1

Updated util and event-listener dependencies.

1.0.2

Upgraded to Solid 1.3

2.0.0 - **stage-3**

[PR#113](https://github.com/solidjs-community/solid-primitives/pull/113)

Removed `createMouseInElement`, `createMouseOnScreen`

Renamed:

- `posRelativeToElement` -> `getPositionToElement`
- `posRelativeToScreen` -> `getPositionToScreen`
- `createMouseToElement` -> `createPositionToElement`

Added `makeMousePositionListener`, `makeMouseInsideListener` and `getPositionInElement`

Removed clear() and update() functions from reactive primitives. `createPositionToElement` now only takes accessor position.

# @solid-primitives/set

## 0.2.2

### Patch Changes

- 7ac41ed: Update to solid-js version 1.5
- Updated dependencies [7ac41ed]
  - @solid-primitives/utils@3.0.2

## 0.2.1

### Patch Changes

- Updated dependencies [73b6a34]
  - @solid-primitives/utils@3.0.0

## Changelog up to version 0.2.0

0.0.100

Initial release of the package.

0.2.0

Deprecated `createSet` and `createWeakSet` functions, as they weren't providing any benefit over instanciating with the `new` keyword.

`ReactiveSet` and `ReactiveWeakSet` now will respect `instanceof Set/WeakSet` checks.

Internal signals will be created only if read in a tracking scope.

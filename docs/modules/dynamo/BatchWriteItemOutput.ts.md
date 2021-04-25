---
title: dynamo/BatchWriteItemOutput.ts
nav_order: 1
parent: Modules
---

## BatchWriteItemOutput overview

Added in v0.0.7

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Monoid](#monoid)
  - [SafeBatchWriteItemOutput (type alias)](#safebatchwriteitemoutput-type-alias)
  - [lift](#lift)
  - [unprocessedItems](#unprocesseditems)

---

# utils

## Monoid

**Signature**

```ts
export declare const Monoid: M.Monoid<SafeBatchWriteItemOutput>
```

Added in v0.0.7

## SafeBatchWriteItemOutput (type alias)

**Signature**

```ts
export type SafeBatchWriteItemOutput = {
  // Needs to support Partial properties
  // [K in keyof BatchWriteItemOutput]: O.Option<NonNullable<BatchWriteItemOutput[K]>>
  UnprocessedItems: O.Option<{ [tableName: string]: WriteRequest[] }>
  ItemCollectionMetrics: O.Option<{
    [tableName: string]: ItemCollectionMetrics[]
  }>
  ConsumedCapacity: O.Option<ConsumedCapacity[]>
}
```

Added in v0.0.7

## lift

**Signature**

```ts
export declare const lift: (a: BatchWriteItemOutput) => SafeBatchWriteItemOutput
```

Added in v0.0.7

## unprocessedItems

Lens to access all `UnprocessedItems` in a `SafeBatchWriteItemOutput`.

Note: This currently collapses all table's unprocessed items into a
single list. It would be great to permit focusing on a single
table's unprocessed items. PRs welcome!

**Signature**

```ts
export declare const unprocessedItems: Traversal<SafeBatchWriteItemOutput, WriteRequest>
```

Added in v0.0.9

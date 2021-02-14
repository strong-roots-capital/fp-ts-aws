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
  UnprocessedItems: O.Option<{ [key: string]: WriteRequest[] }>
  ItemCollectionMetrics: O.Option<{ [key: string]: ItemCollectionMetrics[] }>
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

---
title: sqs/BatchResultErrorEntry.ts
nav_order: 4
parent: Modules
---

## BatchResultErrorEntry overview

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Eq](#eq)
  - [SafeBatchResultErrorEntry (type alias)](#safebatchresulterrorentry-type-alias)
  - [lift](#lift)

---

# utils

## Eq

**Signature**

```ts
export declare const Eq: E.Eq<SafeBatchResultErrorEntry>
```

Added in v0.0.1

## SafeBatchResultErrorEntry (type alias)

**Signature**

```ts
export type SafeBatchResultErrorEntry = {
  // Needs to support Partial properties
  // [K in keyof BatchResultErrorEntry]: O.Option<NonNullable<BatchResultErrorEntry[K]>>
  Id: O.Option<string>
  SenderFault: O.Option<boolean>
  Code: O.Option<string>
  Message: O.Option<string>
}
```

Added in v0.0.1

## lift

**Signature**

```ts
export declare const lift: (a: BatchResultErrorEntry) => SafeBatchResultErrorEntry
```

Added in v0.0.1

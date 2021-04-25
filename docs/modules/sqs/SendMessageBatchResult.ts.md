---
title: sqs/SendMessageBatchResult.ts
nav_order: 6
parent: Modules
---

## SendMessageBatchResult overview

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Monoid](#monoid)
  - [SafeSendMessageBatchCommandOutput (type alias)](#safesendmessagebatchcommandoutput-type-alias)
  - [failed](#failed)
  - [lift](#lift)
  - [successful](#successful)

---

# utils

## Monoid

The free monoid for `SendMessageBatchResult`.

**Signature**

```ts
export declare const Monoid: M.Monoid<SafeSendMessageBatchCommandOutput>
```

Added in v0.0.1

## SafeSendMessageBatchCommandOutput (type alias)

**Signature**

```ts
export type SafeSendMessageBatchCommandOutput = {
  [K in keyof SendMessageBatchResult]: O.Option<NonNullable<SendMessageBatchResult[K]>>
}
```

Added in v0.0.1

## failed

Lens to access `Failed` elements in a `SafeSendMessageBatchCommandOutput`.

**Signature**

```ts
export declare const failed: Traversal<SafeSendMessageBatchCommandOutput, BatchResultErrorEntry>
```

Added in v0.0.8

## lift

Lift optional values in `SendMessageBatchResult` into an `Option`.

**Signature**

```ts
export declare const lift: (a: SendMessageBatchCommandOutput) => SafeSendMessageBatchCommandOutput
```

Added in v0.0.1

## successful

Lens to access `Successful` elements in a `SafeSendMessageBatchCommandOutput`.

**Signature**

```ts
export declare const successful: Traversal<SafeSendMessageBatchCommandOutput, SendMessageBatchResultEntry>
```

Added in v0.0.8

---
title: sqs/SendMessageBatchResult.ts
nav_order: 2
parent: Modules
---

## SendMessageBatchResult overview

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Monoid](#monoid)
  - [SafeSendMessageBatchCommandOutput (type alias)](#safesendmessagebatchcommandoutput-type-alias)
  - [lift](#lift)

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

## lift

Lift optional values in `SendMessageBatchResult` into an `Option`.

**Signature**

```ts
export declare const lift: (a: SendMessageBatchCommandOutput) => SafeSendMessageBatchCommandOutput
```

Added in v0.0.1

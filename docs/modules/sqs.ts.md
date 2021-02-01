---
title: sqs.ts
nav_order: 1
parent: Modules
---

## sqs overview

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [SafeSendMessageBatchCommandOutput (type alias)](#safesendmessagebatchcommandoutput-type-alias)
  - [liftSendMessageBatchCommandOutput](#liftsendmessagebatchcommandoutput)
  - [monoidSendMessageBatchCommandOutput](#monoidsendmessagebatchcommandoutput)

---

# utils

## SafeSendMessageBatchCommandOutput (type alias)

**Signature**

```ts
export type SafeSendMessageBatchCommandOutput = {
  [K in keyof SendMessageBatchResult]: O.Option<NonNullable<SendMessageBatchResult[K]>>
}
```

Added in v0.0.1

## liftSendMessageBatchCommandOutput

**Signature**

```ts
export declare const liftSendMessageBatchCommandOutput: (
  a: SendMessageBatchCommandOutput
) => SafeSendMessageBatchCommandOutput
```

Added in v0.0.1

## monoidSendMessageBatchCommandOutput

**Signature**

```ts
export declare const monoidSendMessageBatchCommandOutput: Monoid<SafeSendMessageBatchCommandOutput>
```

Added in v0.0.1

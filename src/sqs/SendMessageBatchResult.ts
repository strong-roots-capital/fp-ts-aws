/**
 * @since 0.0.1
 */

import * as A from 'fp-ts/Array'
import * as O from 'fp-ts/Option'
import { Monoid, getStructMonoid } from 'fp-ts/Monoid'
import {
    SendMessageBatchCommandOutput,
    SendMessageBatchResultEntry,
    BatchResultErrorEntry,
    SendMessageBatchResult,
} from '@aws-sdk/client-sqs'

/**
 * @since 0.0.1
 */
export type SafeSendMessageBatchCommandOutput = {
    [K in keyof SendMessageBatchResult]: O.Option<
        NonNullable<SendMessageBatchResult[K]>
    >
}

/**
 * Lift optional values in `SendMessageBatchResult` into an `Option`.
 *
 * @since 0.0.1
 */
export const lift = (
    a: SendMessageBatchCommandOutput
): SafeSendMessageBatchCommandOutput => ({
    Successful: O.fromNullable(a.Successful),
    Failed: O.fromNullable(a.Failed),
})

/**
 * The free monoid for `SendMessageBatchResult`.
 *
 * @since 0.0.1
 */
export const Monoid: Monoid<SafeSendMessageBatchCommandOutput> = getStructMonoid(
    {
        Successful: O.getMonoid(A.getMonoid<SendMessageBatchResultEntry>()),
        Failed: O.getMonoid(A.getMonoid<BatchResultErrorEntry>()),
    }
)

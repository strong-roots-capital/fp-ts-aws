/**
 * @since 0.0.1
 */

import * as A from 'fp-ts/Array'
import * as O from 'fp-ts/Option'
import * as M from 'fp-ts/Monoid'
import { Optional, fromTraversable } from 'monocle-ts'
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
export const Monoid: M.Monoid<SafeSendMessageBatchCommandOutput> = M.getStructMonoid(
    {
        Successful: O.getMonoid(A.getMonoid<SendMessageBatchResultEntry>()),
        Failed: O.getMonoid(A.getMonoid<BatchResultErrorEntry>()),
    }
)

const failedOptional = Optional.fromOptionProp<SafeSendMessageBatchCommandOutput>()(
    'Failed'
)

const failedTraversal = fromTraversable(A.Traversable)<BatchResultErrorEntry>()

/**
 * Lens to access `Failed` elements in a `SafeSendMessageBatchCommandOutput`.
 *
 * @since 0.0.8
 */
export const failed = failedOptional.composeTraversal(failedTraversal)

const successfulOptional = Optional.fromOptionProp<SafeSendMessageBatchCommandOutput>()(
    'Successful'
)

const successfulTraversal = fromTraversable(
    A.Traversable
)<SendMessageBatchResultEntry>()

/**
 * Lens to access `Successful` elements in a `SafeSendMessageBatchCommandOutput`.
 *
 * @since 0.0.8
 */
export const successful = successfulOptional.composeTraversal(
    successfulTraversal
)

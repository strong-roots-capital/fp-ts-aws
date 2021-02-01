/**
 * @since 0.0.1
 */

import * as E from 'fp-ts/Eq'
import * as O from 'fp-ts/Option'
import { BatchResultErrorEntry } from '@aws-sdk/client-sqs'

/**
 * @since 0.0.1
 */
export type SafeBatchResultErrorEntry = {
    // Needs to support Partial properties
    // [K in keyof BatchResultErrorEntry]: O.Option<NonNullable<BatchResultErrorEntry[K]>>
    Id: O.Option<string>,
    SenderFault: O.Option<boolean>,
    Code: O.Option<string>,
    Message: O.Option<string>,
}

/**
 * @since 0.0.1
 */
export const lift = (a: BatchResultErrorEntry): SafeBatchResultErrorEntry => ({
    Id: O.fromNullable(a.Id),
    SenderFault: O.fromNullable(a.SenderFault),
    Code: O.fromNullable(a.Code),
    Message: O.fromNullable(a.Message),
})

/**
 * @since 0.0.1
 */
export const Eq: E.Eq<SafeBatchResultErrorEntry> = E.getStructEq({
    Id: O.getEq(E.eqString),
    SenderFault: O.getEq(E.eqBoolean),
    Code: O.getEq(E.eqString),
    Message: O.getEq(E.eqString),
})

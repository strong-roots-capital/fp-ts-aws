/**
 * @since 0.0.7
 */

import * as A from 'fp-ts/Array'
import * as O from 'fp-ts/Option'
import * as M from 'fp-ts/Monoid'
import * as R from 'fp-ts/Record'
import { Optional, fromTraversable } from 'monocle-ts'
import {
    BatchWriteItemOutput,
    WriteRequest,
    ItemCollectionMetrics,
    ConsumedCapacity,
} from '@aws-sdk/client-dynamodb'

/**
 * @since 0.0.7
 */
export type SafeBatchWriteItemOutput = {
    // Needs to support Partial properties
    // [K in keyof BatchWriteItemOutput]: O.Option<NonNullable<BatchWriteItemOutput[K]>>
    UnprocessedItems: O.Option<{ [tableName: string]: WriteRequest[] }>
    ItemCollectionMetrics: O.Option<{
        [tableName: string]: ItemCollectionMetrics[]
    }>
    ConsumedCapacity: O.Option<ConsumedCapacity[]>
}

/**
 * @since 0.0.7
 */
export const lift = (a: BatchWriteItemOutput): SafeBatchWriteItemOutput => ({
    UnprocessedItems: O.fromNullable(a.UnprocessedItems),
    ItemCollectionMetrics: O.fromNullable(a.ItemCollectionMetrics),
    ConsumedCapacity: O.fromNullable(a.ConsumedCapacity),
})

/**
 * @since 0.0.7
 */
export const Monoid: M.Monoid<SafeBatchWriteItemOutput> = M.getStructMonoid({
    UnprocessedItems: O.getMonoid(
        R.getMonoid<string, WriteRequest[]>(A.getMonoid<WriteRequest>())
    ),
    ItemCollectionMetrics: O.getMonoid(
        R.getMonoid<string, ItemCollectionMetrics[]>(
            A.getMonoid<ItemCollectionMetrics>()
        )
    ),
    ConsumedCapacity: O.getMonoid(A.getMonoid<ConsumedCapacity>()),
})

const unprocessedItemsOptional = Optional.fromOptionProp<SafeBatchWriteItemOutput>()(
    'UnprocessedItems'
)

const unprocessedItemsTraversal = fromTraversable(R.Traversable)<
    WriteRequest[]
>()

const unprocessedItemsTraversalPerTable = fromTraversable(
    A.Traversable
)<WriteRequest>()

// TODO: permit focusing on a single table's unprocessed items,
/**
 * Lens to access all `UnprocessedItems` in a `SafeBatchWriteItemOutput`.
 *
 * Note: This currently collapses all table's unprocessed items into a
 * single list. It would be great to permit focusing on a single
 * table's unprocessed items. PRs welcome!
 *
 * @since 0.0.9
 */
export const unprocessedItems = unprocessedItemsOptional
    .composeTraversal(unprocessedItemsTraversal)
    .composeTraversal(unprocessedItemsTraversalPerTable)

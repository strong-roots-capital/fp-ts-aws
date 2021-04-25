import { lift, unprocessedItems } from '../../src/dynamo/BatchWriteItemOutput'

import { pipe } from 'fp-ts/function'
import { getAll } from 'monocle-ts/Traversal'
pipe(
    {
        "ConsumedCapacity": [
            {
                "CapacityUnits": 1,
                "GlobalSecondaryIndexes": {
                    "string": {
                        "CapacityUnits": 1,
                        "ReadCapacityUnits": 1,
                        "WriteCapacityUnits": 1
                    }
                },
                "LocalSecondaryIndexes": {
                    "string": {
                        "CapacityUnits": 1,
                        "ReadCapacityUnits": 1,
                        "WriteCapacityUnits": 1
                    }
                },
                "ReadCapacityUnits": 1,
                "Table": {
                    "CapacityUnits": 1,
                    "ReadCapacityUnits": 1,
                    "WriteCapacityUnits": 1
                },
                "TableName": "string",
                "WriteCapacityUnits": 1
            }
        ],
        "ItemCollectionMetrics": {
            "string": [
                {
                    "SizeEstimateRangeGB": [1]
                }
            ]
        },
        "UnprocessedItems": {
            "table1": [
                {
                    "DeleteRequest": {
                        "Key": {
                        }
                    },
                    "PutRequest": {
                        "Item": {
                        }
                    }
                }
            ],
            // FIXME: have to keep the different tables separate
            "table2": [
                {
                    "DeleteRequest": {
                        "Key": {
                        }
                    },
                    "PutRequest": {
                        "Item": {
                        }
                    }
                }
            ]
        }
    },
    lift,
    a => getAll(a)(unprocessedItems),
    // a => getAll(a)(key('table1')(unprocessedItems)),
    // a => unprocessedItems.getOption(a),
    a => console.log(JSON.stringify(a, null, 2))
)

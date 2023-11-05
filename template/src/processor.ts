import { EvmBatchProcessor } from '@subsquid/evm-processor';
import { lookupArchive } from '@subsquid/archive-registry';

export const processor = new EvmBatchProcessor()
    .setDataSource({
        archive: lookupArchive('eth-mainnet'),
        chain: 'https://my.eth-mainnet.rpc',
    })
    .setFinalityConfirmation(10)
    .setFields({
        id: true,
        owner: true,
        displayName: true,
        imageUrl: true
    })
    .addLog({
        address: ['0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB']
    });

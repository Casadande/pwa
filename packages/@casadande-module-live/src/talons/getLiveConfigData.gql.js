import { gql } from '@apollo/client';

export const GET_LIVE_CONFIG_DATA = gql`
    query storeConfigData {
        storeConfig {
            store_code
            casadande_live_is_streaming
            casadande_live_enable_custom_frontend_title
            casadande_live_frontend_title
        }
    }
`;

export default {
    liveConfigs: {
        getLiveConfigDataQuery: GET_LIVE_CONFIG_DATA
    }
};
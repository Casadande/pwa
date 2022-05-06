import { useMemo } from 'react';
import { useQuery } from '@apollo/client';
import OPERATIONS from './getLiveConfigData.gql';

export const getLiveConfigData = props => {
    const { liveConfigs } = OPERATIONS;
    const { getLiveConfigDataQuery } = liveConfigs;
    const { data } = useQuery(getLiveConfigDataQuery);

    const isStreaming = useMemo(() => {
        if (data &&
            data.storeConfig &&
            data.storeConfig.casadande_live_is_streaming) {
            return data.storeConfig.casadande_live_is_streaming;
        }
    }, [data]);

    const isCustomTitleEnabled = useMemo(() => {
        if (data &&
            data.storeConfig &&
            data.storeConfig.casadande_live_enable_custom_frontend_title) {
            return data.storeConfig.casadande_live_enable_custom_frontend_title;
        }
    }, [data]);

    const frontendCustomTitle = useMemo(() => {
        if (data &&
            data.storeConfig &&
            data.storeConfig.casadande_live_frontend_title) {
            return data.storeConfig.casadande_live_frontend_title;
        }
    }, [data]);

    return {
        isStreaming,
        isCustomTitleEnabled,
        frontendCustomTitle
    };
};
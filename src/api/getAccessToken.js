import axios from 'axios';

import config from './config';

let abortController = null;

export const getAccessToken = async () => {
  if (abortController) abortController.abort();

  abortController = new AbortController();

  try {
    const { data } = await axios.post(
      `${config.accessTokenURL}/api/v3/clients/accesstoken`,
      {
        idClient: config.clientID,
        accessToken: '',
        paramName: 'device',
        paramValue: config.deviceID,
        latitude: 0,
        longitude: 0,
        sourceQuery: 0,
      },
      {
        headers: {
          AccessKey: config.accessKey,
        },
        signal: abortController.signal,
      }
    );

    if (data.result.status !== 0) {
      throw new Error(data.resultOperation.message);
    }

    return data.accessToken;
  } catch (error) {
    throw new Error(error);
  }
};

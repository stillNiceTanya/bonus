import axios from 'axios';

import config from './config';

let abortController = null;

export const getBonusesData = async (accessToken) => {
  if (abortController) abortController.abort();

  abortController = new AbortController();

  try {
    if (!accessToken) return;

    const { data } = await axios.get(
      `${config.baseURL}/api/v3/ibonus/generalinfo/${accessToken}`,
      {
        headers: {
          AccessKey: config.accessKey,
        },
        signal: abortController.signal,
      }
    );

    if (data.resultOperation.status !== 0) {
      throw new Error(data.resultOperation.message);
    }

    return data.data;
  } catch (error) {
    throw new Error(error);
  }
};

/* eslint-disable no-unused-vars */
import newFaultyFunction from '../services/dummy/_warmup/index';

newFaultyFunction();

export const hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };
};

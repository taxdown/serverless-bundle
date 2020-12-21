/* eslint-disable no-unused-vars */
import formidable from 'formidable';

export const hello = (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };
};

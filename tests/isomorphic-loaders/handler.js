/* eslint-disable no-unused-vars */

import './assets/style.css';
import './assets/style.scss';
import './assets/react.png';

export const hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };
};

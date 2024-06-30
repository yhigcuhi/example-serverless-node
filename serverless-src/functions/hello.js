// lambda処理
export const hello = async (event, context) => {
    // .envを読み込みの確認
    const APP_ENV = process.env.APP_ENV;

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Test Serverless on ${APP_ENV}! ${(await message({ time: 1, copy: 'Your function executed successfully!'}))}`,
      }),
    };
};

const message = ({ time, ...rest }) => new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve(`${rest.copy} (with a delay)`);
  }, time * 1000)
);
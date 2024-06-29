// エンドポイント処理
module.exports.handler = async (_event) => {
  console.log(_event)

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "hello world",
    }),
  };
};


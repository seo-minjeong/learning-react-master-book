import React from "react";

// 콜백 함수 테스트
function increase1(number, callback) {
  setTimeout(() => {
    const result = number + 10;
    if (callback) {
      callback(result);
    }
  }, 1000);
}

increase1(0, (result) => {
  console.log(result);
});

// promise 테스트

function increase2(number) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resove는 성공하고 reject는 실패
      const result = number + 10;
      if (result > 50) {
        const e = new Error("NumberTooBig");
        return reject(e);
      }
      resolve(result);
    }, 1000);
  });
  return promise;
}

increase2(0).then((number) => {
  console.log(number);
  return increase2(number);
});

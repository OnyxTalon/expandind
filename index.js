function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 示例用法
const randomNumber = generateRandomNumber(1, 100);
console.log("随机数:", randomNumber);

function getCurrentDateTime() {
  return new Date().toISOString();
}

// 示例用法
const currentDateTime = getCurrentDateTime();
console.log("当前日期时间:", currentDateTime);

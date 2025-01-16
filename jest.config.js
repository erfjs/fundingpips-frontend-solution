// jest.config.js
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom", // برای تست در محیط مرورگر
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // پردازش فایل‌های TypeScript
    "^.+\\.(js|jsx)$": "babel-jest", // پردازش فایل‌های جاوااسکریپت
  },
};

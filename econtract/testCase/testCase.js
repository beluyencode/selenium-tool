const fs = require('fs');
const path = require('path');

// Đường dẫn tới thư mục hiện tại
const currentDir = __dirname;

// Đọc danh sách các tệp trong thư mục hiện tại
const files = fs.readdirSync(currentDir);

// Đối tượng để chứa các module được xuất
const modules = {};

// Lọc và xuất các tệp .js (trừ chính tệp này)
files.forEach(file => {
  if (file !== 'testCase.js' && path.extname(file) === '.js') {
    const moduleName = path.basename(file, '.js');
    modules[moduleName] = require(path.join(currentDir, file));
  }
});

module.exports = modules;
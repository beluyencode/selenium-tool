const fs = require('fs');

// Kiểm tra xem file JSON có tồn tại không
if (!fs.existsSync('config.json')) {
    console.error('Config file not found:', 'config.json');
}

try {
    // Đọc nội dung file JSON
    const configContent = fs.readFileSync('config.json', 'utf-8');
    const config = JSON.parse(configContent);
    module.exports = config;
} catch (error) {
    console.error('Error reading or parsing config file:', error);
}
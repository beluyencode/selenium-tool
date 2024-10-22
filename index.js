const run = require('./econtract/run');
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

// Đường dẫn tuyệt đối tới chromedriver.exe
const chromedriverPath = path.resolve(__dirname, './chromedriver-win64/chromedriver.exe');

// Kiểm tra xem chromedriver.exe có tồn tại không
if (!fs.existsSync(chromedriverPath)) {
    console.error('chromedriver.exe not found at path:', chromedriverPath);
    process.exit(1);
}

// Chạy file .exe song song
const exeProcess = spawn(chromedriverPath, [], {
    detached: true,
    stdio: 'ignore'
});

exeProcess.on('error', (err) => {
    console.error('Failed to start chromedriver:', err);
    process.exit(1);
});

exeProcess.unref();

run().then(() => {
    console.log('Run completed successfully');
    process.exit(0);
});
const express = require('express');
const path = require('path');
const app = express();

// Cesium Static Resource Path 설정
app.use(express.static(path.join(__dirname, 'node_modules/cesium/Build/Cesium')));

// HTML 파일 제공
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 서버 시작
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
cd



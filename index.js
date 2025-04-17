const express = require('express');
const basicAuth = require('express-basic-auth');
const app = express();

// بيانات تحكم السكربتات (يمكن تعديلها لاحقاً)
const config = {
  otp: "7532",
  enabled: true,
  scanSpeed: "ultrafast",
  liveness_check: true,
  target_email: "example@email.com"
};

// حماية الوصول باسم وكلمة مرور
app.use(basicAuth({
    users: { 'Mouad': 'Mouad2006' },
    challenge: true,
}));

// نقطة الوصول الرئيسية
app.get('/config', (req, res) => {
    res.json(config);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ MILANO Control Server running on port ${PORT}`));

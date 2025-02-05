export const contactTemplate = `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #f9f9f9;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    h2 {
      color: #007BFF;
    }
    .info {
      margin-bottom: 20px;
    }
    .info p {
      margin: 5px 0;
    }
    .message {
      background-color: #f1f1f1;
      padding: 15px;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Thông tin liên hệ</h2>
    <div class="info">
      <p><strong>Tên:</strong> {{name}}</p>
      <p><strong>Email:</strong> {{email}}</p>
      <p><strong>Số điện thoại:</strong> {{phone}}</p>
    </div>
    <div class="message">
      <p><strong>Tin nhắn:</strong></p>
      <p>{{message}}</p>
    </div>
  </div>
</body>
</html>
`;

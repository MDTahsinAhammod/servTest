const http = require('http');
const os = require('os');

const html = `
<!DOCTYPE html>
<html>
<head>
  <title>Simple Server</title>
</head>
<body>
  <h1>Welcome to the Simple Node.js Server!</h1>
  <p>Your visit is logged on the server.</p>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  // Get IP Address
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  // Get User-Agent
  const userAgent = req.headers['user-agent'];

  // Log client info
  console.log(`New Request:
  IP Address: ${ip}
  User-Agent: ${userAgent}
  `);

  // Serve HTML
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

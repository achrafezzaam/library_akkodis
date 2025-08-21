const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m'
};

const getStatusColor = (status) => {
  if (status >= 500) return colors.red;
  if (status >= 400) return colors.yellow;
  if (status >= 300) return colors.cyan;
  if (status >= 200) return colors.green;
  return colors.white;
};

const getMethodColor = (method) => {
  const methodColors = {
    GET: colors.green,
    POST: colors.blue,
    PUT: colors.yellow,
    DELETE: colors.red,
    PATCH: colors.magenta
  };
  return methodColors[method] || colors.white;
};

const logger = (req, res, next) => {
  const start = Date.now();
  
  console.log(
    `${colors.cyan}[${new Date().toISOString()}]${colors.reset} ` +
    `${getMethodColor(req.method)}${req.method}${colors.reset} ` +
    `${req.originalUrl}`
  );

  const originalEnd = res.end;
  res.end = function(...args) {
    const duration = Date.now() - start;
    const statusColor = getStatusColor(res.statusCode);
    
    console.log(
      `${colors.cyan}[${new Date().toISOString()}]${colors.reset} ` +
      `${getMethodColor(req.method)}${req.method}${colors.reset} ` +
      `${req.originalUrl} ` +
      `${statusColor}${res.statusCode}${colors.reset} ` +
      `${colors.white}${duration}ms${colors.reset}`
    );
    
    originalEnd.apply(this, args);
  };

  next();
};

module.exports = logger;
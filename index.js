const app = require('./dist/app.js').default;

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

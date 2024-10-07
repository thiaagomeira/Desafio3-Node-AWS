import mongoose from 'mongoose';

const MONGO_URI = 'mongodb://localhost:27017/your_database_name';

beforeAll(async () => {
  await mongoose.connect(MONGO_URI);
});

afterEach(async () => {
  await mongoose.connection.dropDatabase();
});

afterAll(async () => {
  await mongoose.connection.close();
});

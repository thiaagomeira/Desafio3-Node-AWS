import { registerUser, loginUser } from '../services/AuthService';

describe('AuthService', () => {
  describe('registerUser', () => {
    it('should create a new user', async () => {
      const user = await registerUser('testUser', 'testPassword', 'test@example.com');
      expect(user.username).toBe('testUser');
    });
  });

  describe('loginUser', () => {
    it('should return a token for valid credentials', async () => {
      const token = await loginUser('testUser', 'testPassword');
      expect(token).toBeDefined();
    });

    it('should throw error for invalid credentials', async () => {
      await expect(loginUser('invalidUser', 'invalidPassword')).rejects.toThrow('User not found');
    });
  });
});

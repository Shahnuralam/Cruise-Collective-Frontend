import axios from 'axios';

import request from '../request';

jest.mock('axios');

describe('Request Tests', () => {
  test('Request with Token', async () => {
    (axios as unknown as jest.Mock).mockImplementation(() => ({
        response: 'success',
    }));

    const mockToken = '12345';
    const response = await request({
      url: 'https://api.test.com/anything',
      method: 'GET',
      token: mockToken,
      error: {
        code: 'GENIUS_ERROR',
        message: 'Genius Error',
      },
    });

    expect(response).toEqual({
      
    });
    expect(axios.defaults.headers.common['Authorization']).toEqual(
      `Bearer ${mockToken}`,
    );
  });

  test('Request with Error', async () => {
    // Mock axios to return with 500 error
    (axios as unknown as jest.Mock).mockImplementation(() =>
      Promise.reject({
        response: 'failure',
      }),
    );

    try {
      await request({
        url: 'https://api.test.com/anything',
        method: 'GET',
        token: '12345',
        error: {
          code: 'TEST_ERROR',
          message: 'Test Error',
        },
      });
    } catch (e) {
      // expect(e.code).toEqual('TEST_ERROR');
      // expect(e.message).toEqual('Test Error');
    }
  });
});

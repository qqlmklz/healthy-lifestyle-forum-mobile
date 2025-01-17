import { API } from '@/shared/api';
import { render, waitFor } from '@testing-library/react-native';
import React from 'react';
import { ArticleList } from './index';

jest.mock('@/shared/api', () => ({
  API: {
    appBlock: {
      getAllArticles: jest.fn(),
    },
  },
}));

describe('Functional testing of ArticleList', () => {
  it('should display correct articles based on user interaction', async () => {
    const mockArticles = [
      {
        id: 1,
        title: 'Functional Test Article 1',
        subtitle: 'Functional Test Subtitle 1',
        photo: { source: 'https://example.com/func-image1.png', width: 150, height: 75 },
      },
    ];

    API.appBlock.getAllArticles.mockResolvedValueOnce({ data: mockArticles });

    const { getByText } = render(<ArticleList />);

    // Проверяем наличие заголовков
    await waitFor(() => {
      expect(getByText('Functional Test Article 1')).toBeTruthy();
      expect(getByText('Functional Test Subtitle 1')).toBeTruthy();
    });
  });
});

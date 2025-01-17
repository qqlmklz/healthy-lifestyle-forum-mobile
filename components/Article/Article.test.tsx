import { render } from '@testing-library/react-native';
import React from 'react';
import { Article } from './index';

describe('Article Component', () => {
  it('should render title, subtitle, and image correctly', () => {
    const mockProps = {
      title: 'Sample Title',
      subtitle: 'Sample Subtitle',
      photo: {
        source: 'https://example.com/image.png',
        width: 100,
        height: 50,
      },
    };

    const { getByText, getByTestId } = render(<Article {...mockProps} />);

    // Проверяем рендеринг заголовка
    expect(getByText('Sample Title')).toBeTruthy();
    // Проверяем рендеринг подзаголовка
    expect(getByText('Sample Subtitle')).toBeTruthy();
    // Проверяем рендеринг изображения
    const image = getByTestId('article-image');
    expect(image.props.source.uri).toBe('https://example.com/image.png');
    expect(image.props.style.width).toBe(100);
    expect(image.props.style.height).toBe(50);
  });

  it('should use default image when source is invalid', () => {
    const mockProps = {
      title: 'Default Image Test',
      subtitle: 'Subtitle Test',
      photo: {
        source: 'invalid_source',
        width: 150,
        height: 75,
      },
    };

    const { getByTestId } = render(<Article {...mockProps} />);
    const image = getByTestId('article-image');
    expect(image.props.source).toEqual(require('@/assets/images/example.png'));
  });
});

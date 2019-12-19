import { renderHook } from '@testing-library/react-hooks';

import useFormFields from 'shared/hooks/useFormFields';
import { act } from 'react-test-renderer';

describe('useFormFields hook', () => {
  const formFields = { unicorn: '', rainbow: '' };

  test('should instantiate with some given state', () => {
    const { result } = renderHook(() => useFormFields(formFields));

    expect(result.current.fields).toBe(formFields);
  });

  test('should provide some mechanism for changing state', () => {
    const { result } = renderHook(() => useFormFields(formFields));

    expect(typeof result.current.handleFieldChange).toBe('function');
  });

  test('should update internal form field state', () => {
    const { result } = renderHook(() => useFormFields(formFields));
    const event = { target: { id: 'unicorn', value: '🦄' } };

    act(() => result.current.handleFieldChange(event));

    expect(result.current.fields.unicorn).toBe(event.target.value);
  });
});

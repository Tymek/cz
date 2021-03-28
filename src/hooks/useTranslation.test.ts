import { renderHook, act } from '@testing-library/react-hooks'
import useTranslation from './useTranslation'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('useTranslation', () => {
  it('Returns default value by key', () => {
    useRouter.mockImplementationOnce(() => ({
      locale: 'en-US',
    }))
    const { result } = renderHook(() =>
      useTranslation({
        hello: 'world',
      }),
    )

    act(() => {
      const output = result.current('hello')
      expect(output).toBe('world')
    })
  })

  it('Returns translated key if it exists', () => {
    useRouter.mockImplementationOnce(() => ({
      locale: 'pl',
    }))
    const { result } = renderHook(() =>
      useTranslation(
        {
          hello: 'world',
          lorem: 'ipsum',
        },
        { pl: { world: 'świecie' } },
      ),
    )

    act(() => {
      expect(result.current('hello')).toBe('świecie')
      expect(result.current('lorem')).toBe('ipsum')
    })
  })
})

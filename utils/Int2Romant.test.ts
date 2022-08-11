import { RomanConverter } from "./Int2Romant"

describe('Home', () => {
  it('convert to roman successfully', () => {

    const convertedToRoman = RomanConverter.convertToRoman(12);

    expect(convertedToRoman).toBe("XII")
  })

  it('check conversion with faulty value', () => {

    const convertedToRoman = RomanConverter.convertToRoman(11);

    expect(convertedToRoman).not.toBe("I")
  })
})

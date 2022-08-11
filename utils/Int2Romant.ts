class RomanConverter {

  protected static NUMERALS = [
    ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'], // 1-9
    ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'], // 10-90
    ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'], // 100-900
    ['M', 'MM', 'MMM'], // 1000-3000
  ];

  static convertToRoman(original: number): string {
    if (original < 1 || original >= 1000) {

      throw new Error('Error: Input integer limited to 1 through 1000');
      
      
    }

    // TODO: Could expand to support fractions, simply rounding for now
    const digits = Math.round(original).toString().split('');
  
    let position = (digits.length - 1);
  
    return digits.reduce((roman, digit) => {
  
      if (digit !== '0') {
  
        roman += this.NUMERALS[position][parseInt(digit) - 1];
  
      }
  
      position -= 1;
  
      return roman;
  
    }, '');
  }
}

export {
  RomanConverter
}
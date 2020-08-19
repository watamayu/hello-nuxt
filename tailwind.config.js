/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        default: '-apple-system,BlinkMacSystemFont,"Segoe UI","Hiragino Sans","Hiragino Kaku Gothic ProN",Meiryo,sans-serif',
      },
      // 余白
      spacing: {
        2: '2px',
        4: '4px',
        8: '8px',
        10: '10px',
        12: '12px',
        16: '16px',
        14: '14px',
        20: '20px',
        24: '24px',
        36: '36px',
      },
      // 色
      colors: {
        base: '#333333',
        accent: '#FD306A',
        'bg-gray': '#EFEFEF',
        'bg-light-blue': '#47AFFF',
        'border-horizontalrule': '#D8D8D8',
        'border-light-gray': '#D4D4D4',
        'no-under-eighteen': '#747474',

        'button-base': '#E0E0E0',
      },
      // サイズ
      width: {
        'wrapper-common': '1100px',
      },
      height: {
      },
      fontSize: {
        fz10: '10px',
        fz11: '11px',
        fz12: '12px',
        fz13: '13px',
        fz14: '14px',
        fz16: '16px',
        fz18: '18px',
        fz20: '20px',
      },
      lineHeight: {
        lh12: '12px',
        lh14: '14px',
        lh16: '16px',
        lh17: '17px',
        lh18: '18px',
        lh20: '20px',
        lh25: '25px',
      },
      borderWidth: {
        1: '1px',
      },
      borderRadius: {
        'pills': '35px',
        'rounded': '6px',
      },
      inset: {
        '1/2': '50%',
      },
    },
  },
  variants: {},
  plugins: [],
}

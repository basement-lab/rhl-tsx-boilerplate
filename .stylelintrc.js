
module.exports = ({
  syntax: 'scss',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-styled-components'
  ],
  plugins: [
    'stylelint-selector-no-utility'
  ],
  processors: [
    'stylelint-processor-styled-components'
  ],
  rules: {
    'color-hex-case': 'lower',
  }
});
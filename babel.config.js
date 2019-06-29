module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow'],
  plugins: [
    'syntax-jsx',
    'transform-react-jsx',
    '@babel/transform-regenerator'
  ]
}

import path from 'path'
import uglify from 'rollup-plugin-uglify'

export default {
    input: path.resolve(__dirname, './src/main.js'),
    output: {
      file: path.resolve(__dirname, './dist/index.js'),
      format: 'cjs'
    },
    plugins: [
      uglify()
    ]
};
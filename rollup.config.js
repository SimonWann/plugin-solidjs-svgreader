import test from './plugin-solidjs-svgreader'

export default {
  input: 'main.js',
  output: {
    file: 'dist/bundle.js',
  },
  plugins: [test()]
}
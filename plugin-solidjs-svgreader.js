export default function svgReader() {
  return {
    name: 'plugin-solidjs-svgreader',
    transform(code, id) {
      if(/\.svg$/.test(id)) {
        const componentName = id?.split('/')?.pop().replace(/\.svg$/, '') ?? 'Default'
        return {
          code: `
          export default \`${code}\`;
            `,
          map: {
            mappings: ''
            }
          }
        }
    }
  }
}
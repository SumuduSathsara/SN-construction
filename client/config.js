import { defineConfig } from 'ract';



export default defineConfig({
  server: {
    proxy: {
      '/sever': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
  },
 
});
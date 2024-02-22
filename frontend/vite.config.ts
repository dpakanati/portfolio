import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  css:{
    modules:{
      localsConvention: 'dashesOnly'
    },
  },
  plugins: [react()],
  base:'/portfolio',
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/ReactTodo/', // Replace with your actual GitHub repository name
  plugins: [react()],
})
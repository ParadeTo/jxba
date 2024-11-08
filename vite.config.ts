import {ConfigEnv, defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import createExternal from 'vite-plugin-external'

// https://vite.dev/config/
export default defineConfig((env: ConfigEnv) => {
  return {
    plugins: [
      react(),
      env.command === 'build' &&
        createExternal({
          externals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            'react-router-dom': 'ReactRouterDOM',
          },
        }),
    ],
  }
})

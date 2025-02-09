// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // export default defineConfig({
// //   plugins: [react()],
// // });

// export default defineConfig({
//   server: {
//     mimeTypes: {
//       'application/javascript': ['js', 'jsx']
//     }
//   }
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
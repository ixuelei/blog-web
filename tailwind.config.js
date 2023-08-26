/*
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2023-06-17 09:24:19
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-08-26 10:01:19
 * @Description:
 */
/** @type {import('tailwindcss').Config} */
export const theme = {
  screens: {
    sm: '640px',
    // => @media (min-width: 640px) { ... }
    md: '768px',
    // => @media (min-width: 768px) { ... }
    lg: '1024px',
    // => @media (min-width: 1024px) { ... }
    xl: '1280px',
    // => @media (min-width: 1280px) { ... }
    '2xl': '1536px'
    // => @media (min-width: 1536px) { ... }
  },

  extend: {
    colors: {
      primary: 'rgb(var(--color-primary) / 100)',
      secondary: 'rgb(var(--color-secondary) / 100)',
      accent: 'rgb(var(--color-accent) / 100)',
      neutral: 'rgb(var(--color-neutral) / 100)',
      info: 'rgb(var(--color-info) / 100)',
      success: 'rgb(var(--color-success) / 100)',
      warning: 'rgb(var(--color-warning) / 100)',
      error: 'rgb(var(--color-error) / 100)',
    },
  },
};
export const content = [
  "./components/**/*.{js,vue,ts}",
  "./layouts/**/*.vue",
  "./pages/**/*.vue",
  "./plugins/**/*.{js,ts}",
  "./nuxt.config.{js,ts}",
];
export const plugins = [];

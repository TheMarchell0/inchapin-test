// Получаем имя папки проекта
import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());
const buildFolder = './dist';
const srcFolder = './src';

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    images: `${buildFolder}/images/`,
    fonts: `${buildFolder}/fonts/`,
    functions: `${buildFolder}/js/functions/`
  },
  src: {
    js: `${srcFolder}/js/main.js`,
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    scss: `${srcFolder}/styles/**/*.*`,
    html: `${srcFolder}/*.html`,
    svgicons: `${srcFolder}/img/svgicons/*.svg`,
    fonts: `${srcFolder}/fonts/**/*.*`,
    functions: `${srcFolder}/js/functions/**/*.*`
  },
  watch: {
    js: `${srcFolder}/js/**/*.js `,
    scss: `${srcFolder}/styles/**/*.*`,
    html: `${srcFolder}/**/*.html`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
    fonts: `${srcFolder}/fonts/**/*.*`,
    functions: `${srcFolder}/js/functions/**/*.*`
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
};

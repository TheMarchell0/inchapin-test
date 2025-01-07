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
    videos: `${buildFolder}/videos/`
  },
  src: {
    js: `${srcFolder}/js/**/*.js`,
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/images/**/*.svg`,
    scss: `${srcFolder}/styles/**/*.{scss,css}`,
    components: `${srcFolder}/components/**/*.*`,
    html: `${srcFolder}/*.html`,
    svgicons: `${srcFolder}/images/svgicons/*.svg`,
    fonts: `${srcFolder}/fonts/**/*.*`,
    videos: `${srcFolder}/videos/**/*.mp4`
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/styles/**/*.{scss,css}`,
    components: `${srcFolder}/components/**/*.*`,
    html: `${srcFolder}/**/*.html`,
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
    fonts: `${srcFolder}/fonts/**/*.*`,
    videos: `${srcFolder}/videos/**/*.mp4`
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
};

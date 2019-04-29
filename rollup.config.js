import { uglify } from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

export default {
    input: 'src/index.js',
    output: {
        file: './lib/index.js',
        format: 'cjs',
        name: 'colors'
    },
    plugin: [
        babel({
            exclude: 'node_modules/**',
            modules: false,
        }),
        uglify(),
        commonjs(),
    ],
}
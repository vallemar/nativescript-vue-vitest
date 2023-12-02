import Vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vitest/config';
import { NSMockViews } from "./test/NSMockViews";

export default defineConfig({
    plugins: [
        Vue({
            template: {
                compilerOptions: {
                    isCustomElement: (tag) => NSMockViews.map(nsView => nsView.toLowerCase()).includes(tag.toLowerCase()),
                }
            }
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            "~": path.resolve(__dirname, './src'),
        },
        extensions: ['.mjs', '.js', '.ts', '.json', '.vue']
    },
    test: {
        globals: true,
        name: 'jsdom',
        root: './test',
        environment: 'jsdom',
        setupFiles: ['./setup.ts'],
    },
})
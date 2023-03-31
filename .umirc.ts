import { defineConfig } from "umi";

const shared = {
  react: {
    singleton: true,
    // eager: true,
  },
  "react-dom": {
    singleton: true,
    // eager: true,
  },
  
};

export default defineConfig({
  title: "7002",
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: "pnpm",
  plugins: [
    "@umijs/plugins/dist/qiankun",
    "@umijs/plugins/dist/model",
    "@umijs/plugins/dist/mf",
  ],
  qiankun: {
    slave: {},
  },
  model: {},
  // mfsu: {
  //   mfName: 'slave2'
  // },
  mf: {
    name: 'hostUser',
    remotes: [
      {
        name: 'remoteCounter',
        entries: {
          DEV: 'http://10.20.14.164:8000/remote.js',
          PROD: 'https://production.com/remote.js',
        },
        keyResolver: `(()=> 'DEV')()`,
      },
    ],
    shared,
  },
});

import { defineConfig } from "umi";

const shared = {
  react: {
    singleton: true,
    eager: true,
  },
  "react-dom": {
    singleton: true,
    eager: true,
  },
};

const env = process.env.NODE_ENV;

const mapKeyResolver = {
  'production': 'PROD',
  'development': 'DEV'
}

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
  // mfsu: false,
  // antd: false,
  mf: {
    name: 'hostUser',
    remotes: [
      {
        name: 'remoteCounter',
        entries: {
          DEV: 'http://localhost:8000/remote.js',
          PROD: 'https://nebula.wh.ctrm/web/remote.js',
          PRE: 'https://nebula.wh.ctrm/web/remote.js',
        },
        keyResolver: `(()=> '${mapKeyResolver[env] || 'PROD'}')()`,
      },
    ],
    shared,
  },
});

const path = require("path");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

let baseTestAPI = "http://localhost:8080";
baseAPI = baseTestAPI; // 线内配置

// const PrerenderSPAPlugin = require('prerender-spa-plugin')

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  pwa: {
    iconPaths: {
      favicon32: "faviconIcon.ico",
      favicon16: "faviconIcon.ico",
      appleTouchIcon: "faviconIcon.ico",
      maskIcon: "faviconIcon.ico",
      msTileImage: "faviconIcon.ico"
    }
  },
  publicPath: "/",
  assetsDir: "static",
  outputDir: "dist",
  configureWebpack: config => {
    //防止将某些 import 的包(package)打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖
    // cdn引用时配置externals
    config.externals = {
      vue: "Vue",
      "vue-router": "VueRouter",
      vuex: "Vuex",
      axios: "axios"
    };

    const plugins = [];

    plugins.push(
      // Ignore all locale files of moment.js
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    );
    config.plugins = [...config.plugins, ...plugins];
  },
  chainWebpack: config => {
    // 打包分析
    if (process.env.IS_ANALYZ) {
      config
        .plugin("webpack-bundle-analyzer")
        .use(BundleAnalyzerPlugin)
        .init(Plugin => new Plugin());
    }

    // 修复HMR
    config.resolve.symlinks(true);

    config.resolve.alias
      .set("@$", resolve("src"))
      .set("@api", resolve("src/api"))
      .set("@assets", resolve("src/assets"))
      .set("@comp", resolve("src/components"))
      .set("@views", resolve("src/views"))
      .set("@layout", resolve("src/layout"))
      .set("@static", resolve("src/static"));

    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule
      .oneOf("inline")
      .resourceQuery(/inline/)
      .use("vue-svg-icon-loader")
      .loader("vue-svg-icon-loader")
      .end()
      .end()
      .oneOf("external")
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "assets/[name].[hash:8].[ext]"
      });
    // 取消编译中的warning
    config.plugins.delete("fork-ts-checker");
  },
  css: {
    extract: { ignoreOrder: true },
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  lintOnSave: process.env.NODE_ENV !== "production",

  devServer: {
    proxy: {
      /* "/ks": {
        target: "http://search.kuwo.cn",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/ks": ""
        }
      }, */
      "/api": {
        target: 'http://music.163.com/', // 需要代理的API地址
        changeOrigin: true, // 让target参数是域名
        pathRewrite: { 
          "^/api": ""
        }
      }
    }
    // https: true
  },
  productionSourceMap: false, // 防止内网穿透无法访问本地开发环境
  lintOnSave: false //关闭eslint检查
};

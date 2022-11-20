module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['react-native-reanimated/plugin'],
    [
      "module-resolver",
      {
        alias: {
          // This needs to be mirrored in tsconfig.json
          "@navigations": "./src/navigations",
          "@components": "./src/components/*",
          "@models": "./src/models",
          "@screens": "./src/screens",
          "@utils": "./src/utils",
          "@hooks": "./src/hooks",
          src: "./src",
        },
      },
    ],
  ]
};

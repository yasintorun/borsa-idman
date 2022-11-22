module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['react-native-reanimated/plugin'],
    [
      "module-resolver",
      {
        alias: {
          "@navigations": "./src/navigations",
          "@components/UI": "./src/components/UI",
          "@components": "./src/components",
          "@models": "./src/models",
          "@screens": "./src/screens",
          "@utils": "./src/utils",
          "@hooks": "./src/hooks",
          "@assets/*": "./src/assets/*"
          // src: "./src",
        },
      },
    ],
  ]
};

![require-done](./require-done-in-subscribe.PNG)

# getting started

1) copy the folder to your repository, f.e. to the root directory
2) link or install the plugin (choose one / make sure you adjust the directory if you did not use the root directory)
    - `npm ln @tlechner/eslint-plugin-async-testing@file:./async-testing`
    - `npm install @tlechner/eslint-plugin-async-testing@file:./async-testing`
    - `yarn add @tlechner/eslint-plugin-async-testing@file:./async-testing` 
3) add the plugin to your eslint configuration
    - .eslintrc.json: 
```
{
  ...
  "plugins": ["@tlechner/async-testing"],
  ...
  "overrides": [
    ...
    {
      "files": ["*.spec.ts"],
      "rules": {
        "@tlechner/async-testing/require-done-in-subscribe": "error"
      }
    }    
    ...
  ]
}

```



## custom eslint rules tutorial

based on: https://github.com/Quramy/eslint-plugin-tutorial/blob/main/package.json

usefule tool: https://astexplorer.net/#/gist/1ff99fca3f85c2e7676ac041a88d7b53/179cf88e3a77c133741d9f96f0dc982b9f11ce4d

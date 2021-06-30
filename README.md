# getting started

1) copy the folder to your repository, f.e. to the root directory
2) `npm ln @tlechner/eslint-plugin-async-testing@file:./async-testing`
    - make sure you adjust the directory if you did not use the root directory
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
        "@tlechner/async-testing/require-done-in-subscribe": [
          "error"
        ]
      }
    }    
    ...
  ]
}

```



## custom eslint rules tutorial

based on: https://github.com/Quramy/eslint-plugin-tutorial/blob/main/package.json


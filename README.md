# playwright-ts-paths-bug-reproduction
A reproduction repo of issue while trying to import a module using ts paths property with * in middle of string

To reproduce:

```shell
yarn
```

`playwright test` fails with following error 

`Error: Cannot find module '<path ot dir>/playwright/packages/prefix-*/src'`


```shell
yarn test // runs `playwright test`
```

On the other hand Typescript is able to resolve these paths, IDE works fine as well

```shell
yarn typecheck // runs `tsc --noEmit`
```

It fails only if you have * char inside a value of some `compilerOptions.paths` entry

So this works with playwright and `tsc`

```json
{
  "paths": {
    "@company/prefix-app": [
      "packages/prefix-app/src"
    ],
    "@company/prefix-components": [
      "packages/prefix-components/src"
    ]
  }
}
```

And this fails with playwright, but works with `tsc`

```json
{
  "paths": {
    "@company/prefix-*": [
      "packages/prefix-*/src"
    ]
  }
}
```

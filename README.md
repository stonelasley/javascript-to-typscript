###DEPRECATED
This should no longer be used, you can now easily include js files with the [allowJs](https://www.typescriptlang.org/docs/handbook/compiler-options.html) setting in your tsconfig 




[![Build Status](https://travis-ci.org/stonelasley/javascript-to-typscript.svg?branch=master)](https://travis-ci.org/stonelasley/javascript-to-typscript)  [![Dependency Status](https://david-dm.org/stonelasley/javascript-to-typescript.svg)](https://david-dm.org/stonelasley/javascript-to-typescript)
##javascript-to-typscript
Utility to help migrate javascript apps to typescript.

###Install

```sh
$ npm install javascript-to-typescript
```

###Usage

  * from root of project
```sh
$ js-to-ts [OPTION] [PATH]
```
  -p --startPath : starting path
  -f --filter : filter pattern
  -d --dryRun : dry run

 - All commands should be run from the root of your project
 - Running any of these commands will also install the following NPM packages
     - Typescript
     - Typings

#####Default options

```sh
$ js-to-ts 
```
<table>
    <thead>
        <tr><th>Before</th><th>After</th></tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <pre>
                    <code>
 src/
├── file1.js
├── file2.js
└── module/
    └── views/
        └── view1.html
    ├── file1.js
    └── file2.js
                    </code>
                </pre>
            </td>
            <td>
                <pre>
                    <code>
 src/
├── file1.ts
├── file2.ts
└── module
    └── views/
        └── view1.html
    ├── file1.ts
    └── file2.ts
├── tsconfig.json
└── typings.json
                     </code>
                 </pre>
             </td>
        </tr>
    </tbody>
</table>

#####Specific Directory

```sh
$ js-to-ts --startPath ./src
```
<table>
    <thead>
        <tr><th>Before</th><th>After</th></tr>
    </thead>
    <tbody>
        <tr>
            <td><pre><code>.
 src/
├── file1.js
├── file2.js
└── module/
    └── views/
        └── view1.html
    ├── file1.js
    └── file2.js
└── utilities/
    ├── file1.js
    └── file2.js    
</code></pre></td>
<td><pre><code>.
 src/
├── files1.ts
├── file2.ts
└── module
    └── views/
        └── view1.html
    ├── file1.ts
    └── file2.ts
└── utilities/
    ├── file1.js
    └── file2.js
├── tsconfig.json
└── typings.json
    </code></pre></td>
        </tr>
    </tbody>
</table>    

#####Additional Filter

```sh
$ js-to-ts --filter '**/file1.js'
```
<table>
    <thead>
        <tr><th>Before</th><th>After</th></tr>
    </thead>
<tbody>
    <tr>
        <td>
            <pre>
                <code>
 src/
├── file1.js
├── file2.js
└── module/
    └── views/
        └── view1.html
    ├── file1.js
    └── file2.js
                </code>
            </pre>
        </td>
        <td>
            <pre>
                <code>
 src/
├── file1.ts
├── file2.js
└── module
    └── views/
        └── view1.html
    ├── file1.ts
    └── file2.js
├── tsconfig.json
└── typings.json
                </code>
            </pre>
        </td>
    </tr>
</tbody>
</table>

#####Dry Run

```sh
$ js-to-ts -p ./src --dryRun
$ Files to Migrate: [
    'src/file1.js',
    'src/file2.js',
    'module/file1.js',
    'module/file2.js'
] 
```


[![Build Status](https://travis-ci.org/stonelasley/javascript-to-typscript.svg?branch=master)](https://travis-ci.org/stonelasley/javascript-to-typscript)  [![Dependency Status](https://david-dm.org/stonelasley/javascript-to-typescript.svg)](https://david-dm.org/stonelasley/javascript-to-typescript)
##javascript-to-typscript
Utility to help migrate javascript apps to typescript.

###Install
```sh
$ npm install javascript-to-typescript
```

###Usage
 - All commands should be run from the root of your project
 ```sh
 $ cd <root of js project>
 ```
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
├── files2.js
└── module/
    ├── file1.js
    └── file2.js
                    </code>
                </pre>
            </td>
            <td>
                <pre>
                    <code>
 src/
├── files1.ts
├── files2.ts
└── module
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
├── files2.js
└── module/
    ├── file1.js
    └── file2.js
└── utilities/
    ├── file1.js
    └── file2.js    
</code></pre></td>
<td><pre><code>.
 src/
├── files1.ts
├── files2.ts
└── module
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
├── files2.js
└── module/
    ├── file1.js
    └── file2.js
                </code>
            </pre>
        </td>
        <td>
            <pre>
                <code>
 src/
├── files1.ts
├── files2.js
└── module
    ├── file1.ts
    └── file2.t=js
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
$ 
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
├── files2.js
└── module/
    ├── file1.js
    └── file2.js
                </code>
            </pre>
        </td>
        <td>
            <pre>
                <code>
 src/
├── files1.js
├── files2.js
└── module
    ├── file1.js
    └── file2.js
                </code>
            </pre>
        </td>
    </tr>
</tbody>
</table>


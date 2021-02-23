# TypeScript tuto

## compiling ts problem

### tsc fileName.ts

Every time we need to write in the console "tsc appName.ts" to compile our app and create a JS file. we don't want to repeat this process every time ==> we need to automatically make this task

## compiling ts solution (watch mode)

we add when writing the command "--watch" or "-w"

### tsc fileName.ts --watch

now the file is gonna be automatically recompiled when saving

## Compiling the entire project

### tsc --init

this tell the project that this is managed by typescript, it creates a tsconfig.json, and it will compile the entire project and this can be combined with watch mode

### inside tsconfig.json

- this file tells typescript how it should compile
- you can exclude and include files to be compiled
- we have "include" the opposite of exclude

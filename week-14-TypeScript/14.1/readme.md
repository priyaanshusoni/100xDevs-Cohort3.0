# Typescript Notes #

1. when i compile this code , ts compiler It will convert this code to ES5 standard , because I used target ; "ES5" in tsconfig.json

2. we should mention the entry point of the project in tsconfig.json , else it will generate .js files for every .ts file and if we push our code to github every .js file will also be pushed to github but developer can re-generate those files , so we don't need to push them to github so here we can ust ".gitignore" but we will neeed to update it everytime a new .js file is created for a new .ts file , so hence mention entry point file in tsconfig.json
# GTA:T Rebuilt with Express & Node 
(late 2020 vers. Incomplete)

![unknown](https://i.imgur.com/00B0ipt.png)

This represents an attempt to convert the existing website at https://gtat.pro/ from PHP to Node.js, a project that was never completed due to my time constraints and lack of motivation. 
If you find value in using this as a foundation for your own projects or as a learning resource, please feel free to utilize it.

The website's theme, named "Revelio," is open-source and can be readily located on the internet. 

Special credits go to Zyph for the logo and the creation of the dark theme variant for Revelio.

## Usage for development

Clone the project 

```bash
git clone https://github.com/Demo93/gtat_web_node.git
```

Start the web server on dev environment

```bash
npm run devStart
```

## Collaboration and Pull Requests

This project is open for collaboration, following a few guidelines:

1. Your proposed changes must compile without any errors.
2. Work on dev branch `git checkout dev`, the main branch will be used for production mode.
3. Once your done, make a pull request to main branch with

```bash
git commit -m "Progress on gang page"
git push --set-upstream origin dev
```
4. All pull requests must be confirmed before merged to main.

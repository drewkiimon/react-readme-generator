_This README.md was created using my React App_

---

# React README.md Previewer

This ReactJS application was created using create-react-app and [marked](https://github.com/markedjs/marked) which is an open source script that takes an input and outputs the HTML of a README.md file. The most difficult thing for me in this project was looking for a way to inject the HTML into a div instead of text such as:

`<p>Hello</p>`

showing up in my div s plaintext. Using `document.getElementById.innerHTML` fixed my problems and in the end made this a lot easier than it looks.

If you'd like to use this, feel free to install it and then run

`npm i`  
`npm start`

to install dependencies and then run the program.

// const signUpButton = document.getElementById('signUp');
// const signInButton = document.getElementById('signIn');
// const container = document.getElementById('container');

// signUpButton.addEventListener('click', () => {
//     container.classList.add("right-panel-active");
// });

// signInButton.addEventListener('click', () => {
//     container.classList.remove("right-panel-active");
// });

// const handleSignUp = () => {
//     const container = document.getElementById('container');
//     container.classList.add("right-panel-active");
// };

// const handleSignIn = () => {
//     const container = document.getElementById('container');
//     container.classList.remove("right-panel-active");
// };
// export { handleSignUp, handleSignIn };
import $ from "jquery";

$("#signUp").click(function () {
    $("#container").addClass("right-panel-active");
});
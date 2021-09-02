const searchUser = document.getElementById("searchUser");
const github = new GitHub();
const ui = new Ui();
searchUser.addEventListener("keyup", (e) => {
  const userText = e.target.value;
  if (userText !== "") {
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        //
        ui.showAlert("User not Found", "alert alert-danger");
      } else {
        //
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
        console.log(data.repos);
      }
    });
  } else {
    // clear
    ui.clearProfile();
  }
});

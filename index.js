
var password = "ouranni22";
var attempts = 0;
var maxAttempts = 10;

function showPasswordModal() {
  document.getElementById("password-modal").style.display = "block";
}

function hidePasswordModal() {
  document.getElementById("password-modal").style.display = "none";
}

function checkPassword() {
  var userPassword = document.getElementById("password-input").value;
  if (userPassword.trim() == '') {
    document.getElementById("password-error").textContent = "Please type the password.";
    document.getElementById("password-error").style.display = "block";
    return;
  } else if (userPassword == password) {
    window.location.href = "anni.html";
  } else {
    attempts++;
    document.getElementById("password-input").value = "";
    document.getElementById("password-error").style.display = "block";
    if (attempts >= maxAttempts) {
      var now = new Date().getTime();
      var retryTime = localStorage.getItem("retryTime");
      if (retryTime == null || now >= parseInt(retryTime)) {
        localStorage.removeItem("retryTime");
        document.getElementById("password-submit").disabled = true;
        setTimeout(function() {
          document.getElementById("password-submit").disabled = false;
          attempts = 0;
        }, 600000); // 10 minutes
      } else {
        document.getElementById("password-error").style.display = "none";
        document.getElementById("retry-error").style.display = "block";
        return;
      }
      localStorage.setItem("retryTime", now + 600000);
    }
    if (attempts > 0 && attempts < maxAttempts) {
      document.getElementById("password-error").textContent = "Incorrect password. " + (maxAttempts - attempts) + " attempts remaining.";
    } else if (attempts >= maxAttempts) {
      document.getElementById("password-error").style.display = "none";
      document.getElementById("retry-error").style.display = "block";
      document.getElementById("password-submit").disabled = true;
    } else {
      document.getElementById("password-error").textContent = "Incorrect password. Please try again.";
    }
  }
}

document.getElementById("password-submit").addEventListener("click", checkPassword);

showPasswordModal();

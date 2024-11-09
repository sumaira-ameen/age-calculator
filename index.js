function calculateAge() {
  var dobInput = document.getElementById("dob").value;
  var dob = new Date(dobInput);
  var today = new Date();

  var age = today.getFullYear() - dob.getFullYear();
  var monthDiff = today.getMonth() - dob.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  var month = today.getMonth() - dob.getMonth();
  if (month < 0) {
    month = 12 + month;
  }

  var dayDiff = today.getDate() - dob.getDate();
  if (dayDiff < 0) {
    dayDiff += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  var hourDiff = today.getHours() - dob.getHours();
  if (hourDiff < 0) {
    hourDiff += 24;
  }

  var minuteDiff = today.getMinutes() - dob.getMinutes();
  if (minuteDiff < 0) {
    minuteDiff += 60;
  }

  document.getElementById("result").innerText = "Your age is: " + age + " years, " + month + " months, " + dayDiff + " days, " + hourDiff;
}

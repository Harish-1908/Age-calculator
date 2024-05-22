// Define datevalidity function in the global scope
function datevalidity(validity) {
  if (!validity) {
      if (!document.getElementById("wrongresult")) {
          const wrongresult = document.createElement("div");
          wrongresult.id = "wrongresult";
          wrongresult.textContent = "Must be a valid day";
          day.parentNode.appendChild(wrongresult);
          day.style.border = "1px solid red";
          daytop.style.color = "hsl(0, 100%, 67%)";
      }
  } else {
      const remwrong = document.getElementById("wrongresult");
      if (remwrong) {
          day.parentNode.removeChild(remwrong);
          daytop.style.color = "hsl(0, 1%, 44%)";
          day.style.border = "1px solid hsl(0, 0%, 86%)";
      }
      
  }
}

const clickimage = document.getElementById("clickimage");
const day = document.getElementById("daytoaccess");
const month = document.getElementById("monthtoaccess");
const year = document.getElementById("yeartoaccess");
const daytop = document.getElementById("day");
const monthtop = document.getElementById("month");
const yeartop = document.getElementById("year");
const resday = document.getElementById("spandays");
const resmonth = document.getElementById("spanmonths");
const resyear = document.getElementById("spanyears");

clickimage.addEventListener("click", function () {
  const dayinput = day.value;
  const monthinput = month.value;
  const yearinput = year.value;
  const entervalue = `${yearinput}-${monthinput}-${dayinput}`;
  const today = new Date();
  const currentyear = today.getFullYear();
  const currentmonth = today.getMonth()+1;
  const currentday= today.getDate()
  //CHECKING ALL THE FIELDS ARE EMPTY OR NOT
  if (dayinput === "") {
      if (!document.getElementById("errday")) {
          const errday = document.createElement("div");
          errday.id = "errday";
          errday.textContent = "This field cannot be empty";
          day.parentNode.appendChild(errday);
          day.style.border = "1px solid red";
          daytop.style.color = "hsl(0, 100%, 67%)";
      }
  } else {
      const removeday = document.getElementById("errday");
      if (removeday) {
          day.parentNode.removeChild(removeday);
          daytop.style.color = "hsl(0, 1%, 44%)";
          day.style.border = "1px solid hsl(0, 0%, 86%)";
      }
  }

  if (monthinput === "") {
      if (!document.getElementById("errmonth")) {
          const errmonth = document.createElement("div");
          errmonth.id = "errmonth";
          errmonth.textContent = "This field cannot be empty";
          month.parentNode.appendChild(errmonth);
          month.style.border = "1px solid red";
          monthtop.style.color = "hsl(0, 100%, 67%)";
      }
  } else {
      const removemonth = document.getElementById("errmonth");
      if (removemonth) {
          month.parentNode.removeChild(removemonth);
          monthtop.style.color = "hsl(0, 1%, 44%)";
          month.style.border = "1px solid hsl(0, 0%, 86%)";
      }

      //CORRECTING IT IS A VALID MONTH OR NOT
      if (monthinput.length !== 2 || parseInt(monthinput) > 12 || parseInt(monthinput) < 1) {
          if (!document.getElementById("crtmonth")) {
              const crtmonth = document.createElement("div");
              crtmonth.id = "crtmonth";
              crtmonth.textContent = "Must be a valid month";
              month.parentNode.appendChild(crtmonth);
              month.style.border = "1px solid red";
              monthtop.style.color = "hsl(0, 100%, 67%)";
          }
      } else {
          const remmonth = document.getElementById("crtmonth");
          if (remmonth) {
              month.parentNode.removeChild(remmonth);
              monthtop.style.color = "hsl(0, 1%, 44%)";
              month.style.border = "1px solid hsl(0, 0%, 86%)";
          }
      }
  }

  if (yearinput === "") {
      if (!document.getElementById("erryear")) {
          const erryear = document.createElement("div");
          erryear.id = "erryear";
          erryear.textContent = "This field cannot be empty";
          year.parentNode.appendChild(erryear);
          year.style.border = "1px solid red";
          yeartop.style.color = "hsl(0, 100%, 67%)";
      }
  } else {
      const removeyear = document.getElementById("erryear");
      if (removeyear) {
          year.parentNode.removeChild(removeyear);
          yeartop.style.color = "hsl(0, 1%, 44%)";
          year.style.border = "1px solid hsl(0, 0%, 86%)";
      }
  }

  //CORRECTING THE YEAR THAT MUST BE IN PAST
  if (parseInt(yearinput) > parseInt(currentyear) - 1) {
      if (!document.getElementById("crtyr")) {
          const crtyr = document.createElement("div");
          crtyr.id = "crtyr";
          crtyr.textContent = "Must be in the past";
          year.parentNode.appendChild(crtyr);
          year.style.border = "1px solid red";
          yeartop.style.color = "hsl(0, 100%, 67%)";
      }
  } else {
      const remyr = document.getElementById("crtyr");
      if (remyr) {
          year.parentNode.removeChild(remyr);
          yeartop.style.color = "hsl(0, 1%, 44%)";
          year.style.border = "1px solid hsl(0, 0%, 86%)";
      }
  }

  //FUNCTION TO CHECK THE DATE
  function isValidDate(dateString) {
      const date = new Date(dateString);
      const validity = !isNaN(date.getTime()) && dateString === date.toISOString().split('T')[0];
      console.log(validity);
      return validity;
  }

  if (dayinput !== "" && monthinput !== "" && yearinput !== ""  ) {
      // Call datevalidity function
      const finaldate = isValidDate(entervalue);
      datevalidity(finaldate);
      // Example dates
      

      // Calculate years
      var yearsDiff = yearinput- today.getFullYear();
      yearsDiff= Math.abs(yearsDiff)
      // Calculate months
      let monthsDiff = monthinput - today.getMonth();
      if (monthsDiff < 0) {
          monthsDiff += 12; // Add 12 months if the result is negative
      }

      // Calculate days
      let daysDiff = dayinput- today.getDate();
      if (daysDiff < 0) {
          const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
          daysDiff += lastDayOfMonth; // Add the number of days in the previous month if the result is negative
      }

      console.log(`Years: ${yearsDiff}, Months: ${monthsDiff}, Days: ${daysDiff}`);
      resday.innerHTML=daysDiff;
      resmonth.innerHTML=monthsDiff;
      resyear.innerHTML=yearsDiff;
      }
      
});

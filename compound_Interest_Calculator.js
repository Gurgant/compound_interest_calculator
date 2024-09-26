document
  .getElementById("interest-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting and refreshing the page

    // Get input values
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value) / 100; // Convert percentage to decimal
    const time = parseFloat(document.getElementById("time").value);
    const compound = parseInt(document.getElementById("compound").value);
    const interest = document.getElementById("interest");

    // Validate input
    if (
      isNaN(principal) ||
      isNaN(rate) ||
      isNaN(time) ||
      isNaN(compound) ||
      principal <= 0 ||
      rate <= 0 ||
      time <= 0
    ) {
      interest.innerHTML = `<p style="color:red;">Please enter valid values for all fields.</p>`;
      interest.style.display = "block";
      return;
    }

    // Calculate compound interest using the formula A = P(1 + r/n)^(nt)
    const amount = principal * Math.pow(1 + rate / compound, compound * time);
    const compoundInterest = amount - principal;

    const currencyFormatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    // Display result

    interest.innerHTML = `
  <p>Initial Principal: <span>${currencyFormatter.format(principal)}</span></p>
  <p>Total Amount: <span class="blue">${currencyFormatter.format(
    amount
  )}</span></p>
  <p>Compound Interest: <span class="green">${currencyFormatter.format(
    compoundInterest
  )}</span></p>
`;
    interest.style.display = "block";
  });

//     --------------------------------------------------------------------------------

// const principal = document.getElementById("principal");
// const rate = document.getElementById("rate");
// const time = document.getElementById("time");
// const compound = document.getElementById("compound");
// const calculate = document.getElementById("calculate");
// const interest = document.getElementById("interest");
// const form = document.getElementById("interest-form");

// function calculateInterest(event) {
//   event.preventDefault(); // Prevent form from submitting

//   let p = parseFloat(principal.value);
//   let r = parseFloat(rate.value) / 100;
//   let t = parseFloat(time.value);
//   let n = parseFloat(compound.value);

//   // Validate if inputs are filled
//   if (isNaN(p) || isNaN(r) || isNaN(t) || isNaN(n)) {
//     interest.innerHTML = "Please fill in all fields correctly.";
//     return;
//   }

//   let a = p * Math.pow(1 + r / n, n * t);
//   let calculatedInterest = (a - p).toFixed(2);

//   console.log("Principal:", p);
//   console.log("Rate:", r);
//   console.log("Time (Years):", t);
//   console.log("Compound Frequency:", n);
//   console.log("Calculated Interest:", calculatedInterest);

//   interest.innerHTML = `Interest: $${calculatedInterest}`;
// }

// form.addEventListener("submit", calculateInterest);

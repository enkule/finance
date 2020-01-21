var uiController = (function() {
  //delgetste ajillah controller
})();

var financeController = (function() {
  // sanhuutei ajillah controller
})();

//programm holbogch controller
var appController = (function(uiController, financeController) {
  var ctrlAddItem = function() {
    console.log("sanhuu");
  };
  document.querySelector(".add__btn").addEventListener("click", function() {
    ctrlAddItem();
  });
  document.addEventListener("keypress", function(event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(uiController, financeController);

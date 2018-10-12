var calculateTax = function(price) {
  // Fill in code here
  if (typeof(price) != "number") {
    throw new Error("Paramter 'price' is required and must be a number.")
  } 
    
  return Number((Math.round((price * 1.13)*100)/100).toFixed(2));
  
};

module.exports = calculateTax;
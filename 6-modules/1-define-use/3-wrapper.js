//what actually happens in node if you launch any top level command is:
//function(exports, module, require, __filename, __dirname) {
// let g = 1; 
// this is not a global variable in node, only in the browser
// reason for this is the function wrapper that node puts in place by default
console.log(arguments);

exports.a = 42; //with exports and module one can export the API of a certain module

// }
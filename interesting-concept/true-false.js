/**
*^ Falsy:
*~ false
** 0
*! undefined
*? null
** NaN
*TODO Anything Else Is Truthy.
*/

/**
*^ Truthy:
*~ true
** any number (positive or negative) except 0
*? any string including white space and except empty string
*! empty array & empty object
*/

const x = {};
if(x) {
    console.log('variable is truthy');
} else {
    console.log('variable is falsy');
}
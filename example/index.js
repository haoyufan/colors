/**
 * Author: silence
 * Create Time: 2018-09-21 16:31
 * Description:
 */
const colors = require('../lib')
colors.init();
// console.log('silence'.red.bold);
// console.log('silence'.yellow.dim.bold);
// console.log('silence'.green.italic.bold);
// console.log('silence'.blue.underline.bold);
// console.log('silence'.cyan.inverse.bold);
// console.log('silence'.magenta.hidden.bold);
// console.log('silence'.grey.strikethrough.bold);
// colors.setTheme({
//    error: 'red',
//});

// console.log(colors.red('123').bold);
// console.log(colors.error(123123));
setInterval(() =>{console.log(`${Date()}`.yellow)}, 1000);

import fs from 'fs'

const base64_encode = (file) => {
  var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
  return new Buffer(bitmap).toString('base64')
}
const attach_img_tag_to_buffer =  (bufferrr) => {
  return `<img src="data:image/png;base64,${bufferrr}" />`
}

export default (filePath) => {
  let buffer = base64_encode(filePath)
  return attach_img_tag_to_buffer(buffer)
}

/* Example

import imger from './helpers/img'
let r = imger(path.join(__dirname, 'imgs', 'niceday_logo.png'))

*/

const request = require('superagent')
    , params = process.argv.slice(2)[0]
    , path = require('path')
    , pathToTarget = path.join(process.env.PWD, 'package.json')
    , fs = require('fs')
    , info = JSON.parse(fs.readFileSync(pathToTarget, 'utf8'))
    , message = `Version:\n${info.version}\n\nDescription:\n${info.description}`
    // , params = JSON.stringify(process)

console.log(process.S3_BUCKET);
// console.log();


const postToLinePromise = (message) => {
  return new Promise((resolve, reject)=>{
    request
      .post('https://api.line.me/v2/bot/message/push')
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer g8TAWjF4u8xjlIsChHKWDYHjTqw9uRofKQoxIK64WO4/rH1qPMg5nWkNkIXkOz26DDVGos0Bti+5D47mKXeLO5KB7z0DBGMxSD/zd+b1UtjJQ0y7RyXIqAej7M0kBL9EFJHj62wvjnEmZZeamgDxJwdB04t89/1O/w1cDnyilFU=')
      .send({
      "to":"Ubc2fdcab863c37f0599a2ff54bbb8983",
      "messages":[
          {
              "type":"text",
              "text": message ? message : 'Params Needed'
          }
        ]
      })
      .end(function(err, res){
        if(err){
          reject(new Error(err))
        } else {
          resolve(res)
        }
      });
  })
}

postToLinePromise(params)
  .then((res)=>console.log('ok'))
  .catch(err=>console.log('err:',err))

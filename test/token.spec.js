import request from 'superagent'

const rootUrl = 'http://ec2-52-199-31-102.ap-northeast-1.compute.amazonaws.com:8000'


xit('get token with valid email and password',(done)=>{
  request
  .post(`${rootUrl}/api/auth`)
  .send({email:'test@test.com', password:'secret'})
  .set('Accept', 'application/json')
  .end((err,res)=>{
    expect(err).toBeNull()
    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty('token')

    request
    .get(`${rootUrl}/api/auth`)
    .set({Authorization:`Bearer ${res.body.token}`})
    .end((err,res)=>{
      console.log(err);
      console.log(res.body);
      done()
    })
  })
})

xit('get token with invalid email and password',(done)=>{
  request
  .post(`${rootUrl}/api/auth`)
  .send({email:'oh@gmail.com', password:'12345'})
  .set('Accept', 'application/json')
  .end((err,res)=>{
    expect(err.status).toBe(400)
    expect(res.body).toHaveProperty('error', 'invalid_credentials')
    done()
  })
})

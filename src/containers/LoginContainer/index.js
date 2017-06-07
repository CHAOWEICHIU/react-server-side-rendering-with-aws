import React, { Component }             from 'react'
import { connect }                      from 'react-redux'
import { reduxForm, Field, FieldArray } from 'redux-form'
import { Link }                         from 'react-router-dom'
import { validate as isValidEmail }     from 'email-validator'
import superagent                       from 'superagent'
import styled                           from 'styled-components'
import Loader                           from '../../components/Loader'
import {
  GET_TOKEN_SUCCEED,
  GOT_ERROR_MESSAGE,
}                                       from '../../actions'


const Group = styled.div`
  width: 100%;
`

const FormForInputs = styled.form`
  overflow:auto;
  top:20px;
  width:25%;
  transform: translate(150%,4%);
  padding-bottom:100px;
`
const SubmitBtn = styled.button`
  color:${(props)=>{
    return props.invalid
      ? 'gray'
      : 'white'
  }};
  cursor:${({invalid})=>{
    return invalid ? 'not-allowed':'pointer'
  }};
  background-color:${({invalid})=>{
    return invalid ? 'rgba(255,255,255)':'#1161ee'
  }};
  border-radius:0;
  width:100%;
  border:none;
  padding: 15px 20px;
`

const ContainerForForm = styled.div`
  width:100%;
  text-align:center;
  min-height:100%;
`

const InputField = styled.input`
  border: none;
  padding: 15px 20px;
  color: white;
  width:100%;
  background-color: rgba(255,255,255,0.3);
  font-size: 20px;
  transition: .3s ease;
  outline:none;
  cursor:text;
`

const InputLabel = styled.label`
  display:block;
  color:#aaa;
  font-size:20px;
  text-align:left;
  text-transform:uppercase;
  margin-bottom: 0px;
`

const ErrorSpan = styled.span`
  color: #cc2920;
  opacity:0.8;
  font-weight: 700;
`

const renderInput = field =>{
  const { error, touched, active } = field.meta
  return (<div>
    <Group>
      <InputLabel>{field.placeholder}</InputLabel>
      <InputField key={field.placeholder}  {...field.input}/>
      {error && touched && <ErrorSpan>{error}</ErrorSpan>}
    </Group>
    <br/>
  </div>)
}

// normalize helpers
import normalizePhone                   from '../../helpers/normalize_phone'
const upper = value => value && value.toUpperCase().slice(0, 5)

const onSubmitSuccess = (res,dispatch) => {
  const token = res.body.token
  window.sessionStorage.setItem('token', token)
  return dispatch({type:GET_TOKEN_SUCCEED, token})
}
const onSubmitFail = (errors, dispatch, submitError) => {
  dispatch({
    type:GOT_ERROR_MESSAGE,
    from: 'userForm',
    errorMessage:'401 => invalid email or password'
  })
}

const doSubmit = values => (
  new Promise((resolve, reject)=>{
    superagent
    .post('https://fshezytp0m.execute-api.ap-northeast-1.amazonaws.com/prod/niceday/token')
    .send({email:values.email,password:values.password})
    .end((err,res)=>{
      console.log('res',res);
      console.log('err',err);
      return err
        ? reject(err)
        : resolve(res)
    })
  })
)


const validate = values => {
  const errors = {};
  if(!values.username) errors.username = 'Required'
  if(!values.password) errors.password = 'Required'
  if(!values.phone || values.phone.length < 12) errors.phone = 'Required, EX:0922-222-222'
  if(!values.email){
    errors.email = 'Required'
  } else if (!isValidEmail(values.email)){
    errors.email = 'Not Valid Email'
  }
  return errors
}
const SubmitSucceededPage = () => (<div>Done!</div>)
const LoginForm = props => {
  const { handleSubmit, invalid, submitting, submitSucceeded } = props
  console.log(props);
  if(submitSucceeded)return (<SubmitSucceededPage />)
  if(submitting)     return (<Loader />)
  return (<ContainerForForm>
      <FormForInputs onSubmit={handleSubmit(doSubmit)}>
        <Field  name="email" type="email" component={renderInput} placeholder="email" />
        <Field  name="password" type="password" component={renderInput} placeholder="password" />
        <SubmitBtn type="submit" invalid={invalid}>SUBMIT</SubmitBtn>
      </FormForInputs>
    </ContainerForForm>
  )
}

export default reduxForm({
  form: 'loginForm',
  validate,
  onSubmitSuccess,
  onSubmitFail,
})(LoginForm)

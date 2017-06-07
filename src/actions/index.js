/*
  Action Type
*/
export const GET_TOKEN_WITH_CREDENTIAL = 'get_token_with_credential'
export const GET_TOKEN_SUCCEED         = 'get_token_succeed'
export const GOT_ERROR_MESSAGE         = 'got_error_message'
/*
  Action Function
*/


export const UP = () => ({type:'up'})
export const DOWN = () => ({type:'down'})
export const OK = () => ({type:'ok'})
export const GetTokenByUserCredentials = () => ({type:GET_TOKEN_WITH_CREDENTIAL})

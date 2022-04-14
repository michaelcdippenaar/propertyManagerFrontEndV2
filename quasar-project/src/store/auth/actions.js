import readFile from "src/storage/readFile";

export function jwtFromCache({commit, state}) {
  const auth = readFile('token.json')
  console.log('testDispatch', auth)
  auth.then(
    e=>{
      console.log('testAction', e)
      state.jwt = e.token
    }
  )
}

function imageOptionMutation (state, c) {
  console.log(c)
  state.imageOption = c
}


function categoryOptionMutation (state, c) {
  console.log(c)
  state.categoryOption = c
}

export { imageOptionMutation, categoryOptionMutation }

const initState = []

const contentReducer = (state = initState, action) => {
  switch (action.type) {
    case "SHOW_ALL_CONTENTS":
      return {
        data: action.payload.data,
      }
    default:
      return state
  }
}

export default contentReducer;
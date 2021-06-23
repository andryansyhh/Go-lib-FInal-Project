import golibAPI from "../../API/go-lib"

const fetchAllContents = () => async (dispatch) => {
  try {
    const contents = await golibAPI({
      method: "GET",
      url: "/contents",
    })

    dispatch({
      type: "SHOW_ALL_CONTENTS",
      payload: {
        data: contents.data.data
      }
    })
  } catch (error) {
    console.log(error)
  }
}

const contentAction = {
  fetchAllContents,
};

export default contentAction;
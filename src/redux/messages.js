const url = 'http://127.0.0.1:3000/greetings';
const GET_MESSAGE = 'GET_MESSAGE';
const initialState = {};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGE:
      return action.message;
    default:
      return state;
  }
};

export default messagesReducer;

export const getMessage = () => async (dispatch) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error! status: ${response.status}`);
  }
  const json = await response.json();
  const message = json;
  dispatch({
    type: GET_MESSAGE,
    message,
  });
};

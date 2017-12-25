const initialSentence = { text: "Hi I'am default sentence :D" };

export default (state = initialSentence, action) => {
  switch (action.type) {
    case 'SET_SENTENCE':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

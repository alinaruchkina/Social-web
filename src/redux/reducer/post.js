const initialState = {
  like: 15,
  subscribe: true,
  show: true,
  post: [
    {
      userPhoto: 'http://www.wpkixx.com/html/winku-dark/images/resources/friend-avatar10.jpg',
      userName: 'Janice Griffith',
      postData: 'June,2 2018 19:00 PM',
      description:
        "World's most beautiful car in Curabitur #test drive booking ! The most beautiful car available in america and the Saudia Arabia, you can book your test drive by our official Website.",
      amountView: 10,
      amountLike: 10,
      amountDislike: 10,
      id: 0,
    },
  ],
};

const post = (state = initialState, action) => {
  switch (action.type) {
    case 'LIKE_PLUS':
      return {
        ...state,
        like: action.payload,
      };
    case 'SHOW':
      return {
        ...state,
        show: action.payload,
      };
    case 'SET_SUBSCRIBE':
      return {
        ...state,
        subscribe: action.payload,
      };
    default:
      return state;
  }
};

export default post;

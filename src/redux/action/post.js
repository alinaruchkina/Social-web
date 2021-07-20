export const setLike = (like) => {
  return {
    type: 'LIKE_PLUS',
    payload: like,
  };
};

export const setCategory = (catIndex) => ({
  type: 'SET_POST1',
  payload: catIndex,
});

export const setSubscribe = (follow) => {
  return {
    type: 'SET_SUBSCRIBE',
    payload: follow,
  };
};

export const setShow = (show) => {
  return {
    type: 'SHOW',
    payload: show,
  };
};

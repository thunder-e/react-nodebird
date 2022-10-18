export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "김떤더",
      },
      content: "첫 번째 게시글 #해시태그 #익스프레스",
      Images: [
        {
          src: "https://cdn.pixabay.com/photo/2022/07/03/22/00/cat-7300029_960_720.jpg",
        },
        {
          src: "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg",
        },
        {
          src: "https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_960_720.jpg",
        },
      ],
      Comment: [
        {
          User: {
            nickname: "copy",
          },
          content: "고양이 귀여워요😊",
        },
        {
          User: {
            nickname: "연두",
          },
          content: "츄르 가져다줄까",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};
//다른 정보들과 함께 오는 데이터들은 대문자로 시작 - User, Image, Comment

const ADD_POST = "ADD_POST"; //변수로 따로 저장해두면 오타를 막을 수 있다.
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: "더미데이터입니다.",
  User: {
    id: 1,
    nickname: "김떤더",
  },
  Images: [],
  Comment: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;

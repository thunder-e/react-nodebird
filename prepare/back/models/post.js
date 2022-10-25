module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post", // MySQL에는 posts 테이블 생성
    {
      // id가 기본적으로 들어있다.
      content: {
        type: DataTypes.TEXT, //글자 무제한
        allowNull: false,
      },
      // RetweetId // as로 바꿔주었기 때문에 PostId가 아닌 RetweetId가 생성됨
    },
    {
      charset: "utf8mb4", // 이모티콘까지 넣기위해
      collate: "utf8mb4_general_ci", // 이모티콘 저장
    }
  );
  Post.associate = (db) => {
    db.Post.belongsTo(db.User); // post.addUser, post.getUser, post.setUser
    db.Post.belongsToMany(db.Hashtag, { through: "PostHashtag" }); // post.addHashtags
    db.Post.hasMany(db.Comment); // post.addComments, post.getComments
    db.Post.hasMany(db.Image); // post.addImages, post.getImages
    db.Post.belongsToMany(db.User, { through: "Like", as: "Likers" }); // post.addLikers, post.removeLikers
    // 좋아요 관계
    // 나중에 as에 띠라 post.getLikers처럼 게시글 좋아요 누른 사람을 가져오게 된다
    db.Post.belongsTo(db.Post, { as: "Retweet" }); // post.addRetweet
  };
  return Post;
};

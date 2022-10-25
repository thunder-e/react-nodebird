module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment", // MySQL에는 posts 테이블 생성
    {
      // id가 기본적으로 들어있다.
      content: {
        type: DataTypes.TEXT, //글자 무제한
        allowNull: false,
      },
      // UserId : {}
      // PostId : {}  //belongsTo 를 써놓으면 생성해줌
    },
    {
      charset: "utf8mb4", // 이모티콘까지 넣기위해
      collate: "utf8mb4_general_ci", // 이모티콘 저장
    }
  );
  Comment.associate = (db) => {
    db.Comment.belongsTo(db.User);
    db.Comment.belongsTo(db.Post);
  };
  return Comment;
};

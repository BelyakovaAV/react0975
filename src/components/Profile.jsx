import styles from "./Profile.module.css";

const Profile = ()=> {
  return (
    <div className="row">
      <div className="col-sm-3">
        <img src="https://www.seekpng.com/png/full/356-3562377_personal-user.png" alt="" width={"100%np"} />
      </div>
      <div className="col-sm-9">
        <h1 style={{backgroundColor: "lightblue"}}>Фамилия и Имя</h1>
        <h2 className={styles.about}>Рассказ о себе</h2>
        <p>E-mail: ivan@ya.ru</p>
        <p>Id: 2</p>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eveniet quibusdam vitae nesciunt ab, sit tenetur soluta earum delectus nihil voluptate commodi quos, odit hic eligendi officia corporis eius? Dolor!</p>
      </div>
    </div>
  );
};
export default Profile;
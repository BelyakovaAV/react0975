import styles from "./Profile.module.css";

const Profile = (props)=> {
  let user = props.function () 
    //console.log (user)
  return (
    <div className="row">
      <div className="col-sm-3">
        <img src={user.avatar} alt="" width={"100%np"} />
      </div>
      <div className="col-sm-9">
        <h1 style={{backgroundColor: "lightblue"}}>{user.name} {user.lastname}</h1>
        <h2 className={styles.about}>{user.about}</h2>
        <p>E-mail: {user.email}</p>
        <p>Id: {user.id}</p>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eveniet quibusdam vitae nesciunt ab, sit tenetur soluta earum delectus nihil voluptate commodi quos, odit hic eligendi officia corporis eius? Dolor!</p>
      </div>
    </div>
  );
};
export default Profile;
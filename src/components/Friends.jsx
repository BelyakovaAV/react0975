import {Link} from "react-router-dom";

const TableRow = (props) =>{
  return  (
  <tr>
    <th scope="row">{props.index + 1}</th>
      <td>
        <Link to={"/profile/" + props.id}>
        {props.name} {props.lastname}
        </Link>
      </td>
  </tr>
  );
};


const Friends = (props)=> {
  let users = props.function ();
  let usersCount = Object.keys(users).length;
  // метод object.keys позволяет дотянуться до колличества его ключей, т.к. в массиве мы на прямую свойство length не можем получить, поэтому в начале тянемся до кол.ва ключей а потом до длины, таким образом сохранив в переменной длину нашего объекта, после смогли его перебрать
  let userRow = [];

  for(let i = 0; i < usersCount; i++) {
    userRow.push(<TableRow id={users[i].id} key={i} index={i} name={users[i].name} lastname={users[i].lastname}/>)
  }

  return (
  <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Фамилия и Имя</th>

    </tr>
  </thead>
  <tbody>
    {userRow}
  </tbody>
  </table>
)
};

export default Friends;
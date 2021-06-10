import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

const profiles = [
  {
    firstName: "Willie",
    lastName: "Dustice",
    birthday: "01/01/1978 00:00:00",
    profileImage: "https://www.tubefilter.com/wp-content/uploads/2019/11/dobrik-people-1920x1131.jpg"
  },
  {
    firstName: "Roemello",
    lastName: "McCoy",
    birthday: "12/22/1996 00:00:00",
    profileImage: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg?width=990&auto=webp&quality=75"
  },
  {
    firstName: "Noah",
    lastName: "Loy",
    birthday: "05/16/1994 00:00:00",
    profileImage: "https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?k=6&m=1007763808&s=612x612&w=0&h=Js1VDBulbaNw_CF7fghP_nhUPCC-DQTqb7Wym1CdTOI="
  },
  {
    firstName: "Jasmine",
    lastName: "Harris",
    birthday: "04/01/1995 00:00:00",
    profileImage: "https://static.dw.com/image/53200076_303.jpg"
  },
  {
    firstName: "Lisa",
    lastName: "Roundtree",
    birthday: "09/01/1978 00:00:00",
    profileImage: "https://i.insider.com/5cb8b133b8342c1b45130629?width=1000&format=jpeg&auto=webp"
  }
]

const Profiles = () => {
  return(
    <Router>

      <h1>
        <Link to="/profiles/0">{profiles[0].firstName} {profiles[0].lastName} </Link>
      </h1>
      <h1>
        <Link to="/profiles/1">{profiles[1].firstName} {profiles[1].lastName} </Link>
      </h1>
      <h1>
        <Link to="/profiles/2">{profiles[2].firstName} {profiles[2].lastName} </Link>
      </h1>
      <h1>
        <Link to="/profiles/3">{profiles[3].firstName} {profiles[3].lastName} </Link>
      </h1>
      <h1>
        <Link to="/profiles/4">{profiles[4].firstName} {profiles[4].lastName} </Link>
      </h1>

      <Switch>
        <Route path="/profiles/:id" children={<Child />} />
      </Switch>
    </Router>
  )
}

function Child() {
  let { id } = useParams();

  return (
    <div>
      <h1>
        {profiles[id].firstName} {profiles[id].lastName}
      </h1>
      <p>
        {profiles[id].birthday}
      </p>
        <a href= {profiles[id].profileImage}><img src={profiles[id].profileImage} alt="Profile"/></a>
    </div>
  )
}



export default Profiles;
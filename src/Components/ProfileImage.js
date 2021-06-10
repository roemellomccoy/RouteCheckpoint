import { useParams } from 'react-router-dom'

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

function ProfilePicture() {
  let {id}=useParams()
  return(
  <div>
    {profiles[id].profileImage}
  </div>)
}

export default ProfilePicture
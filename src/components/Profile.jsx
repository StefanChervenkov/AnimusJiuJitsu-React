import { auth, database} from "../firebase";
import { set, ref } from "firebase/database";

const studentInfo = {
    username: 'Stefan',
    email: 'testemail@gmail.com',
    profile_picture: 'someImageUrl'
}


export default function Profile() {
    const user = auth.currentUser;
    
    
    function writeStudentData() {
        console.log(user.uid);
        set(ref(database, 'students/' + user.uid), studentInfo);
        
    }


    return (
        <>
            <button onClick={writeStudentData}>Send data</button>
        </>
    )
}
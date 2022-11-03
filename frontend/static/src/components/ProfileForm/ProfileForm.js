import StudentProfileForm from "../StudentProfileForm/StudentProfileForm"
import TutorProfileForm from "../TutorProfileForm/TutorProfileForm"
import Container from "react-bootstrap/Container";


function ProfileForm({user}) {


    return (
        
        <Container className="profiles">
          <div className="profile-form">
            {user.is_student && (
                <>
                  <StudentProfileForm />
                </>
              )}
              {!user.is_student && (
                <>
                <TutorProfileForm />
                </>
              )}
          </div>
        </Container>
      
    )

}



export default ProfileForm;
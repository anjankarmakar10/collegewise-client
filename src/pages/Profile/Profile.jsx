import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";

const Profile = () => {
  const { logOut, user } = useAuth();
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="max-w-2xl flex-col items-center gap-4   mx-auto px-4 flex justify-center py-16">
        <div className="flex flex-col gap-4 justify-center items-center border-2 rounded-lg p-4 ">
          <div>
            {user?.photoURL && (
              <img
                className="w-60 border-8  border-cyan-900 h-60 object-contain rounded-full"
                src={user?.photoURL}
                alt=""
              />
            )}
          </div>
          <h2 className="text-xl font-semibold">{user.displayName}</h2>
        </div>

        <div onClick={handleSignOut}>
          <button className="btn btn-neutral">Sign out</button>
        </div>
      </div>
    </>
  );
};

export default Profile;

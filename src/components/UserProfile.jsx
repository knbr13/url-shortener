const UserProfile = ({user}) => {
  return (
    <div>
        <img src={user.picture} className="rounded-full w-12 md:w-16" />
    </div>
  )
}

export default UserProfile
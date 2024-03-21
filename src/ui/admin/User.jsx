const User = ({ user }) => {
  return (
    <div className="w-full md:w-1/2 p-4">
      <p className="text-xl truncate w-fit italic text-gray-500">{user._id}</p>
      <div className="w-full h-fit">
        <div className="w-full h-full flex flex-col-reverse md:flex-row">
          <div className="bg-accent-500 w-full md:w-2/3">
            <p className="text-xl p-2 bg-ab-500 truncate text-white">{user.companyName}</p>
            <p className="text-xl p-2 truncate text-white">{user.email ? user.email : "Sin email"}</p>
            <p className="text-xl p-2 truncate text-white">{user.phone ? user.phone : "Sin teléfono"}</p>
            <p className="text-xl p-2 truncate text-white">{user?.schedule?.length > 0 ? "Horario: " : "Sin horario"}</p>
          </div>
          <img className="h-1/2 md:h-64 w-full md:w-1/3 object-cover" src={user.picture ? user.picture.substring(0, user?.picture.indexOf("=")) : "https://i.stack.imgur.com/l60Hf.png"} alt="" />
        </div>
      </div>
    </div>
  );
};

export default User;

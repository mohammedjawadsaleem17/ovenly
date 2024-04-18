import { useSelector } from "react-redux";

export default function Username() {
  const user = useSelector((store) => store.user);
  console.log(user);
  return (
    <div className="font-bold-100 hidden text-sm font-semibold tracking-widest   text-sky-100 md:block">
      {user.username}
    </div>
  );
}

import Link from "next/link";

function NotFound(): JSX.Element {
  return (
    <div className="bg-gray-200 flex justify-center items-center min-h-screen">
      <div className='flex flex-col items-center'>
        <h1 className="text-[100px] text-black mb-2">404</h1>
        <Link className="text-xl underline text-blue-800" href={"/"}>На главную</Link>
      </div>
    </div>
  );
}

export default NotFound;

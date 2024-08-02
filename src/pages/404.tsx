// import './404.scss';

import Image from "next/image";

function NotFound(): JSX.Element {
  return (
    <div className="bg-sky-700">
      {/* Страница 404 */}
      <div className="d-flex justify-center ">
        <Image priority src='http://localhost:3000/404.png' width={400} height={400} alt="Изображение" />
        <img className='w-100' width={400} height={400} src="./404.png" alt="" />
      </div>
    </div>
  );
}

export default NotFound;
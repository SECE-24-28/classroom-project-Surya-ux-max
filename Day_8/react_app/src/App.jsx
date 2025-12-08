import './App.css'
import suryaImg from './assets/surya.jpg'

const user = {
  name: 'Suryaprakash',
  imageUrl: suryaImg,
  imageSize: 150,
};

export default function App(){
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of" + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}

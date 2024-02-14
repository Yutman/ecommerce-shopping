import { Outlet } from 'react-router-dom'

import Directory from "../../components/directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl:
        "https://i.pinimg.com/236x/15/e3/b7/15e3b77a5ed68fed718e2fa7a3dede88.jpg",
    },
    {
      id: 2,
      title: "Jackets",
      imageUrl:
        "https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl:
        "https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 4,
      title: "Womens",
      imageUrl:
        "https://images.pexels.com/photos/8400220/pexels-photo-8400220.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 5,
      title: "Mens",
      imageUrl:
        "https://images.pexels.com/photos/7679732/pexels-photo-7679732.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
  <div>
  <Directory categories={categories} />
  <Outlet />
  </div>
  );
};

export default Home;

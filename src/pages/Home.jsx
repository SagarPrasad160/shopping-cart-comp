import ApparelList from "../components/ApparelList";


const apparels = [
    {
      id: 1,
      imageSrc:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
      name: "Jacket",
      description: "This is a stylish jacket made from high-quality materials.",
      price: "$50",
    },
    {
      id: 2,
      imageSrc:
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      name: "T-Shirt (ORIGINAL)",
      description: "This is an original T-shirt design with a comfortable fit.",
      price: "$20",
    },
    {
      id: 3,
      imageSrc:
        "https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      name: "T-Shirt (JC)",
      description: "This is a T-shirt designed by JC with a cool graphic.",
      price: "$25",
    },
    {
      id: 4,
      imageSrc:
        "https://images.unsplash.com/photo-1627225925683-1da7021732ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      name: "Tay Son T-Shirt",
      description: "This T-shirt features a design inspired by Tay Son culture.",
      price: "$22",
    },
    {
      id: 5,
      imageSrc:
        "https://plus.unsplash.com/premium_photo-1682342785766-e5c8ef847b18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "Free Wear Summer!",
      description: "This is a lightweight and comfortable T-shirt for summer wear.",
      price: "$15",
    },
  ];
  
function Home() {
  return (
    <div>
      <ApparelList apparels={apparels} />
    </div>
  );
}

export default Home;

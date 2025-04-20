import { GiWorld, GiCommercialAirplane, GiCargoShip, GiMineTruck } from "react-icons/gi";
import { FaWarehouse } from "react-icons/fa6";
import { FcCustomerSupport } from "react-icons/fc";
import { FaBox } from "react-icons/fa";
const services = [
        {  id: "1",
            icon: <GiWorld />, 
            title: "International Shipment", 
            content: "We provide reliable international shipping services to ensure your cargo reaches its destination safely and on time."
        },
        {  id: "2",
            icon: <GiCommercialAirplane />, 
            title: "Air Cargo", 
            content: "Fast and secure air cargo services to deliver your goods across the globe with utmost efficiency."
        },
        { id: "3",
            icon: <GiCargoShip />, 
            title: "Sea Cargo", 
            content: "Cost-effective sea cargo solutions for large shipments, ensuring safe and timely delivery via ocean freight."
        },
        { id: "4",
            icon: <GiMineTruck />, 
            title: "Truck Freight Solutions", 
            content: "Comprehensive road transport solutions to handle your cargo across local and international routes."
        },
        { id: "5",
            icon: <FaWarehouse />, 
            title: "Storage Solutions", 
            content: "Safe and secure storage facilities to keep your goods in top condition until they’re ready for delivery."
        },
        { id: "6",
            icon: <FcCustomerSupport />, 
            title: "Customs Processing", 
            content: "Efficient customs clearance services to ensure smooth import and export of your goods, complying with regulations."
        },
        { id: "7",
            icon: <FaBox />, 
            title: "Packing Solution", 
            content: "Professional packing services to protect your goods and minimize risk during transportation."
        }
    
]

export const project = [
    { image: "/depot_img_3.jpg", title: "Sea Logistics", content: "Sea Transportation" },
    { image: "/depot_img_1.jpg", title: "Logistics Management", content: "Road Transportation" },
    { image: "/depot_img_2.jpg", title: "Packaging Solutions", content: "Air Transportation" },
    { image: "/7e4b5c.webp", title: "Storage Management", content: "Warehouse Services" }
  ];

  export const testimonial = [
    {
      name: "John Doe",
      company: "Global Freight Co.",
      image: "/person_1.jpg", // Make sure this image is placed in the public directory
      details: "The logistics service provided by this team has been exceptional. They have ensured timely deliveries with great attention to detail."
    },
    {
      name: "Jane Smith",
      company: "Oceanic Shipping Ltd.",
      image: "/person_2.jpg", // Make sure this image is placed in the public directory
      details: "Their team is highly professional and dedicated. They’ve consistently helped us optimize our supply chain with reliable solutions."
    },
    {
      name: "Michael Rose",
      company: "Air Freight Logistics",
      image: "/person_3.jpg", // Make sure this image is placed in the public directory
      details: "Their customer support is fantastic! They have always provided swift and cost-effective solutions for our business needs."
    }
  ];
  // lib/getCountries.js
export const getCountries = async () => {
  const res = await fetch('https://restcountries.com/v3.1/all');
  const data = await res.json();
  return data.map(country => country.name.common);
};


export default services ;

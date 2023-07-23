import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Offers from "@/components/Offers/Offers";
import offer1 from "../assets/images/offers/offer1-min.png";

const LUXURY_ARAB_OFFERS = [
  {
    img: offer1,
    title: "Moroccan Bath with Arabic Massage",
    description:
      "This treatment involves a deep-cleansing, full-body exfoliation using a traditional Moroccan black soap made from natural ingredients like olive oil, eucalyptus, and other nourishing oils.",
    time: "75 Min",
    cost: "AED 600",
  },
  {
    img: offer1,
    title: "Turkish Bath & Body Massage",
    description:
      "It begins with a traditional Turkish Bath, which is designed to deeply cleanse and exfoliate the skin using steam and a special soap made from natural ingredients like olive oil and eucalyptus.",
    time: "75 Min",
    cost: "AED 700",
  },
  {
    img: offer1,
    title: "Manicure, Pedicure, Face Mask and Foot Massage",
    description:
      "This luxurious session includes a manicure and pedicure to keep your hands and feet looking beautiful and healthy. Your nails will be trimmed, filed, and shaped to perfection.",
    time: "75 Min",
    cost: "AED 500",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Offers offers={LUXURY_ARAB_OFFERS} />
    </>
  );
}

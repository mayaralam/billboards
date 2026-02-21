import Nav from "../components/nav";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import pic4 from "../assets/pic4.png";
import pic5 from "../assets/pic5.png";
import pic6 from "../assets/pic6.png";
import { toast } from "react-hot-toast";
import Footer from "../components/footer";
export default function billboards() {
  const handleSubmit = (event) => {
  event.preventDefault();
  toast.success("تم الحجز");
};
  const data = {
    cairo: [
      {
        image: pic4,
        title: "لوحة إعلانية - شارع صلاح سالم",
        location: "شارع صلاح سالم - القاهرة",
        duration: "شهر واحد",
        price: "85,000 جنيه",
        size: "7 م × 4 م",
        status: "غير متاح",
      },
      {
        image: pic5,
        title: "لوحة إعلانية - ميدان التحرير",
        location: "ميدان التحرير - القاهرة",
        duration: "شهر واحد",
        price: "120,000 جنيه",
        size: "10 م × 5 م",
        status: "احجز الآن",
      },
      {
        image: pic6,
        title: "لوحة إعلانية رقمية - طريق القاهرة السويس",
        location: "طريق القاهرة السويس - القاهرة",
        duration: "شهر واحد",
        price: "75,000 جنيه",
        size: "8 م × 4 م",
        status: "احجز الآن",
      },
    ],
    alex: [
      {
        image: pic3,
        title: "لوحة إعلانية - طريق الجيش",
        location: "طريق الجيش - سيدي جابر - الإسكندرية",
        duration: "شهر واحد",
        price: "55,000 جنيه",
        size: "6 م × 3 م",
        status: "احجز الآن",
      },
      {
        image: pic2,
        title: "لوحة إعلانية - الطريق الصحراوي",
        location: "الطريق الصحراوي الإسكندرية القاهرة - الإسكندرية",
        duration: "شهر واحد",
        price: "45,000 جنيه",
        size: "6 م × 3 م",
        status: "احجز الآن",
      },
      {
        image: pic1,
        title: "لوحة إعلانية - كورنيش الإسكندرية",
        location: "كورنيش الإسكندرية - الإسكندرية",
        duration: "شهر واحد",
        price: "50,000 جنيه",
        size: "6 م × 3 م",
        status: "احجز الآن",
      },
    ],
  };

  const renderCards = (list) =>
    list.map((item, index) => (
      <div
        key={index}
        className="bg-white dark:bg-gray-900 rounded-lg shadow p-4 hover:shadow-lg transition"
      >
        <img
          src={item.image}
          className="w-full h-60 object-cover transform transition duration-300 hover:scale-105"
        />
        <h3 className="font-bold text-lg mb-2 mt-5">{item.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          {item.location}
        </p>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          المدة: {item.duration}
        </p>
        <p className="text-blue-600 dark:text-blue-400 font-semibold">
          {item.price}
        </p>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          المساحة: {item.size}
        </p>
        <button
          onClick={handleSubmit}
          className={`mt-3 w-full py-2 rounded cursor-pointer ${
            item.status === "احجز الآن"
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-400 text-white cursor-not-allowed"
          }`}
          disabled={item.status !== "احجز الآن"}
        >
          {item.status}
        </button>
      </div>
    ));
  return (
    <>
      <Nav />
      <div className="text-center py-12 px-6 bg-white bg-gradient-to-b dark:from-blue-950 dark:to-[#000000] rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          لوحات إعلانية للحجز
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          اختر اللوحة الإعلانية المناسبة لعلامتك التجارية
        </p>
      </div>
      <div className="py-10 px-6 container mx-auto text-right">
        <h2 className="text-2xl font-bold mb-6">الإسكندرية</h2>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mb-10">
          {renderCards(data.alex)}
        </div>
        <h2 className="text-2xl font-bold mb-6">القاهرة</h2>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 ">
          {renderCards(data.cairo)}
        </div>
      </div>
      <Footer />
    </>
  );
}

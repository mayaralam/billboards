import Nav from "../components/nav";
import we from "../assets/we.png";
import picwe from "../assets/picwe.jpg";
import { FaLightbulb, FaHandsHelping, FaBullseye } from "react-icons/fa";
import team from "../assets/team.png";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
export default function about() {
  const navigate = useNavigate();
  const values = [
    {
      icon: <FaLightbulb className="text-yellow-500 text-4xl mb-3 mx-auto" />,
      title: "الابتكار",
      description: "نستخدم أحدث التقنيات لخدمتك",
    },
    {
      icon: <FaHandsHelping className="text-blue-500 text-4xl mb-3 mx-auto" />,
      title: "الشفافية",
      description: "أسعار واضحة بدون رسوم خفية",
    },
    {
      icon: <FaBullseye className="text-red-500 text-4xl mb-3 mx-auto" />,
      title: "الجودة",
      description: "نلتزم بتقديم أفضل المواقع الإعلانية",
    },
  ];
  return (
    <>
      <div
        className="h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${we})` }}
      >
        <Nav />
        <div className="container mx-auto flex flex-col items-center text-center gap-4 px-4">
          <h3 className="mt-22 text-3xl font-bold text-white opacity-100 text-shadow-lg/70">
            من نحن
          </h3>
          <h2 className="text-white text-xl opacity-100 text-shadow-lg/70">
            شريكك الموثوق في حجز اللوحات الإعلانية
          </h2>
        </div>
      </div>
      <div className="bg-gray-50 dark:bg-gray-900">
        <div className="py-12 px-6 container mx-auto grid md:grid-cols-1 gap-8 items-center text-right">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              قصتنا
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              نحن منصة رائدة في مجال حجز اللوحات الإعلانية في الشرق الأوسط. نقدم
              خدماتنا منذ عام 2015. بدأنا رحلتنا بهدف تبسيط عملية الإعلان
              الخارجي .وجعلها في متناول جميع الشركات والأفراد
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              نوفر مجموعة واسعة من اللوحات الإعلانية في مواقع استراتيجية عبر
              المدن الرئيسية، مع تقنية حجز سهلة وشفافة تتيح لك اختيار الموقع
              المثالي لحملتك الإعلانية
            </p>
          </div>
          <div>
            <img
              src={picwe}
              alt="لوحة إعلانية"
              className="w-3xl h-full object-cover md:ml-60 ml-0 rounded-lg shadow-md transform transition duration-300 hover:scale-105"
            />
          </div>
          <div className="py-12 px-6 grid md:grid-cols-2 grid-cols-1 gap-6">
            <div className="bg-green-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-800">رِسالتنا</h3>
              <p className="text-gray-700 leading-relaxed">
                تمكين الشركات من الوصول إلى جمهورها المستهدف من خلال حلول
                إعلانية خارجية مبتكرة وفعّالة، مع الالتزام بأعلى معايير الجودة
                والشفافية.
              </p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-800">رُؤيتنا</h3>
              <p className="text-gray-700 leading-relaxed">
                أن نكون المنصة الأولى والأكثر ابتكاراً لحجز اللوحات الإعلانية في
                المنطقة، مع توفير تجربة سلسة ومتكاملة لعملائنا.
              </p>
            </div>
          </div>
        </div>
        <div className="py-12 px-6 container mx-auto rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
            قيمنا
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                {value.icon}
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
          <section className="py-12 px-6 md:px-16">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-5">
                فريقنا
              </h2>

              <div className="flex justify-center mb-8">
                <img
                  src={team}
                  alt="فريقنا"
                  className="rounded-lg shadow-lg w-full max-w-3xl"
                />
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                يتكون فريقنا من خبراء متخصصين في مجال الإعلان والتسويق، يعملون
                بشغف لتقديم أفضل الحلول الإعلانية لعملائنا
              </p>
            </div>
          </section>
        </div>
        <section className="container mx-auto rounded-lg bg-gradient-to-r from-blue-700 to-blue-900 text-white py-10 px-6 md:px-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <h3 className="text-3xl font-bold">+25</h3>
              <p className="text-lg mt-2">مدينة</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-3xl font-bold">1000+</h3>
              <p className="text-lg mt-2">عميل راضٍ</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="text-lg mt-2">لوحة إعلانية</p>
            </div>
          </div>
        </section>
        <section className="py-12 px-6 md:px-16">
          <div className="max-w-4xl mx-auto text-center bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-10">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              هل أنت مستعد للبدء؟
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              اتصل بنا اليوم لمعرفة كيف يمكننا مساعدتك في حملتك الإعلانية
              القادمة
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="bg-blue-600 cursor-pointer text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              تواصل معنا
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

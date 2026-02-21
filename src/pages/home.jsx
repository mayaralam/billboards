import Nav from "../components/nav";
import hpic from "../assets/hpic.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { FaChartLine, FaCalendarCheck, FaMapMarkedAlt } from "react-icons/fa";
import Footer from "../components/footer";
export default function home() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      city: "",
      boardType: "",
    },
    validationSchema: Yup.object({
      city: Yup.string().required("اختيار الموقع أو المدينة مطلوب"),
      boardType: Yup.string().required("اختيار نوع اللوحة مطلوب"),
    }),
    onSubmit: (values) => {
      console.log("بحث عن:", values);
    },
  });
  const features = [
    {
      icon: <FaChartLine className="text-blue-600 text-3xl mb-3" />,
      title: "تحليلات متقدمة",
      description:
        "احصل على تقارير تفصيلية عن أداء حملتك الإعلانية وعدد المشاهدات لتحسين استراتيجيتك",
    },
    {
      icon: <FaCalendarCheck className="text-blue-600 text-3xl mb-3" />,
      title: "حجز سريع وسهل",
      description:
        "نظام حجز إلكتروني متطور يتيح لك حجز لوحتك الإعلانية في دقائق معدودة دون أي تعقيدات",
    },
    {
      icon: <FaMapMarkedAlt className="text-blue-600 text-3xl mb-3" />,
      title: "مواقع استراتيجية",
      description:
        "اختر من بين مئات المواقع الاستراتيجية في أكثر الشوارع ازدحاماً لضمان وصول رسالتك للجمهور المستهدف",
    },
  ];
  const steps = [
    {
      number: "1",
      title: "اختر الموقع",
      description:
        "تصفح خريطتنا التفاعلية واختر الموقع الأنسب لحملتك الإعلانية",
    },
    {
      number: "2",
      title: "حدد الفترة",
      description: "اختر المدة الزمنية التي تناسب ميزانيتك وأهدافك التسويقية",
    },
    {
      number: "3",
      title: "أطلق حملتك",
      description: "ارفع تصميمك، أكمل الدفع، وابدأ عرض إعلانك على الفور",
    },
  ];
  return (
    <>
      <Nav />
      <div className="container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 items-center py-4 text-right">
        <div>
          <h1 className="font-bold md:text-5xl text-3xl mb-6 pr-7 mt-10">
            احجز لوحتك الإعلانية بسهولة
          </h1>
          <h6 className="text-xl text-gray-500 dark:text-gray-300 mb-3 p-7">
            الوصول إلى آلاف اللوحات الإعلانية في جميع أنحاء المدينة. احجز،
            وادفع، وابدأ حملتك الإعلانية في دقائق.
          </h6>
          <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow">
            <form onSubmit={formik.handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 dark:text-gray-300 text-gray-700">
                  اختر الموقع أو المدينة
                </label>
                <input
                  type="text"
                  name="city"
                  onChange={formik.handleChange}
                  value={formik.values.city}
                  className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-300"
                />
                {formik.errors.city && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.city}
                  </p>
                )}
              </div>
              <div>
                <label className="block mb-1 dark:text-gray-300 text-gray-700">
                  نوع اللوحة، الحجم، أو المنطقة
                </label>
                <input
                  type="text"
                  name="boardType"
                  onChange={formik.handleChange}
                  value={formik.values.boardType}
                  className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-300"
                />
                {formik.errors.boardType && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.boardType}
                  </p>
                )}
              </div>
              <button
                onClick={() => navigate("/billboards")}
                type="submit"
                className="w-full bg-blue-600 cursor-pointer text-white py-2 rounded hover:bg-blue-700 transition"
              >
                ابحث عن اللوحات المتاحة
              </button>
            </form>
            <div className="flex justify-between mt-6 text-center">
              <div>
                <p className="text-xl font-bold text-blue-600">2000+</p>
                <p className="dark:text-gray-300 text-gray-600">عميل سعيد</p>
              </div>
              <div>
                <p className="text-xl font-bold text-blue-600">50+</p>
                <p className="dark:text-gray-300 text-gray-600">مدينة</p>
              </div>
              <div>
                <p className="text-xl font-bold text-blue-600">5000+</p>
                <p className="dark:text-gray-300 text-gray-600">لوحة إعلانية</p>
              </div>
            </div>
          </div>
        </div>
        <img className="md:ml-20 ml-0 mt-7" src={hpic} />
      </div>
      <div className="bg-blue-50 dark:bg-gray-800 mt-7">
        <div className="container mx-auto py-10 px-6 rounded-lg shadow-md text-right">
          <h2 className="text-3xl font-bold text-center mb-2">
            لماذا تختار منصتنا؟
          </h2>
          <p className="text-center dark:text-gray-300 text-gray-600 mb-8">
            نوفر لك أفضل الخدمات لإنجاح حملتك الإعلانية
          </p>

          <div className="grid md:grid-cols-3 gap-6 p-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                {feature.icon}
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto py-10 px-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center mb-2">كيف يعمل؟</h2>
          <p className="text-center text-gray-600 mb-8 dark:text-gray-300">
            ثلاث خطوات بسيطة للبدء
          </p>

          <div className="grid md:grid-cols-3 gap-6 p-5">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow hover:shadow-lg transition text-center"
              >
                <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm dark:text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-blue-600 dark:bg-blue-800 text-white py-16 px-6 text-center rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4">
          هل أنت مستعد لإطلاق حملتك الإعلانية؟
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          انضم إلى مئات العلامات التجارية الناجحة التي اختارت منصتنا لإطلاق
          حملاتها الإعلانية
        </p>
        <button
          onClick={() => navigate("/billboards")}
          className="bg-white cursor-pointer text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
        >
          ابدأ مجاناً
        </button>
      </div>
      <Footer />
    </>
  );
}

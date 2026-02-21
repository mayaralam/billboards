import Nav from "../components/nav";
import call from "../assets/call.png";
import { toast } from "react-hot-toast";
import Footer from "../components/footer";
export default function contact() {
  const handleSubmit = () => {
    event.preventDefault();
    toast.success(".تم ارسال رسالتك بنجاح! سنعود إليك قريبًا");
  };
  return (
    <>
      <div
        className="h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${call})` }}
      >
        <Nav />
        <div className="container mx-auto flex flex-col items-center text-center gap-4 px-4">
          <h3 className="mt-22 text-3xl font-bold text-white opacity-100 text-shadow-lg/70">
            تواصل معنا
          </h3>
          <h2 className="text-white text-xl opacity-100 text-shadow-lg/70">
            نحن هنا للإجابة على جميع استفساراتكم
          </h2>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-900">
        <div className="container mx-auto grid md:grid-cols-2 grid-cols-1">
        <section
          onSubmit={handleSubmit}
          className="py-12 px-6 md:px-16 text-right"
        >
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              أرسل لنا رسالة
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 dark:text-gray-100 mb-2">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  placeholder="أدخل اسمك الكامل"
                  className="text-right w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-100 mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="text-right w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-100 mb-2">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  placeholder="+20 10 0000 0000"
                  className="text-right w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-100 mb-2">
                  الرسالة
                </label>
                <textarea
                  placeholder="اكتب رسالتك هنا..."
                  rows="4"
                  className="w-full text-right border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="cursor-pointer mb-35 bg-blue-600 text-white px-4.5 py-2.5 w-full rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                إرسال الرسالة
              </button>
            </form>
          </div>
        </section>
    <section className="py-12 px-6 md:px-16 text-right">
      <div className="max-w-4xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">معلومات الاتصال</h2>
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-100 mb-2">الهاتف</h3>
          <p className="text-gray-600 dark:text-gray-300">+20 3 123 4567</p>
          <p className="text-gray-600 dark:text-gray-300">+20 10 1234 5678</p>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-100 mb-2">البريد الإلكتروني</h3>
          <p className="text-gray-600 dark:text-gray-300">info@company.eg</p>
          <p className="text-gray-600 dark:text-gray-300">sales@company.eg</p>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-100 mb-2">العنوان</h3>
          <p className="text-gray-600 dark:text-gray-300">
            شارع فؤاد، حي الأزاريطة<br />
            الإسكندرية 21500، مصر
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-100 mb-2">ساعات العمل</h3>
          <p className="text-gray-600 dark:text-gray-300">الأحد - الخميس: 9:00 ص - 6:00 م</p>
          <p className="text-gray-600 dark:text-gray-300">الجمعة - السبت: مغلق</p>
        </div>
      </div>
    <section className="bg-blue-50 dark:bg-blue-900 py-12 px-6 md:px-16 mt-5">
      <div className="max-w-4xl mx-auto rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">لماذا تختارنا؟</h2>
        <ul className="space-y-4 text-gray-700 dark:text-gray-100 text-lg">
          <li>✓ أكثر من 500 موقع إعلاني في جميع أنحاء الجمهورية</li>
          <li>✓ أسعار تنافسية وعروض خاصة</li>
          <li>✓ فريق محترف لخدمة العملاء</li>
          <li>✓ تقارير وتحليلات تفصيلية</li>
        </ul>
      </div>
    </section>
    </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

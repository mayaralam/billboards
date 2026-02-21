import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import log from "../assets/log.jpg";
export default function login() {
  const navigate = useNavigate();
  const validationSchema = yup.object({
    email: yup
      .string()
      .required("مطلوب")
      .test(
        "is-valid",
        "أدخل بريدًا إلكترونيًا أو رقم هاتف صالحًا",
        (value) => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          const phoneRegex = /^[0-9]{10,15}$/;
          return emailRegex.test(value) || phoneRegex.test(value);
        },
      ),
    password: yup.string().required("مطلوب"),
  });
  const handleLogin = (values, { resetForm }) => {
    const { email, password } = values;
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (u) =>
        (u.email === email || u.phone === email) && u.password === password,
    );
    if (foundUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
      toast.success("!تم تسجيل الدخول بنجاح");
      resetForm();
      navigate("/");
    } else {
      toast.error("بريد إلكتروني أو كلمة مرور غير صحيحة");
    }
  };
  return (
    <>
      <div
        className="h-screen bg-center"
        style={{ backgroundImage: `url(${log})` }}
      >
        <section className="min-h-screen flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 relative overflow-hidden text-right">
            <div className="absolute inset-0 bg-white dark:bg-black bg-opacity-90 backdrop-blur-sm z-0 rounded-lg"></div>
            <div className="relative z-10">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-green-700 dark:text-green-600 mb-2">
                  تسجيل الدخول
                </h2>
              </div>
              <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={handleLogin}
                validationSchema={validationSchema}
              >
                <Form className="space-y-4">
                  <div>
                    <label className="block mb-1 font-semibold">
                      البريد الإلكتروني
                    </label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="example@email.com"
                      className="w-full border rounded px-4 py-2 text-right"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-600 text-sm mt-1"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-semibold">
                      كلمة المرور
                    </label>
                    <Field
                      type="password"
                      name="password"
                      placeholder="••••••••"
                      className="w-full border rounded px-4 py-2 text-right"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-600 text-sm mt-1"
                    />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2">
                      <Field type="checkbox" name="remember" />
                      <span>تذكرني</span>
                    </label>
                    <a
                      href="#"
                      className="text-green-700 dark:text-green-600 hover:underline"
                    >
                      نسيت كلمة المرور؟
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="w-full cursor-pointer bg-green-700 text-white py-2 rounded font-semibold hover:bg-green-800 transition"
                  >
                    سجل الآن
                  </button>
                </Form>
              </Formik>
              <p className="mt-6 text-sm text-center">
                ليس لديك حساب؟{" "}
                <a
                  href="/register"
                  className="text-green-700 dark:text-green-600 font-semibold hover:underline"
                >
                  إنشاء حساب جديد
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

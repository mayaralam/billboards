import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import log from "../assets/log.jpg";
export default function Register() {
  const navigate = useNavigate();
  const validationSchema = yup.object({
    fullName: yup.string().min(3, "الحد الأدنى 3 أحرف").required("مطلوب"),
    email: yup.string().email("البريد غير صالح").required("مطلوب"),
    password: yup.string().min(6, "الحد الأدنى 6 أحرف").required("مطلوب"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "كلمة المرور غير متطابقة")
      .required("مطلوب"),
    phone: yup
      .string()
      .matches(/^[0-9]{10,15}$/, "أدخل رقم هاتف صحيح")
      .required("مطلوب"),
  });
  const handleSubmit = (values, { resetForm }) => {
    const newUser = {
      fullName: values.fullName,
      email: values.email,
      password: values.password,
      phone: values.phone,
    };
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    toast.success("!التسجيل ناجح");
    resetForm();
    navigate("/login");
  };
  return (
    <>
      <div
        className="h-full bg-center"
        style={{ backgroundImage: `url(${log})` }}
      >
        <section className="min-h-screen flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 relative overflow-hidden text-right">
            <div className="absolute inset-0 bg-white dark:bg-black bg-opacity-90 backdrop-blur-sm z-0 rounded-lg"></div>
            <div className="relative z-10">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-green-700 dark:text-green-600 mb-2">
                  إنشاء حساب جديد
                </h2>
              </div>
              <Formik
                initialValues={{
                  fullName: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                  phone: "",
                }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
              >
                {() => (
                  <Form className="space-y-4">
                    <div>
                      <label className="block mb-1 font-semibold">
                        الاسم الكامل
                      </label>
                      <Field
                        type="text"
                        name="fullName"
                        placeholder="أدخل اسمك الكامل"
                        className="w-full border rounded px-4 py-2 text-right"
                      />
                      <ErrorMessage
                        name="fullName"
                        component="div"
                        className="text-red-600 text-sm mt-1"
                      />
                    </div>
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
                    <div>
                      <label className="block mb-1 font-semibold">
                        تأكيد كلمة المرور
                      </label>
                      <Field
                        type="password"
                        name="confirmPassword"
                        placeholder="••••••••"
                        className="w-full border rounded px-4 py-2 text-right"
                      />
                      <ErrorMessage
                        name="confirmPassword"
                        component="div"
                        className="text-red-600 text-sm mt-1"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 font-semibold">
                        رقم الهاتف
                      </label>
                      <Field
                        type="text"
                        name="phone"
                        placeholder="أدخل رقم هاتفك"
                        className="w-full border rounded px-4 py-2 text-right"
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="text-red-600 text-sm mt-1"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full cursor-pointer bg-green-700 text-white py-2 rounded font-semibold hover:bg-green-800 transition"
                    >
                      إنشاء الحساب
                    </button>
                  </Form>
                )}
              </Formik>
              <p className="mt-6 text-sm text-center">
                لديك حساب بالفعل؟{" "}
                <a
                  href="/login"
                  className="text-green-700 dark:text-green-600 font-semibold hover:underline"
                >
                  تسجيل الدخول
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default function Footer() {
  return (
    <footer className="container mx-auto text-white py-10 px-6 text-right">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-lg font-bold mb-3 dark:text-gray-300 text-gray-600">
            تواصل معنا
          </h3>
          <ul className="space-y-2 dark:text-gray-300 text-gray-600 text-sm">
            <li>البريد: info@billboard.com</li>
            <li>الهاتف: +20-100-123-4567</li>
            <li>العنوان: الاسكندرية، مصر</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-3 dark:text-gray-300 text-gray-600">
            الخدمات
          </h3>
          <ul className="space-y-2 dark:text-gray-300 text-gray-600 text-sm">
            <li>لوحات خارجية</li>
            <li>لوحات رقمية</li>
            <li>لوحات المطارات</li>
            <li>لوحات المولات</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-3 dark:text-gray-300 text-gray-600">
            الشركة
          </h3>
          <ul className="space-y-2 text-sm dark:text-gray-300 text-gray-600">
            <li>من نحن</li>
            <li>فريق العمل</li>
            <li>الوظائف</li>
            <li>المدونة</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg dark:text-gray-300 text-gray-600 font-bold mb-3">
            لوحات إعلانية
          </h3>
          <p className="dark:text-gray-300 text-gray-600 text-sm">
            منصتك الموثوقة لحجز اللوحات الإعلانية في جميع أنحاء المنطقة. نوفر لك
            أفضل المواقع لتحقيق أقصى تأثير لحملتك.
          </p>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-4 text-center dark:text-gray-300 text-gray-500 text-sm">
        © 2026 لوحة إعلانية. جميع الحقوق محفوظة. <br />© 2026 Advertising Board.
        All rights reserved.
      </div>
    </footer>
  );
}

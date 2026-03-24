import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-right">
          <div className="md:col-span-2 flex flex-col items-center md:items-start space-y-4">
            <Link to="/" className="flex flex-col items-center md:items-start gap-4 mb-4 group transition-transform hover:scale-105">
              <img 
                src="/images/logo_circle.png" 
                alt="Shaked Tayeb Logo" 
                className="h-20 w-20 object-contain" 
              />
              <div className="flex flex-col items-center md:items-start">
                <span className="text-2xl font-serif font-bold tracking-tighter text-white leading-tight">
                  SHAKED TAYEB
                </span>
                <span className="text-[11px] tracking-[0.25em] font-serif text-white/60 uppercase">
                   קוסמטיקאית מוסמכת
                </span>
              </div>
            </Link>
            <p className="text-white/60 max-w-md leading-relaxed">
              קוסמטיקאית מוסמכת ושחזור אסתטי. דגש על אסתטיקה, דיוק ותוצאות טבעיות.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">ניווט מהיר</h4>
            <ul className="space-y-4 text-white/70">
              <li><Link to="/" className="hover:text-primary transition-colors">ראשי</Link></li>
              <li><Link to="/treatments" className="hover:text-primary transition-colors">טיפולים</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">מוצרים</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">יצירת קשר</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">צרי קשר</h4>
            <ul className="space-y-4 text-white/70">
              <li>כתובת כתובת</li>
              <li>05X-XXXXXXX</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 text-center text-white/40 text-sm">
          <p>© {new Date().getFullYear()} SHAKED TAYEB. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
}

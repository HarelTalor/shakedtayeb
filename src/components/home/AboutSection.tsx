import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-brand opacity-20 blur-2xl rounded-full group-hover:opacity-30 transition-opacity" />
              <img 
                src="/images/about_portrait.jpg" 
                alt="שקד טייב - קוסמטיקאית מוסמכת"
                className="relative rounded-3xl w-full max-w-md mx-auto shadow-2xl z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white p-4 rounded-2xl shadow-xl z-20 hidden md:block border border-primary/5">
                <img src="/images/logo_circle.png" alt="לוגו" className="w-full h-full object-contain" />
              </div>
            </div>

          <div className="max-w-xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">קצת עליי</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary leading-tight mb-8">
              שקד טייב <br /> 
              <span className="text-accent underline decoration-accent/30 decoration-4 underline-offset-8 decoration-wavy">קוסמטיקאית מוסמכת</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p className="font-bold text-primary">
                שקד טייב – קוסמטיקאית מוסמכת ואמנות האיפור הקבוע.
              </p>
              <p>
                [טקסט דמה: כאן יופיע פירוט על שנות הניסיון, ההכשרות הבינלאומיות והתשוקה לחדשנות וטכנולוגיה בתחום הפיגמנטים. המידע יושלם בגרסה הסופית של האתר כדי לשמור על דיוק מקצועי.]
              </p>
              <p>
                [טקסט דמה נוסף: כאן יופיע מידע על הגישה המקצועית, חשיבות הדיוק והשאיפה למצוינות בכל טיפול וטיפול.]
              </p>
            </div>
            <div className="mt-10 pt-8 border-t border-border">
              <Button size="lg" className="rounded-full px-8 py-6 text-lg font-bold gradient-brand shadow-lg">
                <a href="https://wa.me/9725XXXXXXXX" target="_blank" rel="noreferrer">
                  לתיאום פגישת ייעוץ
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

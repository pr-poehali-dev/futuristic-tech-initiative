import Icon from "@/components/ui/icon"

const courses = [
  {
    title: "Цигун для начинающих",
    description: "Базовые практики работы с энергией Ци. Освоите дыхательные техники, статические и динамические упражнения для укрепления здоровья.",
    duration: "8 недель",
    level: "Начальный",
    price: "от 4 900 ₽",
  },
  {
    title: "Имидж-медицина и энергетика образа",
    description: "Уникальная методика соединения традиционной китайской медицины и имиджелогии. Восстановление баланса через работу с внешним и внутренним образом.",
    duration: "12 недель",
    level: "Средний",
    price: "от 9 900 ₽",
  },
  {
    title: "Медицинский цигун",
    description: "Углублённый курс терапевтических практик цигун. Работа с меридианами, точечный массаж, восстановление органов и систем организма.",
    duration: "16 недель",
    level: "Продвинутый",
    price: "от 14 900 ₽",
  },
]

const Index = () => {
  return (
    <div className="relative bg-black overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-screen object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://res.cloudinary.com/doevp9obh/video/upload/v1751630378/social_u7865913127_httpss.mj.runfy9I6hP3bjY_A_serene_cinematic_anima_3732f431-944f-4ee3-9b66-c82c1462de47_1_vjttzg.mp4"
          type="video/mp4"
        />
      </video>

      {/* Video Overlay */}
      <div className="absolute inset-0 h-screen bg-black/40 z-0" />

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-sm py-4 px-6">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <div className="text-white font-serif text-xl tracking-wide">
            АЦиМ
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-8 text-white/90 font-sans text-sm font-light">
            <a href="#courses" className="hover:text-white transition-colors duration-300">
              Курсы
            </a>
            <a href="#about" className="hover:text-white transition-colors duration-300">
              О нас
            </a>
            <a href="#contacts" className="hover:text-white transition-colors duration-300">
              Контакты
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl fade-in">
            <p className="font-sans text-white/70 text-sm font-light tracking-widest uppercase mb-4">
              Ассоциация развития цигун и имидж медицины
            </p>
            <h1 className="font-serif text-white text-4xl lg:text-6xl font-normal tracking-tight mb-8">
              Гармония тела, энергии и <em>образа</em>
            </h1>
            <p className="font-sans text-gray-200 text-lg lg:text-xl font-light leading-relaxed mb-12 max-w-xl">
              Обучающие программы по цигун и имидж-медицине — древние практики в современном формате для здоровья, баланса и раскрытия потенциала.
            </p>
            <a href="#courses">
              <button className="bg-white text-gray-900 font-sans font-medium px-8 py-3 rounded-lg text-base hover:bg-gray-100 hover:scale-105 hover:shadow-lg transition-all duration-300">
                Смотреть курсы
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div id="courses" className="relative z-10 bg-stone-950 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-white/50 text-sm tracking-widest uppercase mb-3">Обучение</p>
            <h2 className="font-serif text-white text-3xl lg:text-5xl font-normal">
              Наши курсы
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col hover:bg-white/8 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-xs font-sans text-white/50 bg-white/10 px-3 py-1 rounded-full">
                    {course.level}
                  </span>
                </div>
                <h3 className="font-serif text-white text-xl font-normal mb-4">
                  {course.title}
                </h3>
                <p className="font-sans text-white/60 text-sm font-light leading-relaxed mb-8 flex-1">
                  {course.description}
                </p>
                <div className="flex items-center gap-4 mb-6 text-white/40 text-sm font-sans">
                  <span className="flex items-center gap-1.5">
                    <Icon name="Clock" size={14} />
                    {course.duration}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-white font-medium">{course.price}</span>
                  <button className="bg-white text-gray-900 font-sans font-medium text-sm px-5 py-2.5 rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300">
                    Записаться
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="relative z-10 bg-stone-900 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-sans text-white/50 text-sm tracking-widest uppercase mb-3">О нас</p>
              <h2 className="font-serif text-white text-3xl lg:text-4xl font-normal mb-6">
                Соединяем традицию и современность
              </h2>
              <p className="font-sans text-white/60 text-base font-light leading-relaxed mb-6">
                Ассоциация развития цигун и имидж медицины объединяет практиков, преподавателей и исследователей традиционных оздоровительных систем Китая.
              </p>
              <p className="font-sans text-white/60 text-base font-light leading-relaxed">
                Наши программы сочетают тысячелетний опыт восточной медицины с современными методиками имиджелогии и психосоматики.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "Users", label: "Студентов обучено", value: "1 200+" },
                { icon: "BookOpen", label: "Авторских курсов", value: "12" },
                { icon: "Award", label: "Лет на рынке", value: "8" },
                { icon: "Globe", label: "Стран-участников", value: "5" },
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                  <Icon name={stat.icon} fallback="Circle" size={24} className="text-white/40 mx-auto mb-3" />
                  <div className="font-serif text-white text-2xl mb-1">{stat.value}</div>
                  <div className="font-sans text-white/50 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div id="contacts" className="relative z-10 bg-black py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-serif text-white/70 text-lg">АЦиМ</div>
          <p className="font-sans text-white/40 text-xs font-light">
            © 2025 Ассоциация развития цигун и имидж медицины. Все права защищены.
          </p>
          <div className="flex items-center gap-6 text-white/40 text-xs font-sans">
            <a href="#" className="hover:text-white/70 transition-colors">info@acim.ru</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
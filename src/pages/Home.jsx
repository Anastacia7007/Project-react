import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>

      {/* TITLE */}
      <section className="section pre-hero-title">
        <h2>Deutsch mit Mirtschuk</h2>
        <p>
          Индивидуальные и групповые программы для детей, подростков и взрослых
        </p>
      </section>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg"></div>

        <div className="hero-text">
          <h1>Немецкий язык без стресса</h1>

          <p>
            Индивидуальная система обучения уровня европейских школ и Skyeng-формата
          </p>

          <Link to="/courses" className="btn">
            Начать обучение
          </Link>
        </div>
      </section>

      {/* MINI ABOUT */}
      <section className="section">

        <div className="mini-about-grid">

          {/* ✅ ИСПРАВЛЕННАЯ КАРТИНКА */}
          <div
            className="mini-about-photo"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + "/images/photo_2026-05-26_22-41-37.jpg"})`
            }}
          />

          <div className="mini-about-text">

            <span className="mini-tag">
              ✦ преподаватель немецкого языка
            </span>

            <h2>
              Немецкий — это не зубрёжка, а живая речь и уверенность
            </h2>

            <p>
              Уже более 10 лет я помогаю детям, подросткам и взрослым изучать немецкий
              спокойно, системно и без давления.
            </p>

            <p>
              На занятиях мы делаем упор на разговорную практику,
              современную лексику и реальные ситуации.
            </p>

            <div className="mini-about-stats">

              <div className="mini-stat">
                <strong>1000+</strong>
                <span>учеников</span>
              </div>

              <div className="mini-stat">
                <strong>10+</strong>
                <span>лет опыта</span>
              </div>

              <div className="mini-stat">
                <strong>4.9★</strong>
                <span>средняя оценка</span>
              </div>

            </div>

            <Link to="/about" className="btn">
              Подробнее обо мне
            </Link>

          </div>

        </div>
      </section>

      {/* TRUST */}
      <section className="section">
        <h2>Почему студенты выбирают меня</h2>

        <div className="grid-4">
          <div className="card">🇩🇪 10+ лет преподавания</div>
          <div className="card">📘 Goethe Institut подготовка</div>
          <div className="card">🎯 90%+ успешных экзаменов</div>
          <div className="card">🧠 Индивидуальная программа</div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="section">
        <h2>Результаты учеников</h2>

        <div className="grid-3">
          <div className="card">
            <h3>1000+</h3>
            <p>учеников прошли обучение</p>
          </div>

          <div className="card">
            <h3>93%</h3>
            <p>улучшили результат за 2–3 месяца</p>
          </div>

          <div className="card">
            <h3>4.9★</h3>
            <p>средняя оценка занятий</p>
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section className="section">
        <h2>Как проходит обучение</h2>

        <div className="grid-3">
          <div className="card">
            <h3>1. Диагностика</h3>
            <p>Определяем уровень и цели</p>
          </div>

          <div className="card">
            <h3>2. Индивидуальный план</h3>
            <p>Программа под ваш результат</p>
          </div>

          <div className="card">
            <h3>3. Практика</h3>
            <p>Разговор, грамматика, реальная речь</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <h2>Готовы начать?</h2>
        <p>Первый шаг — выбрать подходящий курс</p>

        <Link to="/courses" className="course-btn">
          Перейти к программам
        </Link>
      </section>

    </div>
  );
}
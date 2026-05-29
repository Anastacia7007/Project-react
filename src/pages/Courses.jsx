import { Link } from "react-router-dom";

export default function Courses() {
  return (
    <div>

      {/* HERO */}
      <section className="section">
        <h1>Программы обучения</h1>
        <p className="courses-subtitle">
          Современные курсы немецкого языка для любого возраста, уровня и целей
        </p>
      </section>

      {/* COURSES */}
      <section className="section">

        <div className="grid-3">

          <div className="card course-card">
            <div className="tag">5–6 лет</div>
            <div className="icon">🧸</div>
            <h3>Для малышей</h3>
            <p>Первые шаги через игры, музыку и визуальное обучение</p>
            <Link className="course-btn" to="/application">Выбрать курс</Link>
          </div>

          <div className="card course-card">
            <div className="tag">7–13 лет</div>
            <div className="icon">🎒</div>
            <h3>Для детей</h3>
            <p>Грамматика, словарный запас и разговорная практика</p>
            <Link className="course-btn" to="/application">Выбрать курс</Link>
          </div>

          <div className="card course-card">
            <div className="tag">10–17 лет</div>
            <div className="icon">🎧</div>
            <h3>Для подростков</h3>
            <p>Подготовка к экзаменам и свободное общение</p>
            <Link className="course-btn" to="/application">Выбрать курс</Link>
          </div>

          <div className="card course-card">
            <div className="tag">18–50 лет</div>
            <div className="icon">💼</div>
            <h3>Для взрослых</h3>
            <p>Немецкий для карьеры, переезда и путешествий</p>
            <Link className="course-btn" to="/application">Выбрать курс</Link>
          </div>

          <div className="card course-card">
            <div className="tag">IELTS</div>
            <div className="icon">📘</div>
            <h3>Подготовка к IELTS</h3>
            <p>Стратегии, speaking и writing практика</p>
            <Link className="course-btn" to="/application">Выбрать курс</Link>
          </div>

          <div className="card course-card">
            <div className="tag">ОГЭ / ЕГЭ</div>
            <div className="icon">🎓</div>
            <h3>Экзамены</h3>
            <p>Разбор формата и интенсивная подготовка</p>
            <Link className="course-btn" to="/application">Выбрать курс</Link>
          </div>

        </div>
      </section>

      {/* DISCOUNT */}
      <section className="section discount">

        <h2>🎉 Скидка 20% на первый месяц</h2>

        <form className="discount-form">
          <input placeholder="Имя" required />
          <input placeholder="Фамилия" required />
          <input placeholder="Email" required />

          <button className="btn" type="submit">
            Оставить заявку
          </button>
        </form>

      </section>

      {/* FORMATS */}
      <section className="section">

        <h2>Форматы занятий</h2>

        <div className="grid-3">

          <div className="card">
            <div>3–6 чел</div>
            <div className="icon">👥</div>
            <h3>Групповые занятия</h3>
            <p>Разговорная практика</p>
            <p>Работа в мини-группах</p>
            <p>Интерактивные задания</p>
            <p>Современные материалы</p>
            <div>60–90 мин</div>
          </div>

          <div className="card">
            <div>1 человек</div>
            <div className="icon">👤</div>
            <h3>Индивидуальные уроки</h3>
            <p>Персональная программа</p>
            <p>Максимум практики</p>
            <p>Гибкий график</p>
            <p>Быстрый прогресс</p>
            <div>60 мин</div>
          </div>

          <div className="card">
            <div>5–10 чел</div>
            <div className="icon">📚</div>
            <h3>Книжный клуб</h3>
            <p>Чтение литературы</p>
            <p>Обсуждение текстов</p>
            <p>Новая лексика</p>
            <p>Speaking практика</p>
            <div>1 раз в неделю</div>
          </div>

        </div>
      </section>

    </div>
  );
}
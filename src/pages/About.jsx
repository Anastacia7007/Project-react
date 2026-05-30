import { useEffect, useState } from "react";

export default function About() {
  const images = [
    "/Project-react/images/photo_2026-05-26_22-41-37.jpg",
    "/Project-react/images/photo_2026-05-26_22-42-45.jpg",
    "/Project-react/images/photo_2026-05-26_22-45-15.jpg"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>

      {/* ABOUT HERO */}
      <section className="section">

        <div className="about-layout">

          {/* LEFT PHOTO */}
          <div className="about-photo">

            <div className="photo-slider">

              {images.map((img, i) => (
                <div
                  key={i}
                  className={`slide ${i === index ? "active" : ""}`}
                  style={{
                    backgroundImage: `url(${img})`
                  }}
                />
              ))}

            </div>

          </div>

          {/* RIGHT INFO */}
          <div className="about-info">

            <h1>Обо мне</h1>

            <p className="about-text">
              Преподаватель немецкого языка с опытом более 10 лет.
              Помогаю ученикам свободно говорить, успешно сдавать экзамены
              и использовать язык в жизни, работе и путешествиях.
            </p>

            <p className="about-text">
              Работаю по современным европейским методикам обучения.
              Подготовка к Goethe Zertifikat, ЕГЭ, ОГЭ, IELTS и уровням A1–C1.
            </p>

            <a href="/Project-react/courses" className="course-btn">
              Выбрать курс
            </a>

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="section">

        <h2>Почему ученики выбирают меня</h2>

        <div className="grid-4">

          <div className="card">
            <h3>10+</h3>
            <p>лет преподавания</p>
          </div>

          <div className="card">
            <h3>1000+</h3>
            <p>учеников</p>
          </div>

          <div className="card">
            <h3>93%</h3>
            <p>улучшили результаты</p>
          </div>

          <div className="card">
            <h3>4.9★</h3>
            <p>средняя оценка</p>
          </div>

        </div>

      </section>

      {/* EDUCATION */}
      <section className="section">

        <h2>Образование и квалификация</h2>

        <div className="grid-3">

          <div className="card edu-card">
            <img src="/Project-react/images/ufu.jpg" className="edu-img" alt="ЮФУ" />
            <h3>ЮФУ</h3>
            <p>Лингвистика<br />2012 — 2016</p>
          </div>

          <div className="card edu-card">
            <img src="/Project-react/images/GOETHE-INSTITUT_0.jpg" className="edu-img" alt="Goethe" />
            <h3>Goethe Zertifikat C1</h3>
            <p>Международная сертификация немецкого языка</p>
          </div>

          <div className="card edu-card">
            <img src="/Project-react/images/6318253880.jpg" className="edu-img" alt="Germany internship" />
            <h3>Стажировка в Германии</h3>
            <p>Практика преподавания и языковая среда</p>
          </div>

        </div>

      </section>

    </div>
  );
}
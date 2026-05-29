import { useState } from "react";

export default function Reviews() {
  const [reviews, setReviews] = useState([
    {
      text: "Очень понятное объяснение, наконец-то разобрался в грамматике.",
      user: "Алина, 17 лет",
      stars: 5,
    },
    {
      text: "Сдал ОГЭ на 5, хотя раньше не понимал английский вообще.",
      user: "Кирилл",
      stars: 5,
    },
    {
      text: "Очень комфортные занятия, без стресса и с результатом.",
      user: "Мария",
      stars: 5,
    },
    {
      text: "IELTS стал не страшным. Спасибо за подготовку!",
      user: "Даниил",
      stars: 5,
    },
    {
      text: "Появилась уверенность в разговорной речи.",
      user: "София",
      stars: 5,
    },
    {
      text: "Очень живые уроки, не скучно вообще.",
      user: "Иван",
      stars: 5,
    },
  ]);

  const [input, setInput] = useState("");
  const [showModal, setShowModal] = useState(false);

  const sendReview = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    setReviews([
      ...reviews,
      {
        text: input,
        user: "Новый ученик",
        stars: 5,
      },
    ]);

    setInput("");
    setShowModal(true);
  };

  return (
    <div>

      {/* HEADER */}
      <section className="section">
        <h1>Отзывы учеников</h1>
        <p>Реальные впечатления студентов</p>

        <div className="grid-3 review-grid">
          {reviews.map((r, index) => (
            <div className="card review-card" key={index}>
              <div className="review-stars">
                {"⭐".repeat(r.stars)}
              </div>
              <p>{r.text}</p>
              <span className="review-user">— {r.user}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section className="section">
        <div className="review-form">

          <form onSubmit={sendReview}>
            <input
              type="text"
              placeholder="Оставьте отзыв"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              required
            />

            <div className="review-btn-wrap">
              <button className="btn review-btn-special" type="submit">
                Оставить отзыв
              </button>
            </div>
          </form>

        </div>
      </section>

      {/* MODAL */}
      {showModal && (
        <div className="modal show">
          <div className="modal-content">
            <h3>💜 Спасибо за ваш отзыв!<br />Мне безумно приятно</h3>
            <button className="btn" onClick={() => setShowModal(false)}>
              Ок
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
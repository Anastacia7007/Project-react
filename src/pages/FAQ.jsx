import { useState } from "react";

export default function FAQ() {
  const [questions, setQuestions] = useState([
    { q: "Сколько длится урок?", a: "60 минут" },
    { q: "Есть пробный урок?", a: "Да, бесплатный" },
    { q: "Формат занятий?", a: "Онлайн индивидуально" },
  ]);

  const [input, setInput] = useState("");

  const addQuestion = () => {
    if (!input.trim()) return;

    setQuestions([
      ...questions,
      { q: input, a: "Вопрос будет рассмотрен" },
    ]);

    setInput("");
  };

  return (
    <div>

      {/* FAQ SECTION */}
      <section className="section">
        <h1>Часто задаваемые вопросы</h1>

        <div id="faqList">

          {questions.map((item, index) => (
            <div className="faq-item" key={index}>
              <div className="faq-q">{item.q}</div>
              <div className="faq-a">{item.a}</div>
            </div>
          ))}

        </div>

        {/* ADD QUESTION */}
        <div className="faq-add form">
          <input
            type="text"
            placeholder="Ваш вопрос"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button className="btn" onClick={addQuestion}>
            Добавить вопрос
          </button>
        </div>

      </section>

    </div>
  );
}
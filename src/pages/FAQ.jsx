import { useState } from "react";

export default function FAQ() {
  const [questions, setQuestions] = useState([
    { q: "Сколько длится урок?", a: "60 минут" },
    { q: "Есть пробный урок?", a: "Да, бесплатный" },
    { q: "Формат занятий?", a: "Онлайн индивидуально" },
  ]);

  const [input, setInput] = useState("");

  const [openIndex, setOpenIndex] = useState(null);

  const addQuestion = () => {
    if (!input.trim()) return;

    setQuestions([
      ...questions,
      { q: input, a: "Вопрос будет рассмотрен" },
    ]);

    setInput("");
  };

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>

      <section className="section">
        <h1>Часто задаваемые вопросы</h1>

        <div id="faqList">

          {questions.map((item, index) => (
            <div
              className={`faq-item ${openIndex === index ? "active" : ""}`}
              key={index}
            >
              <div
                className="faq-q"
                onClick={() => toggleQuestion(index)}
                style={{ cursor: "pointer" }}
              >
                {item.q}
              </div>

              {openIndex === index && (
                <div className="faq-a">
                  {item.a}
                </div>
              )}
            </div>
          ))}

        </div>

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
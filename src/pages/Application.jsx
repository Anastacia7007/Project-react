import { useState } from "react";

export default function Application() {
  const [isOpen, setIsOpen] = useState(false);

  const sendForm = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>

      {/* HEADER */}
      <section className="section reveal">
        <h1>Оставить заявку</h1>
        <p>Мы подберём для вас идеальный курс</p>
      </section>

      {/* FORM */}
      <section className="section reveal">

        <div className="application-card">

          <form className="application-form" onSubmit={sendForm}>

            <input type="text" placeholder="Имя" required />
            <input type="text" placeholder="Фамилия" required />

            <input type="tel" placeholder="Телефон" required />
            <input type="email" placeholder="Email" required />

            <select required>
              <option value="">Выберите курс</option>
              <option>Для малышей (5–6 лет)</option>
              <option>Для детей (7–13 лет)</option>
              <option>Для подростков (10–17 лет)</option>
              <option>Для взрослых (18–50 лет)</option>
              <option>IELTS</option>
              <option>ОГЭ / ЕГЭ</option>
            </select>

            <button className="btn" type="submit">
              Отправить заявку
            </button>

          </form>

        </div>

      </section>

      {/* MODAL */}
      {isOpen && (
        <div className="modal show">
          <div className="modal-content">
            <h3>✅ Ваша заявка успешно отправлена</h3>

            <button className="btn" onClick={closeModal}>
              Ок
            </button>

          </div>
        </div>
      )}

    </div>
  );
}
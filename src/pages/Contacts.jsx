import { Link } from "react-router-dom";

export default function Contacts() {
  return (
    <div>

      {/* CONTENT */}
      <section className="section">
        <h1>Контакты</h1>
        <p>Свяжитесь со мной удобным способом</p>

        <div className="contacts-grid">

          <div className="card">
            <h3>Email</h3>
            <p>teacher@mail.com</p>
            <button className="btn">Написать</button>
          </div>

          <div className="card">
            <h3>Telegram</h3>
            <p>@teacher</p>
            <button className="btn">Открыть</button>
          </div>

          <div className="card">
            <h3>WhatsApp</h3>
            <p>+7 (999) 000-00-00</p>
            <button className="btn">Написать</button>
          </div>

          <div className="card">
            <h3>Instagram</h3>
            <p>@teacher</p>
            <button className="btn">Открыть</button>
          </div>

          <div className="card">
            <h3>YouTube</h3>
            <p>youtube.com/@teacher</p>
            <button className="btn">Смотреть</button>
          </div>

          <div className="card">
            <h3>VK</h3>
            <p>vk.com/teacher</p>
            <button className="btn">Открыть</button>
          </div>

        </div>
      </section>

    </div>
  );
}
import React from 'react';
import '../styles/HomePage.scss';

function HomePage() {
  return (
    <div className="home-page">
      {/* Header */}
      <header className="home-header">
        <h1 className="home-header__title">Welcome to FER English</h1>
        <p className="home-header__subtitle">Your Journey to English Proficiency Begins Here</p>
      </header>

      {/* About Section */}
      <section id="about" className="section about">
        <h2 className="section__title">About Us</h2>
        <p className="section__content">
          FER English is dedicated to helping students of all levels improve their English skills. We offer a range of courses tailored to fit your learning goals, whether for business, travel, or academic purposes.
        </p>
        <img src="about-image.jpg" alt="About FER English" className="about__image" />
      </section>

      {/* Courses Section */}
      <section id="courses" className="section courses">
        <h2 className="section__title">Our Courses</h2>
        <div className="courses__list">
          <div className="courses__item">
            <h3>Basic English</h3>
            <p>Perfect for beginners to start their journey with English.</p>
          </div>
          <div className="courses__item">
            <h3>Conversational English</h3>
            <p>Boost your confidence in speaking English in real-life situations.</p>
          </div>
          <div className="courses__item">
            <h3>IELTS Preparation</h3>
            <p>Intensive training to help you achieve a high score in IELTS.</p>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section id="instructors" className="section instructors">
        <h2 className="section__title">Meet Our Instructors</h2>
        <div className="instructors__list">
          <div className="instructors__item">
            <img src="instructor1.jpg" alt="Instructor A" />
            <h3>Instructor A</h3>
            <p>Specialist in conversational English with over 10 years of experience.</p>
          </div>
          <div className="instructors__item">
            <img src="instructor2.jpg" alt="Instructor B" />
            <h3>Instructor B</h3>
            <p>IELTS expert, known for helping students reach their target scores.</p>
          </div>
          <div className="instructors__item">
            <img src="instructor3.jpg" alt="Instructor C" />
            <h3>Instructor C</h3>
            <p>Highly experienced in teaching English for business purposes.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;

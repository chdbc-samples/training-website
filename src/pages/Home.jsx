function Home() {
  return (
    <main className="container py-4 flex-grow-1">
      <section>
        <h3 className="h3 text-success">Ласкаво просимо!</h3>
        <p>Вітаємо на сайті про зайців!</p>
        <p>Дізнайтеся більше про їхню морфологію, харчування та популяцію, відвідавши відповідні розділи і фотогалерею.</p>
        <img 
          src="https://tut-cikavo.com/images/7_new/young-hare.jpg" 
          alt="Зайці на лузі" 
          className="img-fluid rounded my-4"
        />
      </section>
    </main>
  );
}

export default Home;
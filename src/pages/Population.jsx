function Population() {
  return (
    <main className="container py-4 flex-grow-1">
      <section>
        <h2 className="h2 text-success mb-4">Популяція зайців</h2>
        <p>Зайці поширені у багатьох частинах світу, включаючи Європу, Азію, Північну Америку та Африку. Вони адаптувалися до різних середовищ існування.</p>
        <ul className="list-group">
          <li className="list-group-item">Деякі види мають стабільну популяцію.</li>
          <li className="list-group-item">Інші види перебувають під загрозою через втрату середовища існування.</li>
          <li className="list-group-item">Зайці є важливою частиною харчового ланцюга.</li>
        </ul>
      </section>
    </main>
  );
}

export default Population;
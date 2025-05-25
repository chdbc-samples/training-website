function Morphology() {
  return (
    <main className="container px-4 py-4">
      <article>
        <section>
          <h3 className="h3 text-success">Зовнішній вигляд</h3>
          <p>Косатка (Orcinus orca) - це зубатий кит, що належить до сімейства океанічних дельфінів. Це найбільший представник цієї родини.</p>
        </section>
        <section>
          <h3 className="h3 text-success">Особливості будови</h3>
          <ul>
           <li>Забарвлення спини і боків у косатки чорне, горло біле, на череві — біла подовжня смуга. У деяких форм антарктичних косаток спина темніша від боків.</li>
           <li>На спині, позаду спинного плавника, є сіра сідлоподібна пляма. Над кожним оком є по одній білій плямі.</li>
           <li>Форма плям у косаток настільки індивідуальна, що дозволяє ідентифікувати окремі особини. Крім того, на півночі Тихого океану зустрічаються повністю чорні (меланісти) і білі (альбіноси) особини.</li>
          </ul>
        </section>
        <figure className="text-center">
          <img src="/images/photo_4_2025-05-25_12-25-04.jpg" alt="Косатка" className="img-fluid rounded my-4"/>
          <figcaption className="text-muted">Косатка</figcaption>
        </figure>
      </article>
    </main>
  );
}

export default Morphology;
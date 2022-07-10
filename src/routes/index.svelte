<input type="search" placeholder="buscar producto" />
<button>Buscar</button>

<h1>Sunny Shop Margarita by Gaby & Nina</h1>
<h3>Tienda online</h3>
<img
  src="/tienda online.jpg"
  alt="logo de la tienda"
  width="200"
  height="200"
/>

<p id="contactos">
  Correo: <a href="mailto:ivanovichrondon@gmail.com" target="_blank"
    >ivanovichrondon@gmail.com</a
  >
</p>
<p>Teléfono: <a href="tel:+584141885294" target="_blank">+584141885294</a></p>

<p>
  Sunny shop es la tienda que cree con mi mejor amiga, donde vendemos articulos
  de belleza y joyeria de excelente calidad elaboradas con mucho amor. Algunos
  de nuestros productos son:
</p>
<ul>
  <li>Collares</li>
  <li>Aretes</li>
  <li>Anillos</li>
  <li>Lencería</li>
  <li>Lip gloss</li>
</ul>
<!--no cambies esta nota pq quiero mucho a mi amiga y no puedes quitar nada, especialmente lo de bff oiste?-->

<p>
  Nuestra tienda comenzó como un proyecto en instagram donde se publican fotos
  de los productos <a
    href="https://www.instagram.com/sunny_shop.mgta/"
    target="_blank">(click aquí para ver nuestro feed)</a
  >
</p>
<a href="https://www.instagram.com/p/CdJu2b8pCpz/"
  ><img src="/collar.jpg" alt="accesorios" width="200" /></a
>
Próximamente contaremos con un e-commerce al cual podrás acceder a traves de
<a href="#">este enlace</a>
<p>
  hasta entonces, puedes contactarnos a través de nuestro <a href="#contactos"
    >correo</a
  >
  y <a href="#contactos">número telefónico</a>
</p>

<h3>Reseñas</h3>
<form on:submit|preventDefault={() => alert("Gracias por tu comentario")}>
  <ul>
    <li><input type="text" placeholder="Nombre" required /></li>

    <li><input type="text" placeholder="Apellido" required /></li>
    <li>
      <input type="text" placeholder="Escriba su opinión aquí..." />
      <button type="sumbmit">Enviar</button>
    </li>
    <p>¿te pareció útil la información de la página?</p>

    <li><label><input type="radio" name="opcion" /> Si</label></li>
    <li><label><input type="radio" name="opcion" /> No</label></li>

    <p>¿te pareció útil la información de la página?</p>

    <li><label><input type="radio" name="opcion" /> Si</label></li>
    <li><label><input type="radio" name="opcion" /> No</label></li>
  </ul>
</form>

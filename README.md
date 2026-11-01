# Sir Patrick Stewart – Web de tribut

Pàgina web d'una sola pàgina sobre la carrera de Sir Patrick Stewart, feta amb **Angular** i **Tailwind CSS**.

## Contingut

- **Inici**: presentació amb imatge i botó cap als personatges.
- **Biografia**: resum de la seva vida i carrera, dades destacades i fotos.
- **Personatges**: targetes amb els seus papers (imatge, descripció i botó "Més informació").
- **Footer**: enllaços i contacte.

## Estructura

```
src/
  app/
    header/        capçalera i menú de navegació
    hero/          secció d'inici
    biografia/     secció de biografia
    portada/       targeta d'un personatge
    desplegable/   informació ampliada del personatge
    footer/        peu de pàgina
    personajes.ts  dades dels personatges
public/assets/     imatges (hero.jpg, shakespeare.jpg, picard.jpg, xavier.jpg i personajes/)
```

## Com executar-ho

```bash
npm install
npm start      # o: ng serve
```

Obre `http://localhost:4200`.

## Autoria

Marta Lucea – marta.lucea.7e7@itb.cat
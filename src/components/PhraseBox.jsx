import './styles/PhraseBox.css'

const PhraseBox = ({handleChangePhrase, phrase}) => {


  return (
    <section className='phraseBox'>

      <h1>Fortune Cookies</h1>

      <section className='phraseLetter'>
        <button className= 'click' onClick={handleChangePhrase}>Try it!</button>
        <article>
          <p>
            {phrase.phrase}
          </p>
        </article>
      </section>

      <footer className='author'><h4>Fuente: {phrase.author}</h4></footer>
      
    </section>
  );
};

export default PhraseBox


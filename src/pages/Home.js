import React, { useContext, useEffect, useState } from 'react';
import DataContext from '../core/DataContext.js';
import CharacterCard from '../components/CharacterCard.js';

const Home = () => {
  const { hiraganaList, katakanaList } = useContext(DataContext);
  const hl = hiraganaList.flat();
  const kl = katakanaList.flat();
  const [hiragana, setHiragana] = useState(null);
  const [katakana, setKatakana] = useState(null);

  useEffect(() => {
    refresh(0);
    refresh(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hiraganaList, katakanaList]);

  const refresh = (mode = 1) => {
    if (mode)
      setKatakana(getRandomItem(kl));
    else
      setHiragana(getRandomItem(hl));
  }

  function getRandomItem(list) {
    return list[Math.floor(Math.random() * list.length)]
  }

  return (
    <div>
      {hiragana &&
        <CharacterCard
          header={'Quick Hiragana:'}
          character={hiragana.character}
          label={hiragana.label}
          refresh={() => refresh(0)} />
      }
      {katakana &&
        <CharacterCard
          header={'Quick Katakana:'}
          character={katakana.character}
          label={katakana.label}
          refresh={() => refresh(1)} />
      }
    </div>
  );
}

export default Home;
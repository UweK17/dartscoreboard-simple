import React, {useState} from 'react'

const PlayerButton = () => {

  const [btnState, setBtnState] = useState(false);

  function handleClick() {
    setBtnState(btnState => !btnState);
  }

  let toggleClassCheck = btnState ? ' active' : '';

  return (
    <button
      className={`btn${toggleClassCheck}`}
      onClick={handleClick}
      >Player</button>
  )
}

export default PlayerButton
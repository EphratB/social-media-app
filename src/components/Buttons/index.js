import { useState } from "react";
function Buttons() {
  const [countLikess, setCountLikes] = useState(0);
  const handlepost = () => {
    setCountLikes(countLikess + 1);
  };

  return (
    <div>
      <button btnlike="Likes" onClick={handlepost}>
        Likes:
      </button>
      &nbsp;
      <button btndislike="DisLikes" onClick={handlepost}>
        Dislikes:
      </button>
      <div>
        {countLikess}&nbsp; {countLikess}
      </div>
    </div>
  );
}
export default Buttons;

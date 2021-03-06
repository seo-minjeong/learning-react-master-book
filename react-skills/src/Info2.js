import React, { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [visible, setVisible] = useState(false);

  //   useEffect(() => {
  //     console.log("렌더링이 완료되었습니다!");
  //     console.log({
  //       name,
  //       nickname,
  //     });
  //   });

  useEffect(() => {
    console.log("effect");
    return () => {
      console.log("cleanup");
    };
  }, []);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>

      <div>
        <button type="button" onClick={() => setVisible(!visible)}>
          {visible ? "숨기기" : "보이기"}
        </button>
        {visible && <Info />}
      </div>

      <div>
        <div>
          <b>이름: </b>
          {name}
        </div>
        <div>
          <b>닉네임: </b>
          {nickname}
        </div>
      </div>
    </>
  );
};

export default Info;

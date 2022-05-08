import react from 'react';

const style = {
  width: '400px',
  height: '30px',
  margin: '8px',
  padding: '8px',
  backgroundColor: '#c1ffff',
  borderRadius: '8px',
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};

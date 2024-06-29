const Message = ({ author, message }) => {
    
  return (
    <div>
      <p>Author: {author} </p>
      <p>{message}</p>
       
    </div>
  );
};

export default Message;
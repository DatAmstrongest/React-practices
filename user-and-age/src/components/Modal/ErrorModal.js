import Modal from "react-modal";

const ErrorModal = (props) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const closeModal = () => {
    props.isUsernameCorrect(true);
    props.isAgeCorrect(true);
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      style={customStyles}
    >
      <h2>Invalid Input</h2>
      <div>{props.text}</div>
      <form>
        <button onClick={closeModal}>close</button>
      </form>
    </Modal>
  );
};

export default ErrorModal;

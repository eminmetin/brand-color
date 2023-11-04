import { useState } from 'react';
import '../index.scss';
import Modal from 'react-modal';
import { SlClose } from 'react-icons/sl';
function Sidebar() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };
  return (
    <>
      <aside className='sidebar'>
        <div className='logo'>
          <a>
            Brand<b>Colors</b>
          </a>
        </div>
        <div className='descriptions'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos illo cum
          laborum neque pariatur distinctio ullam animi cumque voluptates porro!
        </div>
        <nav className='menu'>
          <ul>
            <li>
              <a onClick={toggleModal}>About BrandColors</a>
            </li>
          </ul>
        </nav>
      </aside>

      <Modal
        onRequestClose={toggleModal}
        isOpen={modalIsOpen}
        className='about-modal'
        overlayClassName='about-modal-overlay'
      >
        <button onClick={toggleModal} className='modal-close-btn'>
          <SlClose />
        </button>
        <h3>About Brand Color</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque ab
          possimus incidunt earum repellendus nemo mollitia omnis architecto!
          Voluptate, unde!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure velit,
          aut laborum deleniti quibusdam minus quidem assumenda amet aliquam
          doloribus!
        </p>
      </Modal>
    </>
  );
}

export default Sidebar;

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { BsThreeDotsVertical, BsPencilSquare } from "react-icons/bs";
import { BiSolidTrash } from "react-icons/bi";

import style from "./InfoBlock.module.css";

import editImg from "../../images/icon/pencil.png";
import deleteImg from "../../images/icon/hand-pointing.png";

import Modal from "../Modal";

export default function InfoBlock({ type, id, info, onDelete, onEdit }) {
  const [modal, setModal] = useState(false);
  const [newName, setNewName] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [typeModal, setTypeModal] = useState("edit");
  const dispatch = useDispatch();

  const openModalEdit = () => {
    setIsModalOpen(true);
    setModal(false);
    setTypeModal("edit");
  };

  const openModalDelete = () => {
    setIsModalOpen(true);
    setModal(false);
    setTypeModal("delete");
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleModal = () => {
    setModal(!modal);
  };

  const handlerDelete = () => {
    dispatch(onDelete(id));
    setIsModalOpen(false);
  };

  const handlerEdit = () => {
    dispatch(onEdit({ id, name: newName }));
    setIsModalOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setModal(false);
    }
  };

  useEffect(() => {
    if (modal) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [modal, setModal]);

  console.log(modal);
  return (
    <div className={style.info}>
      <Link to={`/faculties/${info}`}>
        <p>{info}</p>
      </Link>
      <button onClick={handleModal}>
        <BsThreeDotsVertical />
      </button>

      {modal && (
        <div className={style.modal}>
          <button onClick={openModalEdit}>
            <BsPencilSquare />
            <p>Edit</p>
          </button>
          <button onClick={openModalDelete}>
            <BiSolidTrash />
            <p>Delete</p>
          </button>
        </div>
      )}

      <Modal isOpen={isModalOpen} onClose={onCloseModal}>
        {typeModal === "edit" ? (
          <>
            <img src={editImg} width="40" alt="Edit" />
            <h2>EDIT {type} INFORMATION</h2>
            <label>
              {type}
              <br />
              <input
                type="text"
                onChange={(event) => {
                  setNewName(event.target.value);
                }}
                name={type}
                value={newName}
                placeholder={type}
              />
            </label>
            <div>
              <button onClick={handlerEdit}>Save</button>
            </div>
          </>
        ) : (
          <>
            <img src={deleteImg} width="40" alt="Delete" />
            <h2>{type} REMOVAL</h2>
            <p>
              All materials and information about the faculty will be deleted
            </p>
            <div>
              <button onClick={null}>NO</button>
              <button onClick={handlerDelete}>YES</button>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
}

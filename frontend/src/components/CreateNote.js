import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

export default function CreateNote() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
    date: new Date(),
    userSelected: "",
    _id: ""
  });

  // ============================
  // CARGAR USUARIOS
  // ============================
  useEffect(() => {
    async function loadUsers() {
      const res = await axios.get("http://localhost:4000/api/users");
      setUsers(res.data);

      if (res.data.length > 0) {
        setNote(n => ({ ...n, userSelected: res.data[0]._id }));
      }
    }

    loadUsers();
  }, []);

  // ============================
  // CARGAR NOTA SI HAY ID
  // ============================
  useEffect(() => {
    async function loadNote() {
      if (!id) return;

      const res = await axios.get("http://localhost:4000/api/notes/" + id);
      const n = res.data;

      setNote({
        title: n.titulo,
        content: n.contenido,
        date: n.date ? new Date(n.date) : new Date(),
        userSelected: n.autor?._id || "",
        _id: n._id
      });

      setEditing(true);
    }

    loadNote();
  }, [id]);

  // ============================
  // MANEJAR INPUTS
  // ============================
  const onInputChange = e => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  const onChangeDate = date => {
    setNote({ ...note, date });
  };

  // ============================
  // GUARDAR NOTA
  // ============================
  const onSubmit = async e => {
    e.preventDefault();

    const payload = {
      titulo: note.title,
      contenido: note.content,
      date: note.date,
      autor: note.userSelected
    };

    try {
      if (editing) {
        await axios.put("http://localhost:4000/api/notes/" + note._id, payload);
        console.log("Nota actualizada exitosamente");
      } else {
        await axios.post("http://localhost:4000/api/notes", payload);
        console.log("Nota creada exitosamente");
      }

      navigate("/");
    } catch (error) {
      console.error("Error al guardar nota:", error);
      alert("Error al guardar: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="col-md-6 offset-md-3">
      <div className="card card-body">
        <h4>{editing ? "Editar nota" : "Crear nota"}</h4>

        <form onSubmit={onSubmit}>

          {/* SELECT USUARIO */}
          <div className="form-group mb-3">
            <select
              className="form-control"
              name="userSelected"
              value={note.userSelected}
              onChange={onInputChange}
              required
            >
              {users.map(u => (
                <option key={u._id} value={u._id}>
                  {u.username}
                </option>
              ))}
            </select>
          </div>

          {/* TÍTULO */}
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Título"
              name="title"
              value={note.title}
              onChange={onInputChange}
              required
            />
          </div>

          {/* CONTENIDO */}
          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="Contenido"
              name="content"
              value={note.content}
              onChange={onInputChange}
              required
            ></textarea>
          </div>

          {/* FECHA */}
          <div className="form-group mb-3">
            <DatePicker
              className="form-control"
              selected={note.date}
              onChange={onChangeDate}
            />
          </div>

          <button className="btn btn-primary">
            {editing ? "Actualizar" : "Guardar"}
          </button>
        </form>
      </div>
    </div>
  );
}
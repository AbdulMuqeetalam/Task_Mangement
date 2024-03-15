import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const List = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => setTasks(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/delete/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-flex vh-100 bg-primmary justify-content-center align-items-center">
      <div className="w-70 rounded p-4">
        <h3>Manage Task</h3>
        <table class="table table-success table-striped-columns">
          <thead>
            <tr>
              <th>Id</th>
              <th>Task</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((data, i) => {
              return (
                <tr key={i}>
                  <td>{data.id}</td>
                  <td>{data.task}</td>
                  <td>
                    <Link to={`edit/${data.id}`} className="btn btn-dark">
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger ms-2"
                      onClick={(e) => {
                        handleDelete(data.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Link to="/task" className="btn btn-secondary">
          Add Tasks
        </Link>
      </div>
    </div>
  );
};

export default List;

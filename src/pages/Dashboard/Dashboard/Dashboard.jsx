import { useForm } from "react-hook-form";
import Container from "../../../components/Container";
import "./Dashboard.css";
import FormRequiredErrorMsg from "../../../components/FormRequiredErrorMsg";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  const [refetch, setRefetch] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const handleAddNew = async (data) => {
    console.log(data);
    const dataToPost = {
      email: "nur.mail@gmail.com",
      ...data,
    };
    reset();
    const res = await axios.post("http://localhost:5000/task", dataToPost);
    if (res.data.insertedId) {
      toast.success("Task added successfully");
      document.getElementById("addNewFromModal").close();
      setRefetch(!refetch);
    }
  };

  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/tasks?email=${user?.email}`)
      .then((data) => setTodos(data.data));
  }, [user, refetch]);

  return (
    <Container className="py-12">
      <h2 className="text-3xl text-center font-bold">
        Task Management Dashboard
      </h2>
      <div className="w-fit mx-auto my-6">
        <button
          onClick={() => document.getElementById("addNewFromModal").showModal()}
          className="px-4 py-2 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 duration-150">
          Add New
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-lg bg-red-50 border border-red-300 p-4">
          <h2 className="text-center py-2 font-bold bg-red-500 rounded-lg mb-4 text-white">
            To Do&apos;s
          </h2>
          <ul className="min-h-40 max-h-80 overflow-auto custom-scroll">
            {/* to do list */}
            {todos.map((todo) => (
              <li key={todo?._id}>
                <h3 className="text-lg font-semibold">{todo?.title}</h3>
                <p>{todo?.description}</p>
                <p>Due Date: {todo?.deadline}</p>
                <p>
                  Priority: <span className="font-bold">{todo?.priority}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg bg-blue-50 border border-blue-300 p-4">
          <h2 className="text-center py-2 font-bold bg-blue-500 rounded-lg mb-4 text-white">
            Ongoing
          </h2>
          <ul className="min-h-40 max-h-80 overflow-auto custom-scroll">
            {/* ongoing list */}
          </ul>
        </div>
        <div className="rounded-lg bg-green-50 border border-green-400 p-4">
          <h2 className="text-center py-2 font-bold bg-green-600 rounded-lg mb-4 text-white">
            Complete
          </h2>
          <ul className="min-h-40 max-h-80 overflow-auto custom-scroll">
            {/* complete list */}
          </ul>
        </div>
      </div>
      <dialog id="addNewFromModal" className="modal">
        <div className="modal-box text-center">
          <h3 className="font-bold text-lg">Add New Task</h3>
          <p className="py-4">
            {`By default it will be added to the "To Do List"`}
          </p>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="modal-action">
            <form
              method="dialog"
              className="card-body -mt-16"
              onSubmit={handleSubmit(handleAddNew)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  {...register("title", { required: true })}
                  placeholder="Title of the task"
                  className="input input-bordered"
                />
                {errors.title && <FormRequiredErrorMsg />}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <textarea
                  {...register("description", { required: true })}
                  placeholder="Title of the task"
                  className="input input-bordered pt-2 h-20"></textarea>
                {errors.description && <FormRequiredErrorMsg />}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Deadline</span>
                </label>
                <input
                  type="date"
                  {...register("deadline", { required: true })}
                  className="input input-bordered"
                />
                {errors.deadline && <FormRequiredErrorMsg />}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Priority Level</span>
                </label>
                <select
                  defaultValue="low"
                  {...register("priority")}
                  className="input input-bordered">
                  <option value="high">High</option>
                  <option value="moderate">Moderate</option>
                  <option value="low">Low</option>
                </select>
                {errors.priority && <FormRequiredErrorMsg />}
              </div>
              <button className="btn mt-4 bg-blue-500 text-white hover:bg-blue-600 duration-150">
                Add This Task
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </Container>
  );
};

export default Dashboard;

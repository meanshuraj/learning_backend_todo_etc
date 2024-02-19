import mongoose from 'mongoose';
const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: bool,
      defalut: false,
    },
    createdBy: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
    subTodos: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'SubTodo',
      },
    ],
  },
  { timestamps: true }
);
export const Todo = mongoose.model('Todo', todoSchema);

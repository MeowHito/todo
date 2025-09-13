// src/App.tsx
import React, { useState } from "react";
import { useTodoStore } from "./storage/todoStore";

function App() {
  const [inputText, setInputText] = useState("");
  const todos = useTodoStore((s) => s.todos);
  const addTodo = useTodoStore((s) => s.addTodo);
  const removeTodo = useTodoStore((s) => s.removeTodo);

  const handleAdd = () => {
    if (inputText.trim() === "") return;
    addTodo(inputText.trim());
    setInputText("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-2xl card rounded-2xl p-6">
        <header className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold">Todo List</h1>
            <p className="text-sm text-[color:var(--muted)]"></p>
          </div>
          <div className="text-sm text-[color:var(--muted)]">💡 Press to add</div>
        </header>

        {/* input */}
        <div className="flex gap-3 mb-6">
          <input
            className="flex-1 rounded-lg px-4 py-3 bg-[color:var(--panel)] border border-[rgba(255,255,255,0.04)] placeholder:text-[color:var(--muted)] input-focus"
            placeholder="Add a new todo..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") handleAdd(); }}
          />
          <button
            onClick={handleAdd}
            className="rounded-lg px-4 py-2 bg-[color:var(--accent)]/12 border border-[rgba(125,211,252,0.14)] hover:bg-[color:var(--accent)]/18 transition"
            aria-label="Add todo"
          >
            <span className="text-[color:var(--accent)] font-medium">Add</span>
          </button>
        </div>

        {/* list */}
        <ul className="divide-y divide-[rgba(255,255,255,0.02)]">
          {todos.length === 0 ? (
            <li className="py-6 text-center text-[color:var(--muted)]">ยังไม่ได้เพิ่มข้อมูล</li>
          ) : (
            todos.map((todo) => (
              <li key={todo.id} className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[color:var(--accent)]/70" />
                  <span className="text-sm">{todo.text}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => removeTodo(todo.id)}
                    className="text-sm px-3 py-1 rounded-md bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.03)] transition text-[color:var(--muted)]"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>

        {/* footer */}
        <footer className="mt-6 text-right text-xs text-[color:var(--muted)]">
          {todos.length} item{todos.length !== 1 ? "s" : ""}
        </footer>
      </div>
    </div>
  );
}

export default App;

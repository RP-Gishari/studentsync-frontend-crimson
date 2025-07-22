/* eslint-disable no-unused-vars */
import { create } from "zustand";
import { API } from "../lib/api";
const useStudentStore = create((set, get) => ({
  students: [],
  student: {},
  loading: false,
  error: null,

  // Fetch all students
  fetchStudents: async () => {
    set({ loading: true, error: null });
    try {
      const response = await API.getAllStudents();
      if (response.success) {
        set({ students: response.data, loading: false });
      } else {
        set({ error: response.message, loading: false });
      }
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // Get single student
  getStudent: async (id) => {
    set({ loading: true, error: null });
    try {
      const response = await API.getStudent(id);
      if (response.success) {
        set({ student: response.data, loading: false });
      } else {
        set({ error: response.message, loading: false });
      }
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // Add student
  addStudent: async (studentData) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_API_URL}/students`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(studentData),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to add student");
      }

      const result = await response.json();
      set({ loading: false });
    } catch (error) {
      set({
        error: error.message || "Request failed",
        loading: false,
      });
    }
  },

  // Update student
  updateStudent: async (id, studentData) => {
    set({ loading: true, error: null });
    // implementation goes here
  },

  // Delete student
  deleteStudent: async (id) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_API_URL}/students/${id}`,
        {
          method: "DELETE",
        },
      );

      if (!response.ok) {
        throw new Error("Failed to delete student");
      }
      const updatedStudents = get().students.filter(
        (student) => student.id !== id,
      );
      set({ students: updatedStudents, loading: false });
    } catch (error) {
      set({
        error: error.message || "Request failed",
        loading: false,
      });
    }
  },
}));

export default useStudentStore;

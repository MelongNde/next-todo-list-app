import { Festive } from "next/font/google"

const baseUrl = 'http://localhost:3002'

export const getAllTodos = async (): Promise<Itask[]> => {
    const res = await fetch(`${baseUrl}/tasks`)
    const todos = await res.json()
    return todos
}
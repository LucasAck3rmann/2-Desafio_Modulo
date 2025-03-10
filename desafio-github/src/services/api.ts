import { User, Repository } from "../types";

/**
 * Busca dados de um usuário no GitHub
 * 
 * @param username - Nome de usuário para buscar
 * @returns Promise com os dados do usuário
 * @throws Error quando o usuário não é encontrado
 */
export async function getUser(username: string): Promise<User> {
  const response = await fetch(`https://api.github.com/users/${username}`);

  if (!response.ok) {
    throw new Error("User not found");
  }

  return response.json();
}

/**
 * Busca repositórios de um usuário no GitHub
 * 
 * @param username - Nome de usuário cujos repositórios serão buscados
 * @returns Promise com lista de repositórios
 * @throws Error quando falha ao buscar repositórios
 */
export async function getRepositories(username: string): Promise<Repository[]> {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch repositories");
  }

  return response.json();
}

import styled from "styled-components";

export const TableWrapper = styled.div`
  max-height: 40rem;
  overflow-y: auto;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

export const StyledTable = styled.table`
  width: 100%;

  th, td {
    padding: 1rem;
    text-align: left;
    border: 1px solid #ddd;
    background-color: #f9f9f9;
  }

  th {
    background-color: #4a90e2;
    color: white;
    padding-top: 1rem;
    font-weight: bold;
    position: sticky;
    top: 0; 
    z-index: 1;
  }

  tr:nth-child(even) td {
    background-color: #e6f0fa;
  }

  tr:hover td {
    background-color: #d0e3fc;
    cursor: pointer;
  }
`;

export const LinkButton = styled.a`
  color: #357edd; /* azul */
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

// Estilizando os controladores de paginação (botoes, select e texto)
export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;

  p {
    margin: 0;
    font-weight: 600;
    color: #333;
  }

  select {
    padding: 0.4rem 0.6rem;
    border-radius: 0.3rem;
    border: 1px solid #bbb;
    background-color: white;
    cursor: pointer;
    font-size: 1rem;
    color: #333;
    transition: border-color 0.3s;

    &:focus {
      outline: none;
      border-color: #4a90e2;
      box-shadow: 0 0 5px rgba(74,144,226,0.5);
    }
  }

  button {
    padding: 0.4rem 1rem;
    border-radius: 0.4rem;
    border: 1px solid #4a90e2;
    background-color: #4a90e2;
    color: white;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s, border-color 0.3s;

    &:disabled {
      background-color: #a0bde8;
      border-color: #a0bde8;
      cursor: not-allowed;
      color: #eee;
    }

    &:not(:disabled):hover {
      background-color: #357edd;
      border-color: #357edd;
    }
  }

  span {
    font-weight: 600;
    color: #555;
  }
`;

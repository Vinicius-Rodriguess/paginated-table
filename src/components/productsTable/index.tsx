import { useState, type ChangeEvent } from "react";
import type { Product } from "../../types/product";

import { LinkButton, StyledTable, Container, StyledDiv, TableWrapper } from "./styles";

type TableProps = {
  products: Product[];
};

function ProductsTable({ products }: TableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const handleItemsPerPageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <Container>
      <TableWrapper>
        <StyledTable>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Descricao</th>
              <th>Preço</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product, index) => (
              <tr key={index}>
                <td>{product.produto}</td>
                <td>{product.descricao}</td>
                <td>{product.preco}</td>
                <td>
                  <LinkButton href={product.link} target="_blank">
                    Ver produto
                  </LinkButton>
                </td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </TableWrapper>

      <StyledDiv>
        <p>Numero de itens</p>
        <select onChange={(e) => handleItemsPerPageChange(e)}>
          <option value="10">
            10
          </option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Anterior
        </button>
        <span>
          Página {currentPage} de {totalPages}
        </span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Próxima
        </button>
      </StyledDiv>
    </Container>
  );
}

export default ProductsTable;

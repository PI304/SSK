import styled from 'styled-components';
import SSelectOptionS from './SelectOption';


function Table({ columns, datas }) {
    return (
        <div>
            <SSelectWrapperD>
                <SSelectOptionS>
                    <option>최신순 정렬</option>
                </SSelectOptionS>
            </SSelectWrapperD>
            <div>
                <STableT>
                    <thead>
                    <tr>
                        {columns.map((column) => (
                            <th key={column}>{column}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {datas.map((data) => (
                        <tr key={data.seq}>
                            <td>{data.seq}</td>
                            <td>{data.title}</td>
                            <td>{data.writer}</td>
                            <td>{data.date}</td>
                        </tr>
                    ))}
                    </tbody>
                </STableT>
            </div>
        </div>
    );
}

const STableT = styled.table`
  width:100%;
  table-layout: fixed;
  border-collapse: collapse;
  text-align: center;
  th{
    background-color: #E4E9F0;
  }
  thead th:nth-child(1) {
    width: 10%;
  }

  thead th:nth-child(2) {
    width: 60%;
  }

  thead th:nth-child(3) {
    width: 10%;
  }

  thead th:nth-child(4) {
    width: 20%;
  }

  td:nth-child(2) {
    text-align: left;
  }

  td {
    border-bottom: 0.1rem solid #E4E9F0;
  }

  th, td {
    padding: 1.8rem;
    font-size: 1.4rem;
    color: #333333;
  }
`;

const SSelectWrapperD = styled.div`
  padding: 0.8rem 0rem;
  overflow: hidden;
`;

export default Table;
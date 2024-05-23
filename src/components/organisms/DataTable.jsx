import React from 'react';
import { Row, Col, Form, FormControl  } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import DataTable, { Alignment, Direction } from 'react-data-table-component-with-filter';
import './DataTable.scss';

//#region Filter Component
// const FilterComponent = ({ filterText, onFilter, onClear }) => (
// 	<>
// 	<Form.Group as={Col} md="3">
// 		<Form.Control
// 			id="search"
// 			type="text"
// 			placeholder="Search All"
// 			aria-label="Search Input"
// 			value={filterText}
// 			onChange={onFilter}
// 		/>
// 	</Form.Group>
// 	</>
// );
//#endregion

const customStyles = {
	headRow: {
	  style: {
		fontWeight: 'bold',
		wrap: true,
	  },
	},
  };

const Filtering  = (props) => {
    const [filterText, setFilterText] = React.useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);

	const filteredItems = props.filterItems(props.data, filterText);

	return (
		<>
		<Card>
			<Card.Body>
			<Row className="mb-3"/>
				{/* <Row className="mb-3">
					<FilterComponent as={Col} md="4" onFilter={e => setFilterText(e.target.value)} //onClear={handleClear} filterText={filterText} />
				</Row> */}
				<Row className="mb-4"/>
				<DataTable
					columns={props.columns}
					data={filteredItems}
					pagination
					paginationResetDefaultPage={resetPaginationToggle}
					persistTableHead
					highlightOnHover
					customStyles={customStyles}
					onRowClicked={row => props.handleRowClick(row)}
				/>
			</Card.Body>
		</Card>
		</>
	);
}

export default Filtering 
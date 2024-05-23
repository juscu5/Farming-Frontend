import React, { useState, useEffect, useMemo } from 'react';
import { Table } from 'react-bootstrap';
import './CostSavings.scss';
import { Card, Button, Row, Col, InputGroup } from 'react-bootstrap';
import CsModal from '../../components/organisms/CsModal';
import CsEditModal from '../../components/organisms/CsEditModal';
import { getSites } from '../../redux/submitform/effects';
import { getCs } from '../../redux/costsavings/effects';
import { selectCs } from '../../redux/costsavings/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getCsrf } from '../../redux/auth/effects';
import { debounce } from 'lodash';
import moment from 'moment';

const CostSavings = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editData, setEditData] = useState();
  const [shouldFetchData, setShouldFetchData] = useState(false);
  const [totals, setTotals] = useState({ Q1: 0, Q2: 0, Q3: 0, Q4: 0 });
  const [editToggle, setEditToggle] = useState(false)

  const handleCloseModal = () => {
    setShowModal(false);
    setEditToggle(false);
  }
  const handleCloseEditModal = () => setShowEditModal(false);

  const dispatch = useDispatch();
  const newData = useSelector(selectCs);

  useEffect(() => {
    delayedCs();
    delayedCsrf();
  }, []);
  
  useEffect(() => {
    delayTotals();
  }, [newData]);

  const delayedCsrf = debounce(() => {
    dispatch(getCsrf());
  }, 300);

  const delayedCs = debounce(() => {
    dispatch(getCs(callbackTrack));
    dispatch(getSites());
  }, 300);

  const callbackTrack = (err) => {
    if (err) {
      toast.error(err?.error, {
        position: "bottom-right"
      });
    }
  };

  // Convert Data
  const convertData = (data) => {
    const groupedData = data.reduce((acc, item) => {
      const key = `${item.site}-${item.year}`;
      if (!acc[key]) {
        acc[key] = {
          site: item.site,
          year: item.year,
          Q1: [],
          Q2: [],
          Q3: [],
          Q4: [],
        };
      }
      const quarterKey = `Q${item.quarter.slice(1)}`;
      const quarterData = {
        cost_id: item.cost_id,
        account: item.account_name,
        amount: item.cost_saved,
      };
      acc[key][quarterKey].push(quarterData); // Store quarter data in an array
      return acc;
    }, {});
  
    const transformedData = Object.values(groupedData);
    return transformedData;
  };

  // Final Data
  const data = useMemo(() => convertData(newData), [newData]);

  // Calculate totals
  const delayTotals = debounce(() => {
    const newTotals = { Q1: 0, Q2: 0, Q3: 0, Q4: 0 };
    data.forEach((obj) => {
      ['Q1', 'Q2', 'Q3', 'Q4'].forEach((quarter) => {
        if (obj[quarter] && obj[quarter].length > 0) {
          obj[quarter].forEach((item) => {
            newTotals[quarter] += parseInt(item.amount, 10);
          });
        }
      });
    });
    setTotals(newTotals);
  }, 300);
  
  const handleCellClick = (siteData, quarterData, quarter) => {
    if (quarterData === null || undefined) {
      const forEdit = {
        site: siteData.site,
        year: siteData.year,
        quarter: quarter,
        account: quarterData === null || undefined ? "" : quarterData.account,
        amount: quarterData === null || undefined ? "" : quarterData.amount,
        cost_id: quarterData === null || undefined ? null : quarterData.cost_id
      };
      setEditToggle(true);
      setEditData(forEdit);
      setShowModal(true);
    } else {
      const forEdit = {
        site: siteData.site,
        year: siteData.year,
        quarter: quarter,
        account: quarterData === null || undefined ? "" : quarterData.account,
        amount: quarterData === null || undefined ? "" : quarterData.amount,
        cost_id: quarterData === null || undefined ? null : quarterData.cost_id
      };
      setEditData(forEdit);
      setShowEditModal(true);
    }
  };

  const formatAmount = (amount) => {
    return parseFloat(amount).toLocaleString({
      style: 'currency',
      currency: 'PHP',
    });
  };

  const refetchCsData = () => {
    delayedCs();
    delayedCsrf();
    delayTotals();
  };

  return (
    <>
      <div className="cost-savings">
        <Row className="mb-3">
          <Col md={5}>
            <Button onClick={() => setShowModal(true)}>Add Account</Button>
          </Col>
        </Row>
        <Card>
          <Card.Body>
            <div className="table-cost">
              <Table bordered size="xl">
                <thead>
                  <tr>
                    <th>{data.year}</th>
                    <th colSpan={2}>Q1</th>
                    <th colSpan={2}>Q2</th>
                    <th colSpan={2}>Q3</th>
                    <th colSpan={2}>Q4</th>
                  </tr>
                  <tr>
                    <th>Site</th>
                    <th>Account</th><th>Cost Savings</th>
                    <th>Account</th><th>Cost Savings</th>
                    <th>Account</th><th>Cost Savings</th>
                    <th>Account</th><th>Cost Savings</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((siteData, siteIndex) => {
                    const maxRows = Math.max(
                      siteData.Q1.length,
                      siteData.Q2.length,
                      siteData.Q3.length,
                      siteData.Q4.length
                    );
                    return Array.from({ length: maxRows }).map((_, rowIndex) => (
                      <tr key={rowIndex}>
                        {rowIndex === 0 && (
                          <td className="center" rowSpan={maxRows}>
                            {siteData.site}
                          </td>
                        )}
                        {['Q1', 'Q2', 'Q3', 'Q4'].map((quarter) => {
                          const currentQuarterData = siteData[quarter];
                          const dataForRow = currentQuarterData[rowIndex];
                          if (dataForRow) {
                            return (
                              <React.Fragment key={`${quarter}-cell-${rowIndex}`}>
                                <td
                                  className="hoverable-account"
                                  onClick={() => handleCellClick(siteData, dataForRow, quarter)}
                                >
                                  {dataForRow.account}
                                </td>
                                <td
                                  className="hoverable-amount"
                                  onClick={() => handleCellClick(siteData, dataForRow, quarter)}
                                >
                                  {formatAmount(dataForRow.amount)}
                                </td>
                              </React.Fragment>
                            );
                          } else {
                            return (
                              <React.Fragment key={`${quarter}-empty-cell-${rowIndex}`}>
                                <td
                                  className="hoverable-account"
                                  onClick={() => handleCellClick(siteData, null, quarter)}
                                />
                                <td
                                  className="hoverable-amount"
                                  onClick={() => handleCellClick(siteData, null, quarter)}
                                />
                              </React.Fragment>
                            );
                          }
                        })}
                      </tr>
                    ));
                  })}
                  <br/>
                  <tr>
                    <th>Total</th>
                    <td></td>
                    <th>₱ {formatAmount(totals.Q1)}</th>
                    <td></td>
                    <th>₱ {formatAmount(totals.Q2)}</th>
                    <td></td>
                    <th>₱ {formatAmount(totals.Q3)}</th>
                    <td></td>
                    <th>₱ {formatAmount(totals.Q4)}</th>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </div>
      <CsModal show={showModal} close={handleCloseModal} data={editData} toggle={editToggle} refetchCsData={refetchCsData}/>
      <CsEditModal show={showEditModal} close={handleCloseEditModal} data={editData} refetchCsData={refetchCsData}/>
    </>
  );
}

export default CostSavings;

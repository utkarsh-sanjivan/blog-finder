import React from 'react';
import { Table, Empty, Skeleton } from 'antd';
import './style.css';

const TableDetails = props => (
  <div className="issue-table-container">
    {props.loading?
      <Skeleton 
        loading={true}
        active
      />
      : props.dataSource.length === 0?
        <Empty 
          className="table-empty-image"
          description={'No Issues Available'}
        />
        : <Table 
          {...props}
          dataSource={props.dataSource}
          columns={props.columns}
          pagination={props.pagination}
        />}
  </div>
);

export default TableDetails;

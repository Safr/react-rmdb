import * as React from 'react';
import Dropdown from 'react-dropdown';
import styled from 'styled-components';
// CONSTANTS
import { SORT_BY, SORT_BY_ORDER } from 'lib/constants/SelectOptions';

const Sorting = () => (
  <Wrapper>
    <div>
      <Label>Sort by</Label>
      <Dropdown
        className="test"
        options={SORT_BY}
        // value={`${this.props.filters.sort_by.label}`}
        // onChange={sort_by => this.props.updateFilters({ ...this.props.filters, sort_by: sort_by })}
      />
    </div>
    <div>
      <Label>Order by</Label>
      <Dropdown
        className="test"
        options={SORT_BY_ORDER}
        // value={`${this.props.filters.order.label}`}
        // onChange={order => this.props.updateFilters({ ...this.props.filters, order: order })}
      />
    </div>
  </Wrapper>
);

export default Sorting;

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    display: inherit;
    padding: 0 8px;
  }

  .Dropdown-arrow {
    display: none;
  }

  .Dropdown-placeholder {
    text-decoration: underline;
  }

  .Dropdown-control {
    padding: 6px 20px 6px 10px;
  }
  .Dropdown-menu {
    width: 120%;
  }
`;

const Label = styled.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
`;

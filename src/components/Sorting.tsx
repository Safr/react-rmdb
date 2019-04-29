import * as React from 'react';
import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
import styled from 'styled-components';
// CONSTANTS
import { SORT_BY, SORT_BY_ORDER } from 'lib/constants/SelectOptions';

export interface Props {
  filters: IFiltersState;
  updateFilters: (filters: IFiltersState) => void;
}

const Sorting: React.FC<Props> = ({ filters, updateFilters }) => (
  <Wrapper>
    <div>
      <Label>Sort by</Label>
      <Dropdown
        options={SORT_BY}
        value={filters.sort_by.label}
        onChange={(sort_by: ISortOrder) =>
          updateFilters({ ...filters, sort_by })
        }
      />
    </div>
    <div>
      <Label>Order by</Label>
      <Dropdown
        options={SORT_BY_ORDER}
        value={filters.order.label}
        onChange={(order: ISortOrder) => updateFilters({ ...filters, order })}
      />
    </div>
  </Wrapper>
);

export default Sorting;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  display: flex;
  align-items: center;
  > div {
    display: flex;
    align-items: center;
    display: inherit;
    padding: 0 8px;

    .Dropdown-arrow {
      display: none;
    }

    .Dropdown-placeholder {
      text-decoration: underline;
    }

    .Dropdown-control {
      /* position: absolute;
      right: 0;
      z-index: 1; */
      padding: 6px 20px 6px 10px;
    }
    .Dropdown-menu {
      width: 120%;
      position: relative;
    }
  }
`;

const Label = styled.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
`;

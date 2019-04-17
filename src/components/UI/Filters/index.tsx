import * as React from 'react';
import styled from 'styled-components';
import InputRange from 'react-input-range';
import Dropdown from 'react-dropdown';

const Filters = () => {
  // resetState = () => {
  //   this.props.resetFilters();
  // };
  const rangeDate = (start, end) =>
    Array.from(
      { length: end - start },
      (value, key) => key + start + 1,
    ).reverse();

  return (
    <AppFilters>
      Filters
      {/* <button type="button" className="filters-reset" onClick={this.resetState}> */}
      <FiltersReset type="button" className="filters-reset">
        <svg
          width="6"
          height="7"
          viewBox="0 0 6 7"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Reset</title>
          <path d="M3.086 6.373c1.28-.144 2.31-1.17 2.455-2.45C5.734 2.245 4.43.818 2.798.8V.05c0-.043-.052-.065-.087-.04L1.16 1.15c-.025.02-.025.058 0 .077l1.55 1.137c.035.026.087.003.087-.038v-.75c1.148.018 2.067.995 1.988 2.162C4.72 4.74 3.9 5.554 2.895 5.618 1.833 5.686.93 4.926.766 3.92c-.03-.186-.192-.32-.38-.32-.234 0-.417.206-.38.437.227 1.432 1.55 2.507 3.08 2.336z" />
        </svg>
        <FiltersResetLabel>Reset</FiltersResetLabel>
      </FiltersReset>
      <ul className="filters-list">
        <FiltersListItem>
          <FilterLabel>Year</FilterLabel>
          <Dropdown
            options={rangeDate(1900, new Date().getFullYear())}
            // value={`${this.props.filters.year}`}
            // onChange={year =>
            //   this.props.updateFilters({
            //     ...this.props.filters,
            //     year: year.value,
            //   })
            // }
          />
        </FiltersListItem>

        <FiltersListItem>
          <FilterLabel>Rating</FilterLabel>
          <InputRange
            minValue={0}
            maxValue={10}
            draggableTrack
            value={{ min: 3, max: 4 }}
            onChange={() => console.log('d')}
            // value={this.props.filters.rating}
            // onChange={rating =>
            //   this.props.updateFilters({
            //     ...this.props.filters,
            //     rating,
            //   })
            // }
          />
        </FiltersListItem>

        <FiltersListItem>
          <FilterLabel>Duration</FilterLabel>
          <InputRange
            minValue={0}
            maxValue={500}
            draggableTrack
            value={{ min: 3, max: 443 }}
            onChange={() => console.log('d')}
            // value={this.props.filters.runtime}
            // onChange={runtime =>
            //   this.props.updateFilters({
            //     ...this.props.filters,
            //     runtime,
            //   })
            // }
          />
        </FiltersListItem>
      </ul>
    </AppFilters>
  );
};

export default Filters;

//

const AppFilters = styled.div`
  color: #fff;
  padding: 10px 15px;

  ul {
    padding: 0;
    margin-top: 10px;
    list-style-type: none;
  }

  .input-range__slider {
    appearance: none;
    background: #ff424f;
    border: 1px solid #ff424f;
    border-radius: 100%;
    cursor: pointer;
    display: block;
    height: 12px;
    width: 12px;
    margin-left: -4px;
    margin-top: -8px;
    outline: none;
    position: absolute;
    top: 50%;
    transition: transform 0.2s ease-out;
  }
  .input-range__slider:active {
    transform: scale(1.3);
  }
  .input-range--disabled .input-range__slider {
    background: #cccccc;
    border: 1px solid #cccccc;
    box-shadow: none;
    transform: none;
  }

  .input-range__slider-container {
    transition: left 0.3s ease-out;
  }

  .input-range__label {
    color: #aaaaaa;
    font-size: 0.6rem;
    transform: translateZ(0);
    white-space: nowrap;
  }

  .input-range__label--min,
  .input-range__label--max {
    bottom: -0.8rem;
    position: absolute;
  }

  .input-range__label--min {
    left: 0;
  }

  .input-range__label--max {
    right: 0;
  }

  .input-range__label--value {
    display: none;
  }

  .input-range__label-container {
    left: -50%;
    position: relative;
  }
  .input-range__label--max .input-range__label-container {
    left: 50%;
  }

  .input-range__track {
    background: #eeeeee;
    border-radius: 0.1rem;
    cursor: pointer;
    display: block;
    height: 0.2rem;
    position: relative;
    transition: left 0.3s ease-out, width 0.3s ease-out;
  }
  .input-range--disabled .input-range__track {
    background: #eeeeee;
  }

  .input-range__track--background {
    left: 0;
    margin-top: -0.15rem;
    position: absolute;
    right: 0;
    top: 50%;
  }

  .input-range__track--active {
    background: #ff424f;
  }

  .input-range {
    height: 1rem;
    position: relative;
    width: 125px;
    /*width: 100%;*/
  }

  .Dropdown-root {
    position: relative;
  }

  .Dropdown-root + .Dropdown-root {
    margin-top: 3px;
  }

  .Dropdown-control {
    font-size: 12px;
    position: relative;
    overflow: hidden;
    border-radius: 2px;
    color: #fff;
    cursor: pointer;
    outline: none;
    padding: 6px 40px 6px 10px;
    transition: all 200ms ease;
  }

  .Dropdown-control:hover {
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
  }

  .Dropdown-arrow {
    border-color: #ff424f transparent transparent;
    border-style: solid;
    border-width: 5px 5px 0;
    content: ' ';
    display: block;
    height: 0;
    margin-top: -ceil(2.5);
    position: absolute;
    right: 10px;
    top: 11px;
    width: 0;
  }

  .Dropdown-root.is-open .Dropdown-arrow {
    border-color: transparent transparent #999;
    border-width: 0 5px 5px;
  }

  .Dropdown-menu {
    background-color: #191c1f;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
    box-sizing: border-box;
    margin-top: -1px;
    max-height: 200px;
    overflow-y: auto;
    position: absolute;
    top: 100%;
    width: 100%;
    z-index: 1000;
    -webkit-overflow-scrolling: touch;
  }

  .Dropdown-menu .Dropdown-group > .Dropdown-title {
    padding: 8px 10px;
    color: rgba(51, 51, 51, 1);
    font-weight: bold;
    text-transform: capitalize;
  }

  .Dropdown-option {
    color: #fff;
    cursor: pointer;
    display: block;
    padding: 8px 10px;
    font-size: 12px;
  }

  .Dropdown-option:last-child {
    border-bottom-right-radius: 2px;
    border-bottom-left-radius: 2px;
  }

  .Dropdown-option:hover {
    color: #ff424f;
  }

  .Dropdown-option.is-selected {
    background-color: #f2f9fc;
    color: #333;
  }

  .Dropdown-noresults {
    box-sizing: border-box;
    color: #ccc;
    cursor: default;
    display: block;
    padding: 8px 10px;
  }
`;

const FiltersListItem = styled.li`
  font-size: 14px;
  padding: 6px 0;
  margin-bottom: 10px;
`;

// @media screen and (min-width: 1200px) {
//   .filters-list__item{
//     display: flex;
//   }
// }

const FilterLabel = styled.label`
  font-size: 11px;
  margin-bottom: 15px;
  display: block;
  width: 30%;
`;

const FiltersReset = styled.button`
  float: right;
  margin-top: 5px;
  background: transparent;
  border: 0;
  color: #afbdc7;
  opacity: 0.5;
  cursor: pointer;

  label {
    cursor: pointer;
  }

  :hover {
    color: #fff;
    opacity: 0.8;

    path {
      fill: #fff;
      opacity: 0.8;
    }
  }

  svg {
    width: 10px;
    height: auto;
    display: inline-block;
    vertical-align: top;
  }

  path {
    fill: #afbdc7;
    opacity: 0.5;
  }
`;

const FiltersResetLabel = styled.label`
  text-transform: uppercase;
  display: inline-block;
  vertical-align: top;
  margin-left: 5px;
`;

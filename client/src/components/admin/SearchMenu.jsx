import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import "./user/styles.css";
import searchIcon from "../../assets/search-icon.svg";

const SearchMenu = ({ searching, searchBy }) => {
  return (
    <>
      <div className="container-fluid d-flex mt-4">
        <InputGroup className="">
          <FormControl
            placeholder={searchBy}
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            style={{ borderRadius: "10px" }}
            onChange={searching}
          />
          <InputGroup.Append>
            <Button
              variant="primary"
              className="ml-3"
              size="sm"
              style={{ borderRadius: "10px" }}
            >
              <img src={searchIcon} alt="search" style={{ width: "50%" }} />
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    </>
  );
};

export default SearchMenu;

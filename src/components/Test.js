
import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

function Test() {

  const [isOpen, setIsOpen] = useState(false);

  return (
  <>  
      <Dropdown onToggle={() => setIsOpen(!isOpen)} show={isOpen}>
      <DropdownButton
        variant=""
        title="
        ︙"
        id="dropdown-menu-button"
        noCaret 
        style={{ "--dropdown-toggle-caret-color": "transparent" }}
        // show={false}
      >
        <Dropdown.Item href="#">Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item href="#">Something else here</Dropdown.Item>
      </DropdownButton>
    </Dropdown>
  
  </>
  );
}

export default Test




"use client";

import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Search = styled("div")(() => ({
  borderRadius: "5px",
  backgroundColor: "#fefefe",
  position: "relative",
  height: "45px",
  border: "1px solid rgba(0,0,0,.15)",

  "&:hover": {
    backgroundColor: alpha("#fefefe", 0.85),
  },
}));

const SearchIconWrapper = styled("div")(() => ({
  height: "100%",
  position: "absolute",
  padding: "0 10px",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const CloseIconWrapper = styled("div")(() => ({
  position: "absolute",
  height: "100%",
  right: 0,
  top: 0,
  padding: "0 10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "&:hover": {
    cursor: "pointer",
  },
}));

const StyledInputBase = styled(InputBase)(() => ({
  color: "inherit",
  width: "100%",
  paddingLeft: "40px",
  paddingRight: "40px",
  paddingTop: "3px",
  height: "100%",
}));

interface SearchBarProps {
  className?: string;
  width?: string;
  height?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onCancelResearch?: (value: string) => void;
  onSearch?: (value: string) => void;
  style?: React.CSSProperties;
  disabled?: boolean;
  options?: string[];
}

const SearchBar = ({
  value,
  width,
  onChange,
  placeholder,
  height,
  onCancelResearch,
  onSearch,
  className,
  style,
  disabled,
}: SearchBarProps) => {
  const [internalValue, setInternalValue] = useState(value || "");

  const handleChange = (e: any) => {
    setInternalValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const handleCancel = () => {
    setInternalValue("");
    if (onCancelResearch) {
      onCancelResearch(internalValue);
    }
  };

  const handleClickOption = (e: any) => {
    setInternalValue(e.target.textContent);
    if (onChange) {
      onChange(e.target.textContent);
    }
    if (onSearch) return onSearch(e.target.textContent);
  };

  const handleKeyUp = (e: any) => {
    if (e.keyCode === 13 || (e.code === "Enter" && onSearch)) {
      onSearch(e?.target?.value);
    } else if (e.keyCode === 27 || e.code === "Escape") {
      handleCancel();
    }
  };

  return (
    <>
      <Search
        key={"SearchBarComponent-root"}
        style={{ ...style, width: width, height: height }}
        className={`SearchBarComponent-root ${className ? className : null}`}
      >
        <SearchIconWrapper>
          <FaSearch />
        </SearchIconWrapper>
        <StyledInputBase
          inputProps={{
            onChange: handleChange,
            value: internalValue,
          }}
          placeholder={placeholder || "Search"}
          onKeyUp={handleKeyUp}
          disabled={disabled}
        />
        {internalValue ? (
          <CloseIconWrapper onClick={handleCancel}>
            <IoClose />
          </CloseIconWrapper>
        ) : null}
      </Search>
    </>
  );
};

export default SearchBar;

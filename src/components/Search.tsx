"use client";

import { useDebounce } from "@/hooks";
import { searchFood } from "@/store/slices/foodSlice";
import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";

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
  style?: React.CSSProperties;
  disabled?: boolean;
}

const SearchBar = ({
  value,
  width,
  placeholder,
  height,
  className,
  style,
  disabled,
}: SearchBarProps) => {
  const dispatch = useDispatch();
  const [internalValue, setInternalValue] = useState(value || "");
  const debouncedQuery = useDebounce(internalValue, 500);

  useEffect(() => {
    if (debouncedQuery) {
      dispatch(searchFood(debouncedQuery));
    } else {
      dispatch(searchFood(""));
    }
  }, [debouncedQuery, dispatch]);

  const handleChange = async (e: any) => {
    setInternalValue(e.target.value || "");
  };

  const handleCancel = () => {
    setInternalValue("");
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

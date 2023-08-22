import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import EN from "../en.png";
import VI from "../vi.png";
import i18next from "i18next";

const SelectLanguage: React.FC = () => {
  const handleChangeLanguage = (event: SelectChangeEvent) => {
    i18next.changeLanguage(event.target.value);
  };

  return (
    <Select
      label="Language"
      onChange={handleChangeLanguage}
      value={i18next.resolvedLanguage}
      sx={{
        padding: 0,
        ["& .MuiSelect-select"]: {
          padding: 0,
        },
      }}
      variant="standard"
    >
      <MenuItem value="en">
        <img
          src={EN}
          width={24}
          height={24}
          alt="EN"
          style={{ margin: "-6px auto -6px" }}
        />
      </MenuItem>
      <MenuItem value="vi">
        <img
          src={VI}
          width={24}
          height={24}
          alt="VI"
          style={{ margin: "-6px auto -6px" }}
        />
      </MenuItem>
    </Select>
  );
};

export default SelectLanguage;

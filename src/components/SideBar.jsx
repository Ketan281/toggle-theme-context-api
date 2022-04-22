import React, { useContext } from "react";
import styles from "./SideBar.module.css";
import { SideOption } from "./SideOption";
import MapIcon from "@mui/icons-material/Map";
import SettingsIcon from "@mui/icons-material/Settings";
import MessageIcon from "@mui/icons-material/Message";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { ThemeContext } from "../contexts/ThemeContext";

export const SideBar = () => {
  const [{ isDark }] = useContext(ThemeContext);
  return (
    <div className={isDark ? styles.mainDiv1 : styles.mainDiv}>
      <div className={styles.user}>
        <SideOption Icon={AccountCircleIcon} />
      </div>
      <div className={styles.firstDiv}>
        <SideOption className={styles.icon} Icon={SignalCellularAltIcon} />
        
        <SideOption Icon={AddShoppingCartIcon} />
        <SideOption Icon={MapIcon} />
        <SideOption Icon={SettingsIcon} />
        <SideOption Icon={MessageIcon} />
        <SideOption Icon={BackupTableIcon} />
      </div>
      <div className={styles.user}>
        <SideOption Icon={AddCircleIcon} />
      </div>
    </div>
  );
};
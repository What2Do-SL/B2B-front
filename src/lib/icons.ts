// lib/utils/icons.ts
import React, { ReactNode } from "react";
import { MdEmail } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { FaUserLarge } from "react-icons/fa6";
import { BiSolidBuildings } from "react-icons/bi";
import { BsBuildingFillGear } from "react-icons/bs";
import { MdDomainAdd } from "react-icons/md";
import { RiFunctionAddFill } from "react-icons/ri";
import { FaUserPlus } from "react-icons/fa6";
import { FaBuildingUser } from "react-icons/fa6";
import { MdOutlineBadge } from "react-icons/md";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { AiFillCloseSquare } from "react-icons/ai";
import { PiSealCheckDuotone } from "react-icons/pi";
import { PiPercentFill } from "react-icons/pi";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { IoTimer } from "react-icons/io5";
import { SiLevelsdotfyi } from "react-icons/si";
import { GrDocumentTime } from "react-icons/gr";
import { TiArrowSortedDown } from "react-icons/ti";
import { TbInfoSquareFilled } from "react-icons/tb";
import { IoLogOutSharp } from "react-icons/io5";
import { IoGridSharp } from "react-icons/io5";
import { FaList } from "react-icons/fa6";
import { MdManageAccounts } from "react-icons/md";

type IconType =
  | "email"
  | "candidate"
  | "candidates"
  | "company"
  | "industry"
  | "add-company"
  | "add-position"
  | "add-candidate"
  | "employees"
  | "position"
  | "question"
  | "analysis-fail"
  | "analysis-success"
  | "percents"
  | "status"
  | "analytics"
  | "expiration"
  | "confidence"
  | "creation-pending"
  | "toggle"
  | "info"
  | "logout"
  | "grid"
  | "list"
  | "edit"
  | "more"
  | "position-level";

interface IconOptions {
  size?: number;
  className?: string;
}

const EditIcon = ({ size = 16, className = "" }) => (
  React.createElement('svg', {
    width: size,
    height: size,
    className: className,
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24"
  }, 
  React.createElement('path', {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
  }))
);

const ArrowRightIcon = ({ size = 16, className = "" }) => (
  React.createElement('svg', {
    width: size,
    height: size,
    className: className,
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24"
  }, 
  React.createElement('path', {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 5l7 7-7 7"
  }))
);

export const getIcon = (
  type: IconType,
  { size = 16, className = "text-green-600" }: IconOptions = {}
): ReactNode => {
  switch (type) {
    case "email":
      return React.createElement(MdEmail, { size, className });
    case "candidate":
      return React.createElement(FaUserLarge, { size, className });
    case "candidates":
      return React.createElement(IoPeople, { size, className });
    case "company":
      return React.createElement(BiSolidBuildings, { size, className });
    case "industry":
      return React.createElement(BsBuildingFillGear, { size, className });
    case "add-company":
      return React.createElement(MdDomainAdd, { size, className });
    case "add-position":
      return React.createElement(RiFunctionAddFill, { size, className });
    case "add-candidate":
      return React.createElement(FaUserPlus, { size, className });
    case "employees":
      return React.createElement(FaBuildingUser, { size, className });
    case "position":
      return React.createElement(MdOutlineBadge, { size, className });
    case "question":
      return React.createElement(BsFillQuestionSquareFill, { size, className });
    case "analysis-fail":
      return React.createElement(AiFillCloseSquare, { size, className });
    case "analysis-success":
      return React.createElement(PiSealCheckDuotone, { size, className });
    case "percents":
      return React.createElement(PiPercentFill, { size, className });
    case "status":
      return React.createElement(FaMagnifyingGlassChart, { size, className });
    case "analytics":
      return React.createElement(TbDeviceDesktopAnalytics, { size, className });
    case "expiration":
      return React.createElement(IoTimer, { size, className });
    case "confidence":
      return React.createElement(SiLevelsdotfyi, { size, className });
    case "creation-pending":
      return React.createElement(GrDocumentTime, { size, className });
    case "toggle":
      return React.createElement(TiArrowSortedDown, { size, className });
    case "info":
      return React.createElement(TbInfoSquareFilled, { size, className });
    case "logout":
      return React.createElement(IoLogOutSharp, { size, className });
    case "grid":
      return React.createElement(IoGridSharp, { size, className });
    case "list":
      return React.createElement(FaList, { size, className });
    case "edit":
      return React.createElement(EditIcon, { size, className });
    case "more":
      return React.createElement(ArrowRightIcon, { size, className });
    case "position-level":
      return React.createElement(MdManageAccounts, { size, className });
    default:
      return null;
  }
};

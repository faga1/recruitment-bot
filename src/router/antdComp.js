import Pagination from "@/pages/comp-pages/Pagination";
import SwitchComp from "@/pages/comp-pages/Switch";
import BottonComp from "@/pages/comp-pages/Botton";
import TableComp from "@/pages/comp-pages/Table";
import AlertComp from "@/pages/comp-pages/Alert";
import InputComp from "@/pages/comp-pages/Input";
import SelectComp from "@/pages/comp-pages/Select";
import TreeSelectComp from "@/pages/comp-pages/TreeSelect";
import DatePickerComp from "@/pages/comp-pages/DatePicker";
import RadioComp from "@/pages/comp-pages/Radio";

export default {
  path: "/comp",
  name: "组件",
  icon: "",
  children: [
    {
      path: "/pagination",
      name: "Pagination",
      icon: "",
      exact: true,
      component: Pagination,
    },
    {
      path: "/switch",
      name: "Switch",
      icon: "",
      exact: true,
      component: SwitchComp,
    },
    {
      path: "/botton",
      name: "Botton",
      icon: "",
      exact: true,
      component: BottonComp,
    },
    {
      path: "/table",
      name: "Table",
      icon: "",
      exact: true,
      component: TableComp,
    },
    {
      path: "/alert",
      name: "Alert",
      icon: "",
      exact: true,
      component: AlertComp,
    },
    {
      path: "/input",
      name: "Input",
      icon: "",
      exact: true,
      component: InputComp,
    },
    {
      path: "/select",
      name: "Select",
      icon: "",
      exact: true,
      component: SelectComp,
    },
    {
      path: "/treeSelect",
      name: "TreeSelect",
      icon: "",
      exact: true,
      component: TreeSelectComp,
    },
    {
      path: "/datePicker",
      name: "DatePicker",
      icon: "",
      exact: true,
      component: DatePickerComp,
    },
    {
      path: "/radio",
      name: "Radio",
      icon: "",
      exact: true,
      component: RadioComp,
    }
  ]
}